"use client"
import { useState } from "react";

function FAQ() {
  // Each question will have a separate state for its toggle
  const [openQuestions, setOpenQuestions] = useState({});

  // Toggle the question based on question ID
  const toggleQuestion = (questionId) => {
    setOpenQuestions((prevState) => ({
      ...prevState,
      [questionId]: !prevState[questionId],
    }));
  };

  return (
    <div className="max-w-screen-lg mt-24 mx-auto grid grid-cols-1 gap-4 place-items-center">
      <h4 className="text-2xl font-bold">Frequently Asked Questions</h4>
      
      <div className="space-y-4 w-full place-items-center">
        {/* Question 1 */}
        <div className="bg-gray-900 shadow-md p-4 rounded-lg max-w-screen-md w-full">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleQuestion(1)}  // Toggle question 1
          >
            <div className="text-lg font-semibold text-white">
              What is Media Buying? 
            </div>
            <div className="w-10 h-10 transform transition-transform duration-200"
                 style={{ transform: openQuestions[1] ? "rotate(180deg)" : "rotate(0)" }}>
              <svg width="100%" height="100%" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M16.5303 20.8839C16.2374 21.1768 15.7626 21.1768 15.4697 20.8839L7.82318 13.2374C7.53029 12.9445 7.53029 12.4697 7.82318 12.1768L8.17674 11.8232C8.46963 11.5303 8.9445 11.5303 9.2374 11.8232L16 18.5858L22.7626 11.8232C23.0555 11.5303 23.5303 11.5303 23.8232 11.8232L24.1768 12.1768C24.4697 12.4697 24.4697 12.9445 24.1768 13.2374L16.5303 20.8839Z" fill="currentColor"></path>
              </svg>
            </div>
          </div>
          {/* Answer is shown only if openQuestions[1] is true */}
          {openQuestions[1] && (
            <div className="mt-2 pl-4 space-y-2 text-gray-300">
              <p>Media buying is the process of purchasing advertising space on various media platforms to reach target audiences.</p>
            </div>
          )}
        </div>

        {/* Repeat for additional questions */}
        <div className="bg-gray-900 shadow-md p-4 rounded-lg max-w-screen-md w-full">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleQuestion(2)}  // Toggle question 2
          >
            <div className="text-lg font-semibold text-white">
              How does Ad Attribution work? 
            </div>
            <div className="w-10 h-10 transform transition-transform duration-200"
                 style={{ transform: openQuestions[2] ? "rotate(180deg)" : "rotate(0)" }}>
              <svg width="100%" height="100%" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M16.5303 20.8839C16.2374 21.1768 15.7626 21.1768 15.4697 20.8839L7.82318 13.2374C7.53029 12.9445 7.53029 12.4697 7.82318 12.1768L8.17674 11.8232C8.46963 11.5303 8.9445 11.5303 9.2374 11.8232L16 18.5858L22.7626 11.8232C23.0555 11.5303 23.5303 11.5303 23.8232 11.8232L24.1768 12.1768C24.4697 12.4697 24.4697 12.9445 24.1768 13.2374L16.5303 20.8839Z" fill="currentColor"></path>
              </svg>
            </div>
          </div>
          {openQuestions[2] && (
            <div className="mt-2 pl-4 space-y-2 text-gray-300">
              <p>Ad attribution is the process of identifying which advertisements are responsible for driving specific user actions.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
