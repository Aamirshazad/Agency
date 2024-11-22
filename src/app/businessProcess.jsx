import React from "react";

const CollaborationProcess = () => {
  return (
    <div className="min-h-screen mt-10 p-8">
      <div className="relative max-w-5xl mx-auto">
        {/* Timeline line with gradient and glow */}
        <div className="absolute left-40 h-full w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600 shadow-lg rounded-full" />
        
        <div className="relative">
          {/* Phase 1 */}
          <div className="mb-32 group ">
            <div className="flex items-center">
              {/* Circle with hover effect */}
              <div className="w-36 h-36 rounded-full bg-white shadow-xl flex items-center justify-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl relative">
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full border-2 border-blue-100 animate-pulse" />
                <div className="text-center">
                  <div className="text-gray-800 text-lg font-semibold tracking-wide"></div>
                  <div className="text-3xl font-bold">
                   
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">PHASE</span>
                    <div className="text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text">1</div>
                  </div>
                </div>
              </div>
              
              {/* Content card */}
              <div className="flex-1 ml-24  rounded-xl  p-6 shadow-xl shadow-blue-800 transform transition-all duration-300 group-hover:shadow-xl group-hover:scale-[1.02]">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                  PREBOARDING
                </h2>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center space-x-3 hover:translate-x-1 transition-transform duration-200">
                    <span className="w-2 h-2 bg-blue-400 rounded-full" />
                    <span>Software partner assessment</span>
                  </li>
                  <li className="flex items-center space-x-3 hover:translate-x-1 transition-transform duration-200">
                    <span className="w-2 h-2 bg-blue-400 rounded-full" />
                    <span>NDA & technical call</span>
                  </li>
                  <li className="flex items-center space-x-3 hover:translate-x-1 transition-transform duration-200">
                    <span className="w-2 h-2 bg-blue-400 rounded-full" />
                    <span>Cooperation proposal</span>
                  </li>
                  <li className="flex items-center space-x-3 hover:translate-x-1 transition-transform duration-200">
                    <span className="w-2 h-2 bg-blue-400 rounded-full" />
                    <span>Master Service Agreement & Statement of Work</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="mb-32 group">
            <div className="flex items-center">
              <div className="w-36 h-36 rounded-full bg-white shadow-xl flex items-center justify-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl relative">
                <div className="absolute inset-0 rounded-full border-2 border-purple-100 animate-pulse" />
                <div className="text-center">
                  <div className="text-gray-800 text-lg font-semibold tracking-wide"></div>
                  <div className="text-4xl font-bold">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">PHASE</span>
                  
                    <div className="text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">2</div>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 ml-24  rounded-xl p-6 shadow-lg shadow-blue-800 transform transition-all duration-300 group-hover:shadow-xl group-hover:scale-[1.02]">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                  ESTABLISHING WAYS OF WORKING
                </h2>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center space-x-3 hover:translate-x-1 transition-transform duration-200">
                    <span className="w-2 h-2 bg-purple-400 rounded-full" />
                    <span>Team assembly</span>
                  </li>
                  <li className="flex items-center space-x-3 hover:translate-x-1 transition-transform duration-200">
                    <span className="w-2 h-2 bg-purple-400 rounded-full" />
                    <span>Communication channels</span>
                  </li>
                  <li className="flex items-center space-x-3 hover:translate-x-1 transition-transform duration-200">
                    <span className="w-2 h-2 bg-purple-400 rounded-full" />
                    <span>Reporting practices</span>
                  </li>
                  <li className="flex items-center space-x-3 hover:translate-x-1 transition-transform duration-200">
                    <span className="w-2 h-2 bg-purple-400 rounded-full" />
                    <span>Security</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="mb-30 group">
            <div className="flex items-center">
              <div className="w-36 h-36 rounded-full bg-white shadow-xl flex items-center justify-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl relative">
                <div className="absolute inset-0 rounded-full border-2 border-pink-100 animate-pulse" />
                <div className="text-center">
                  <div className="text-gray-800 text-lg font-semibold tracking-wide"></div>
                  <div className="text-4xl font-bold">
                    <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">PHASE</span>
                  
                    <div className="text-transparent bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text">3</div>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 ml-24  rounded-xl p-6 shadow-xl shadow-blue-800 transform transition-all duration-300 group-hover:shadow-xl group-hover:scale-[1.02]">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-4">
                  ONBOARDING WORKSHOPS
                </h2>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center space-x-3 hover:translate-x-1 transition-transform duration-200">
                    <span className="w-2 h-2 bg-pink-400 rounded-full" />
                    <span>Business workshops</span>
                  </li>
                  <li className="flex items-center space-x-3 hover:translate-x-1 transition-transform duration-200">
                    <span className="w-2 h-2 bg-pink-400 rounded-full" />
                    <span>Knowledge sharing activities</span>
                  </li>
                  <li className="flex items-center space-x-3 hover:translate-x-1 transition-transform duration-200">
                    <span className="w-2 h-2 bg-pink-400 rounded-full" />
                    <span>In-person meetings</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Timeline markers with gradients */}
          <div className="absolute left-40 top-16 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full -translate-x-1/2 shadow-lg" />
          <div className="absolute left-40 top-1/3 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full -translate-x-1/2 shadow-lg" />
          <div className="absolute left-40 top-2/3 w-4 h-4 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full -translate-x-1/2 shadow-lg" />
          <div className="absolute left-40 bottom-0 w-4 h-4 bg-gradient-to-r from-rose-400 to-red-400 rounded-full -translate-x-1/2 shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default CollaborationProcess;