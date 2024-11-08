import React from 'react';

const OurValues = () => {
  return (
    <div 
      className="mx-auto max-w-7xl px-6 mb-20   lg:px-8 relative rounded-3xl" 
      // style={{ 
      //   backgroundImage: 'url(https://images.pexels.com/photos/17483874/pexels-photo-17483874/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-was-inspired-by-neural-networks-used-in-deep-learning-it-was-created-by-novoto-studio-as-part-of-the-visualising-ai-pr.png?auto=compress&cs=tinysrgb&w=1080)', 
      //   backgroundSize: 'cover', 
      //   backgroundPosition: 'center'
      // }}
    >
      <div className="mx-auto max-w-2xl lg:max-w-none bg-transparent bg-opacity-35 p-6 rounded-lg">
        <div className="max-w-2xl" style={{ opacity: 1, transform: 'none' }}>
          <h2>
            <span className="mb-4 block font-display text-base font-semibold t">Our values</span>
            <span className="sr-only"> - </span>
            <span className="block font-display tracking-tight [text-wrap:balance] text-4xl  font-medium sm:text-5xl ">
              Balancing reliability and innovation
            </span>
          </h2>
            <div className="mt-4 text-xl text-neutral-500">
              <p>
                We strive to stay at the forefront of emerging trends and technologies, while completely ignoring them 
                and forking that old Rails project we feel comfortable using. We stand by our core values to justify that decision.
              </p>
            </div>

            <ul role="list" className="grid grid-cols-1 gap-11 w-screen mr-36   sm:grid-cols-2 lg:grid-cols-3 mt-16">
              <li className="text-base   before:bg-red-700 after:bg-green-600">
                <div style={{ opacity: 1, transform: 'none' }}>
                <div className="pl-8 relative before:absolute after:absolute before:bg-red-700 after:bg-green-700 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                  <strong className="font-semibold text-blue-700 ">Meticulous.</strong> The first part of any partnership is getting our designer to put your logo in our template. The second step is getting them to do the colors.
                </div>
              </div>
            </li>
            <li className="text-base  before:bg-red-700 after:bg-neutral-100">
              <div style={{ opacity: 1, transform: 'none' }}>
                <div className="pl-8 relative before:absolute after:absolute before:bg-red-700 after:bg-green-600 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                  <strong className="font-semibold text-blue-600 ">Efficient.</strong> We pride ourselves on never missing a deadline which is easy because most of the work was done years ago.
                </div>
              </div>
              
            </li>
            <li className="text-base  before:bg-red-700 after:bg-neutral-100">
              <div style={{ opacity: 1, transform: 'none' }}>
                <div className="pl-8 mr-10 pr-12 relative before:absolute after:absolute before:bg-red-700 after:bg-green-600 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                  <strong className="font-semibold text-blue-600 ">Adaptable.</strong> Every business has unique needs and our greatest challenge is shoe-horning those needs into something we already built.
                </div>
              </div>
            </li>
            <li className="text-base  before:bg-red-700 after:bg-neutral-100">
              <div style={{ opacity: 1, transform: 'none' }}>
                <div className="pl-8 relative before:absolute after:absolute before:bg-red-700 after:bg-green-600 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                  <strong className="font-semibold text-blue-800">Honest.</strong> We are transparent about all of our processes, banking on the simple fact our clients never actually read anything.
                </div>
              </div>
            </li>
            <li className="text-base  before:bg-red-700 after:bg-neutral-100">
              <div style={{ opacity: 1, transform: 'none' }}>
                <div className="pl-8 relative before:absolute after:absolute before:bg-red-700 after:bg-green-600 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                  <strong className="font-semibold text-blue-600 ">Loyal.</strong> We foster long-term relationships with our clients that go beyond just delivering a product, allowing us to invoice them for decades.
                </div>
              </div>
            </li>
            <li className="text-base pr-20 mr-3 text before:bg-red-700 after:bg-neutral-100">
              <div style={{ opacity: 1, transform: 'none' }}>
                <div className="pl-8 relative before:absolute after:absolute before:bg-red-700  after:bg-green-600 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                  <strong className="font-semibold text-blue-800  ">Innovative.</strong> The technological landscape is always evolving.<br></br> We are  constantly on lookout for new open source projects.
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
