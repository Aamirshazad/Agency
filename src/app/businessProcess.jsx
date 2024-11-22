import React from "react";

const CollaborationProcess = () => {
  return (
    <div className=" min-h-screen flex justify-center  place-items-center py-16 px-10">
      <div className="w-full max-w-5xl p-10 place-items-center ">
        {/* Timeline */}
        <div className="relative border-l-4  px-16 border-green-600">
          {/* Phase 1 */}
          <div className="mb-16 ml-10">
            <div className="absolute -left-8 h-16 w-16 flex items-center justify-center bg-green-500 text-white text-lg font-bold rounded-full">
              1
            </div>
            <h3 className="text-lg font-semibold text-green-500 uppercase">Phase 1</h3>
            <h2 className="text-2xl font-bold text-gray-200 mt-2">Preboarding</h2>
            <ul className="text-gray-300 mt-4 space-y-2 list-disc ml-5">
              <li>Software partner assessment</li>
              <li>NDA & technical call</li>
              <li>Cooperation proposal</li>
              <li>Master Service Agreement & Statement of Work</li>
            </ul>
          </div>

          {/* Phase 2 */}
          <div className="mb-16 ml-10">
            <div className="absolute -left-8 h-16 w-16 flex items-center justify-center bg-purple-700 text-white text-lg font-bold rounded-full">
              2
            </div>
            <h3 className="text-lg font-semibold text-purple-500 uppercase">Phase 2</h3>
            <h2 className="text-2xl font-bold text-gray-200 mt-2">Establishing Ways of Working</h2>
            <ul className="text-gray-200 mt-4 space-y-2 list-disc ml-5">
              <li>Team assembly</li>
              <li>Communication channels</li>
              <li>Reporting practices</li>
              <li>Security</li>
            </ul>
          </div>

          {/* Phase 3 */}
          <div className="mb-16 ml-10">
            <div className="absolute -left-8 h-16 w-16 flex items-center justify-center bg-blue-500 text-white text-lg font-bold rounded-full">
              3
            </div>
            <h3 className="text-lg font-semibold text-blue-500 uppercase">Phase 3</h3>
            <h2 className="text-2xl font-bold text-gray-200 mt-2">Onboarding Workshops</h2>
            <ul className="text-gray-300 mt-4 space-y-2 list-disc ml-5">
              <li>Business workshops</li>
              <li>Knowledge sharing activities</li>
              <li>In-person meetings</li>
            </ul>
          </div>

          {/* Final Section */}
          <div className="ml-10">
            <div className="absolute -left-6 h-10 w-10 bg-red-500 rounded-full">
                
            </div>
            <h2 className="text-2xl font-bold text-gray-200 mt-2">Long-Term Partnership</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollaborationProcess;
