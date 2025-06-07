import React from 'react';
import { Clock, Calendar, TrendingUp, Target, Users, Award } from 'lucide-react';

export default function MPCFormation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-8">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Monetary Policy
              <span className="block bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
                Committee
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              The statutory body responsible for India's monetary policy decisions, 
              ensuring price stability while fostering economic growth
            </p>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full translate-x-24 translate-y-24"></div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-16">
        {/* Key Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-6">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">4% Target</h3>
            <p className="text-gray-600 leading-relaxed">
              Inflation target with a tolerance band of ±2% to maintain price stability
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-xl mb-6">
              <Calendar className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Since 2016</h3>
            <p className="text-gray-600 leading-relaxed">
              Established to bring transparency and accountability to monetary policy
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-xl mb-6">
              <Award className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">6 Members</h3>
            <p className="text-gray-600 leading-relaxed">
              Committee comprising RBI and government officials for balanced decisions
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-3xl shadow-xl p-12 mb-16 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            About the MPC
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8 text-center max-w-4xl mx-auto">
              The Monetary Policy Committee (MPC) is a statutory body constituted by the Reserve Bank of India (RBI) 
              under Section 45ZB of the Reserve Bank of India Act, 1934. It is responsible for fixing the benchmark 
              policy interest rate (repo rate) to contain inflation within the specified target level.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900 flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <Target className="w-5 h-5 text-blue-600" />
                  </div>
                  Primary Objective
                </h3>
                <p className="text-gray-700 leading-relaxed pl-11">
                  Maintaining price stability while keeping in mind the objective of growth. 
                  The committee's decisions are guided by an inflation target of 4% with a tolerance band of ±2%.
                </p>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900 flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  Key Functions
                </h3>
                <p className="text-gray-700 leading-relaxed pl-11">
                  Setting the policy repo rate, reviewing economic conditions, and ensuring 
                  monetary policy decisions support sustainable economic growth and financial stability.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Evolution Timeline */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Formation & Evolution
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-16 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full"></div>
            
            <div className="space-y-16">
              {/* Pre-2016 */}
              <div className="relative flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl flex items-center justify-center border-4 border-white shadow-lg relative z-10">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div className="ml-8 flex-1">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <div className="flex items-center mb-4">
                      <span className="text-sm font-medium text-blue-300 bg-blue-900/50 px-3 py-1 rounded-full">
                        Pre-2016
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Governor-led Decisions</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Monetary policy decisions were made by the RBI Governor in consultation with a 
                      Technical Advisory Committee. This approach, while effective, lacked the structured 
                      transparency of a formal committee system.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2016 Formation */}
              <div className="relative flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center border-4 border-white shadow-lg relative z-10">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <div className="ml-8 flex-1">
                  <div className="bg-blue-900/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30">
                    <div className="flex items-center mb-4">
                      <span className="text-sm font-medium text-blue-200 bg-blue-800/50 px-3 py-1 rounded-full">
                        2016
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Formation of MPC</h3>
                    <p className="text-gray-300 leading-relaxed">
                      The Monetary Policy Committee was established under Section 45ZB of the Reserve Bank of India Act, 1934. 
                      This marked a significant step towards modernizing India's monetary policy framework, 
                      aligning it with global best practices.
                    </p>
                  </div>
                </div>
              </div>

              {/* Present */}
              <div className="relative flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center border-4 border-white shadow-lg relative z-10">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div className="ml-8 flex-1">
                  <div className="bg-green-900/30 backdrop-blur-sm rounded-2xl p-8 border border-green-400/30">
                    <div className="flex items-center mb-4">
                      <span className="text-sm font-medium text-green-200 bg-green-800/50 px-3 py-1 rounded-full">
                        Present
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">MPC-led Policy Framework</h3>
                    <p className="text-gray-300 leading-relaxed">
                      The MPC meets bi-monthly to decide on the policy repo rate, bringing transparency, 
                      accountability, and collective wisdom to monetary policy decisions. The committee 
                      continues to evolve, adapting to changing economic conditions while maintaining its core mandate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 p-8">
          <p className="text-gray-600 text-lg">
            Learn more about India's monetary policy framework and the MPC's role in economic stability
          </p>
        </div>
      </div>
    </div>
  );
}