import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  Calendar, 
  Users, 
  TrendingUp, 
  ChevronDown,
  Activity,
  Database
} from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import api from '../../services/api';

interface CorrelationData {
  month_year: string;
  analysis_score: number;
  month: string;
}

interface MemberAnalysisData {
  month_year: string;
  month: string;
  inflation_actual: string;
  inflation_predicted: string;
  inflation_error: string;
  growth_actual: string;
  growth_predicted: string;
  growth_error: string;
  gdp_actual: string;
  gdp_predicted: string;
  gdp_error: string;
}

interface Member {
  name: string;
  member_type: 'internal' | 'external';
}

interface Statistics {
  total_discussions: number;
  unique_members: number;
  internal_members: number;
  external_members: number;
  years_covered: number;
}

const MPCDiscussions: React.FC = () => {
  // State for correlation plot
  const [correlationYear, setCorrelationYear] = useState<number | null>(null);
  const [memberType, setMemberType] = useState<'internal' | 'external'>('internal');
  const [correlationData, setCorrelationData] = useState<CorrelationData[]>([]);
  
  // State for member analysis
  const [analysisYear, setAnalysisYear] = useState<number | null>(null);
  const [selectedMember, setSelectedMember] = useState<string>('');
  const [memberAnalysisData, setMemberAnalysisData] = useState<MemberAnalysisData[]>([]);
  
  // Common state
  const [availableYears, setAvailableYears] = useState<number[]>([]);
  const [availableMembers, setAvailableMembers] = useState<Member[]>([]);
  const [statistics, setStatistics] = useState<Statistics | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Dropdown states
  const [isCorrelationYearOpen, setIsCorrelationYearOpen] = useState(false);
  const [isMemberTypeOpen, setIsMemberTypeOpen] = useState(false);
  const [isAnalysisYearOpen, setIsAnalysisYearOpen] = useState(false);
  const [isMemberNameOpen, setIsMemberNameOpen] = useState(false);

  // Fetch initial data
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const [yearsResponse, membersResponse, statsResponse] = await Promise.all([
          api.get<number[]>('/mpcDiscussions/years/'),
          api.get<Member[]>('/mpcDiscussions/members/'),
          api.get<Statistics>('/mpcDiscussions/statistics/')
        ]);

        setAvailableYears(yearsResponse.data);
        setAvailableMembers(membersResponse.data);
        setStatistics(statsResponse.data);

        // Set default values
        if (yearsResponse.data.length > 0) {
          setCorrelationYear(yearsResponse.data[0]);
          setAnalysisYear(yearsResponse.data[0]);
        }
        if (membersResponse.data.length > 0) {
          setSelectedMember(membersResponse.data[0].name);
        }
      } catch (err) {
        console.error('Error fetching initial data:', err);
        setError('Failed to load initial data');
      } finally {
        setLoading(false);
      }
    };

    fetchInitialData();
  }, []);

  // Fetch correlation data when year or member type changes
  useEffect(() => {
    if (correlationYear && memberType) {
      fetchCorrelationData(correlationYear, memberType);
    }
  }, [correlationYear, memberType]);

  // Fetch member analysis data when year or member changes
  useEffect(() => {
    if (analysisYear && selectedMember) {
      fetchMemberAnalysisData(analysisYear, selectedMember);
    }
  }, [analysisYear, selectedMember]);

  const fetchCorrelationData = async (year: number, type: 'internal' | 'external') => {
    try {
      const response = await api.get<CorrelationData[]>(`/mpcDiscussions/correlation/${year}/${type}/`);
      setCorrelationData(response.data);
    } catch (err) {
      console.error('Error fetching correlation data:', err);
      setError('Failed to load correlation data');
    }
  };

  const fetchMemberAnalysisData = async (year: number, memberName: string) => {
    try {
      const response = await api.get<MemberAnalysisData[]>(`/mpcDiscussions/member-analysis/${year}/${encodeURIComponent(memberName)}/`);
      setMemberAnalysisData(response.data);
    } catch (err) {
      console.error('Error fetching member analysis data:', err);
      setError('Failed to load member analysis data');
    }
  };

  // Convert string values to numbers for charting
  const convertToNumber = (value: string): number => {
    const num = parseFloat(value);
    return isNaN(num) ? 0 : num;
  };

  // Prepare data for individual metric charts
  const prepareMetricData = (metric: 'inflation' | 'growth' | 'gdp') => {
    return memberAnalysisData.map(item => ({
      month: item.month,
      actual: convertToNumber(item[`${metric}_actual`]),
      predicted: convertToNumber(item[`${metric}_predicted`]),
      error: convertToNumber(item[`${metric}_error`])
    }));
  };

  // Custom tooltip for charts
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
          <p className="font-semibold text-gray-800">{`Month: ${label}`}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.color }} className="font-medium">
              {`${entry.name}: ${entry.value}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-xl font-medium">Loading MPC discussions...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <p className="text-red-600 text-xl font-semibold">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-center mb-6">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-4 mr-4">
              <BarChart3 className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">MPC Discussions and Macroeconomic Variables</h1>
              <p className="text-xl text-blue-100 max-w-3xl">
                Analyze correlation patterns and member-specific forecasting performance
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Statistics Cards */}
        {statistics && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-blue-100 rounded-full p-3">
                  <Database className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{statistics.total_discussions}</div>
              <div className="text-sm text-gray-600">Total Discussions</div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-green-100 rounded-full p-3">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{statistics.unique_members}</div>
              <div className="text-sm text-gray-600">Unique Members</div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-purple-100 rounded-full p-3">
                  <Activity className="w-6 h-6 text-purple-600" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{statistics.internal_members}</div>
              <div className="text-sm text-gray-600">Internal Members</div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-orange-100 rounded-full p-3">
                  <TrendingUp className="w-6 h-6 text-orange-600" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{statistics.external_members}</div>
              <div className="text-sm text-gray-600">External Members</div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-teal-100 rounded-full p-3">
                  <Calendar className="w-6 h-6 text-teal-600" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{statistics.years_covered}</div>
              <div className="text-sm text-gray-600">Years Covered</div>
            </div>
          </div>
        )}

        {/* Correlation Plots Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Correlation Plots</h2>
          
          {/* Correlation Controls */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Year Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Year</label>
              <div className="relative">
                <button
                  onClick={() => setIsCorrelationYearOpen(!isCorrelationYearOpen)}
                  className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-left shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900">
                      {correlationYear || 'Select Year'}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isCorrelationYearOpen ? 'rotate-180' : ''}`} />
                  </div>
                </button>

                {isCorrelationYearOpen && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg max-h-64 overflow-y-auto">
                    {availableYears.map((year) => (
                      <button
                        key={year}
                        onClick={() => {
                          setCorrelationYear(year);
                          setIsCorrelationYearOpen(false);
                        }}
                        className={`w-full text-left p-4 hover:bg-gray-50 transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl ${
                          correlationYear === year ? 'bg-blue-50 border-l-4 border-blue-500' : ''
                        }`}
                      >
                        <div className="font-medium text-gray-900">{year}</div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Data Source (Member Type) Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Data Source</label>
              <div className="relative">
                <button
                  onClick={() => setIsMemberTypeOpen(!isMemberTypeOpen)}
                  className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-left shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900">
                      {memberType === 'internal' ? 'Internal Members' : 'External Members'}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isMemberTypeOpen ? 'rotate-180' : ''}`} />
                  </div>
                </button>

                {isMemberTypeOpen && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg">
                    {['internal', 'external'].map((type) => (
                      <button
                        key={type}
                        onClick={() => {
                          setMemberType(type as 'internal' | 'external');
                          setIsMemberTypeOpen(false);
                        }}
                        className={`w-full text-left p-4 hover:bg-gray-50 transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl ${
                          memberType === type ? 'bg-blue-50 border-l-4 border-blue-500' : ''
                        }`}
                      >
                        <div className="font-medium text-gray-900">
                          {type === 'internal' ? 'Internal Members' : 'External Members'}
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Correlation Chart */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              MPC Discussion Focus vs. Inflation ({correlationYear})
            </h3>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={correlationData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="month" 
                  tick={{ fontSize: 12, fill: "#6B7280" }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis 
                  tick={{ fontSize: 12, fill: "#6B7280" }}
                  axisLine={false}
                  tickLine={false}
                  label={{ value: 'Analysis Score', angle: -90, position: 'insideLeft' }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey="analysis_score"
                  stroke="#3B82F6"
                  strokeWidth={3}
                  dot={{ fill: "#3B82F6", strokeWidth: 2, r: 6 }}
                  connectNulls={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Member Analysis Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Member Analysis</h2>
          
          {/* Member Analysis Controls */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Analysis Year Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Year</label>
              <div className="relative">
                <button
                  onClick={() => setIsAnalysisYearOpen(!isAnalysisYearOpen)}
                  className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-left shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900">
                      {analysisYear || 'Select Year'}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isAnalysisYearOpen ? 'rotate-180' : ''}`} />
                  </div>
                </button>

                {isAnalysisYearOpen && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg max-h-64 overflow-y-auto">
                    {availableYears.map((year) => (
                      <button
                        key={year}
                        onClick={() => {
                          setAnalysisYear(year);
                          setIsAnalysisYearOpen(false);
                        }}
                        className={`w-full text-left p-4 hover:bg-gray-50 transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl ${
                          analysisYear === year ? 'bg-blue-50 border-l-4 border-blue-500' : ''
                        }`}
                      >
                        <div className="font-medium text-gray-900">{year}</div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Member Name Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Member</label>
              <div className="relative">
                <button
                  onClick={() => setIsMemberNameOpen(!isMemberNameOpen)}
                  className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-left shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900">
                        {selectedMember || 'Select Member'}
                      </div>
                      {selectedMember && (
                        <div className="text-sm text-gray-500">
                          {availableMembers.find(m => m.name === selectedMember)?.member_type === 'internal' ? 'Internal' : 'External'} Member
                        </div>
                      )}
                    </div>
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isMemberNameOpen ? 'rotate-180' : ''}`} />
                  </div>
                </button>

                {isMemberNameOpen && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg max-h-64 overflow-y-auto">
                    {availableMembers.map((member) => (
                      <button
                        key={member.name}
                        onClick={() => {
                          setSelectedMember(member.name);
                          setIsMemberNameOpen(false);
                        }}
                        className={`w-full text-left p-4 hover:bg-gray-50 transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl ${
                          selectedMember === member.name ? 'bg-blue-50 border-l-4 border-blue-500' : ''
                        }`}
                      >
                        <div className="font-medium text-gray-900">{member.name}</div>
                        <div className="text-sm text-gray-500">
                          {member.member_type === 'internal' ? 'Internal' : 'External'} Member
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Analysis Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Inflation Chart */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Inflation</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={prepareMetricData('inflation')}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis 
                    dataKey="month" 
                    tick={{ fontSize: 10, fill: "#6B7280" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis 
                    tick={{ fontSize: 10, fill: "#6B7280" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="actual"
                    stroke="#10B981"
                    strokeWidth={2}
                    dot={{ fill: "#10B981", strokeWidth: 2, r: 4 }}
                    name="Actual"
                    connectNulls={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="predicted"
                    stroke="#3B82F6"
                    strokeWidth={2}
                    dot={{ fill: "#3B82F6", strokeWidth: 2, r: 4 }}
                    name="Predicted"
                    connectNulls={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="error"
                    stroke="#EF4444"
                    strokeWidth={2}
                    dot={{ fill: "#EF4444", strokeWidth: 2, r: 4 }}
                    name="Error"
                    connectNulls={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Growth Chart */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Growth</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={prepareMetricData('growth')}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis 
                    dataKey="month" 
                    tick={{ fontSize: 10, fill: "#6B7280" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis 
                    tick={{ fontSize: 10, fill: "#6B7280" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="actual"
                    stroke="#10B981"
                    strokeWidth={2}
                    dot={{ fill: "#10B981", strokeWidth: 2, r: 4 }}
                    name="Actual"
                    connectNulls={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="predicted"
                    stroke="#3B82F6"
                    strokeWidth={2}
                    dot={{ fill: "#3B82F6", strokeWidth: 2, r: 4 }}
                    name="Predicted"
                    connectNulls={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="error"
                    stroke="#EF4444"
                    strokeWidth={2}
                    dot={{ fill: "#EF4444", strokeWidth: 2, r: 4 }}
                    name="Error"
                    connectNulls={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* GDP Chart */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">GDP</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={prepareMetricData('gdp')}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis 
                    dataKey="month" 
                    tick={{ fontSize: 10, fill: "#6B7280" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis 
                    tick={{ fontSize: 10, fill: "#6B7280" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="actual"
                    stroke="#10B981"
                    strokeWidth={2}
                    dot={{ fill: "#10B981", strokeWidth: 2, r: 4 }}
                    name="Actual"
                    connectNulls={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="predicted"
                    stroke="#3B82F6"
                    strokeWidth={2}
                    dot={{ fill: "#3B82F6", strokeWidth: 2, r: 4 }}
                    name="Predicted"
                    connectNulls={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="error"
                    stroke="#EF4444"
                    strokeWidth={2}
                    dot={{ fill: "#EF4444", strokeWidth: 2, r: 4 }}
                    name="Error"
                    connectNulls={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MPCDiscussions;