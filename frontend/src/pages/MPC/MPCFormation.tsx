import React from 'react';
import { Clock, Calendar, TrendingUp } from 'lucide-react';

export default function MPCFormation() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      {/* Main Title */}
      <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">
        Monetary Policy Committee (MPC)
      </h1>
      
      {/* Main Description */}
      <p className="text-lg text-gray-700 leading-relaxed mb-10">
        The Monetary Policy Committee (MPC) is a statutory body constituted by the Reserve Bank of India (RBI) under Section 45ZB 
        of the Reserve Bank of India Act, 1934. It is responsible for fixing the benchmark policy interest rate (repo rate) to contain 
        inflation within the specified target level. The MPC is tasked with maintaining price stability while keeping in mind the 
        objective of growth. The committee's decisions are guided by an inflation target of 4% with a tolerance band of +/-2%.
      </p>

      {/* Formation and Evolution Section */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Formation and Evolution
      </h2>
      
      <p className="text-lg text-gray-700 leading-relaxed mb-8">
        The MPC was formed in 2016 to bring transparency and accountability to monetary policy decisions. Prior to its formation, the 
        RBI Governor, in consultation with a Technical Advisory Committee, made decisions on the policy rate. The MPC's formation 
        was a significant step towards modernizing India's monetary policy framework, aligning it with global best practices.
      </p>

      {/* Timeline */}
      <div className="space-y-6">
        {/* Pre-2016 */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mt-1">
            <Clock className="w-4 h-4 text-gray-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Pre-2016: Governor-led Decisions
            </h3>
            <p className="text-gray-700">
              Monetary policy decisions were made by the RBI Governor in consultation with a Technical Advisory Committee.
            </p>
          </div>
        </div>

        {/* 2016 */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
            <Calendar className="w-4 h-4 text-blue-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              2016: Formation of MPC
            </h3>
            <p className="text-gray-700">
              The Monetary Policy Committee (MPC) was established under Section 45ZB of the Reserve Bank of India Act, 1934.
            </p>
          </div>
        </div>

        {/* Present */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
            <TrendingUp className="w-4 h-4 text-green-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Present: MPC-led Policy
            </h3>
            <p className="text-gray-700">
              The MPC meets periodically to decide on the policy repo rate, aiming to achieve the inflation target while supporting 
              economic growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}