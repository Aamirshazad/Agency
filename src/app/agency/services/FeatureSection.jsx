export default function FeatureSection() {
    return (
      <div className="flex justify-center items-center min-h-screen px-8 bg-transparent  ">
        <div className="flex flex-col md:flex-row items-center  max-w-6xl mx-auto space-y-8 md:space-y-0 md:space-x-12 text-white">
          
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center rounded-3xl shadow-xl   shadow-purple-950">
            <div className="relative w-full max-w-md md:max-w-lg rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Automate your agency"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
  
          {/* Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-purple-400 uppercase tracking-wider text-sm font-semibold mb-2">
              Master the Art of Sales
            </h3>
            <h2 className="text-4xl font-bold leading-tight mb-4">
              Learn the Art of Sales & Relations
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Apply real-life case studies, battle-tested scripts, and cutting-edge sales theory to consistently sign clients with Josh, an experienced business owner and veteran 'closer'.
            </p>
          </div>
          
        </div>
      </div>
    );
  }
  