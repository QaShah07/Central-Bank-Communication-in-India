import React from 'react';
import { Users, Award, Building2, GraduationCap } from 'lucide-react';

const MPCMembers: React.FC = () => {
  const members = [
    {
      name: "Dr. Anika Sharma",
      title: "Deputy Governor, Reserve Bank of India",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      description: "Dr. Sharma holds a PhD in Economics from the University of Mumbai and has over 20 years of experience in monetary policy and financial regulation. Her expertise lies in macroeconomic modeling and forecasting.",
      icon: Building2,
      expertise: ["Monetary Policy", "Financial Regulation", "Macroeconomic Modeling"],
      years: "20+ years"
    },
    {
      name: "Mr. Rohan Verma",
      title: "Government Nominee",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      description: "Mr. Verma is an economist with a Master's degree from the Delhi School of Economics. He has worked extensively on fiscal policy and public finance, bringing a wealth of knowledge on government finances to the committee.",
      icon: Award,
      expertise: ["Fiscal Policy", "Public Finance", "Government Relations"],
      years: "15+ years"
    },
    {
      name: "Ms. Priya Kapoor",
      title: "External Member",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      description: "Ms. Kapoor is a renowned academic with a PhD from the Indian Institute of Management, Bangalore. Her research focuses on financial markets and institutions, and she has published widely in leading economics journals.",
      icon: GraduationCap,
      expertise: ["Financial Markets", "Academic Research", "Economic Analysis"],
      years: "18+ years"
    },
    {
      name: "Mr. Arjun Singh",
      title: "Executive Director, Reserve Bank of India",
      image: "https://images.pexels.com/photos/2182969/pexels-photo-2182969.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      description: "Mr. Singh has a Master's in Economics from the London School of Economics and has been with the Reserve Bank for 15 years. His areas of expertise include banking supervision and regulatory policy.",
      icon: Users,
      expertise: ["Banking Supervision", "Regulatory Policy", "Risk Management"],
      years: "15+ years"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-4">
              Monetary Policy Committee
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Meet the distinguished members who shape India's monetary policy decisions, 
              bringing decades of expertise in economics, finance, and public policy.
            </p>
          </div>
        </div>
      </div>

      {/* Members Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {members.map((member, index) => {
            const IconComponent = member.icon;
            return (
              <div 
                key={index} 
                className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full -translate-y-16 translate-x-16 opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
                
                {/* Content */}
                <div className="relative p-8">
                  {/* Header */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden ring-4 ring-white shadow-xl">
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                      <p className="text-blue-600 font-semibold mb-2">{member.title}</p>
                      <div className="inline-flex items-center px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
                        <Award className="w-4 h-4 mr-1" />
                        {member.years} experience
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                    {member.description}
                  </p>

                  {/* Expertise Tags */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                      Key Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-full text-xs font-medium border border-blue-100 hover:border-blue-200 transition-colors duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover Effect Gradient */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white rounded-3xl shadow-xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Committee Overview</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our diverse committee brings together expertise from various domains to ensure comprehensive monetary policy decisions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">4</div>
              <div className="text-sm text-gray-600">Committee Members</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">68+</div>
              <div className="text-sm text-gray-600">Years Combined Experience</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">100%</div>
              <div className="text-sm text-gray-600">PhD/Masters Qualified</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">3</div>
              <div className="text-sm text-gray-600">Core Domains</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MPCMembers;