import { useState, useEffect, useRef } from "react";

export default function NowPlatform() {
  const slides = [
    {
      id: 1,
      title: "Discover Who We Are",
      description: "Learn about our mission to revolutionize AI for businesses.",
      backgroundImage: "https://images.pexels.com/photos/7974/pexels-photo.jpg",
    },
    {
      id: 3,
      title: "Benefit from AI",
      description: "Unlock the potential of AI to drive your business forward.",
      videoBackground: "https://videos.pexels.com/video-files/3163534/3163534-uhd_2560_1440_30fps.mp4", // Video background
    },
    {
      id: 2,
      title: "Optimize Cloud Strategies",
      description: "Maximize efficiency with cutting-edge cloud solutions.",
      backgroundImage: "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg",
    },
  ];

  const slideOrder = [0, 2, 1];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [slideDuration, setSlideDuration] = useState(9000); // Default duration in ms
  const videoRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          changeSlide("next");
          return 0;
        }
        return prevProgress + (100 / (slideDuration / 60)); // Adjust increment based on duration
      });
    }, 60);

    return () => clearInterval(interval);
  }, [slideDuration]);

  const changeSlide = (directionOrIndex) => {
    if (typeof directionOrIndex === "string") {
      setCurrentSlide((prevSlide) => {
        const currentIndex = slideOrder.indexOf(prevSlide);
        let nextIndex;
        if (directionOrIndex === "next") {
          nextIndex = (currentIndex + 1) % slideOrder.length;
        } else {
          nextIndex = (currentIndex - 1 + slideOrder.length) % slideOrder.length;
        }
        return slideOrder[nextIndex];
      });
    } else {
      setCurrentSlide(directionOrIndex);
    }
    setProgress(0);
  };

  useEffect(() => {
    // Update slide duration based on the type of slide
    if (slides[currentSlide].videoBackground && videoRef.current) {
      const video = videoRef.current;
      if (video.readyState >= 1) {
        setSlideDuration(video.duration * 1000); // Convert seconds to ms
      } else {
        video.addEventListener("loadedmetadata", () => {
          setSlideDuration(video.duration * 1000);
        });
      }
    } else {
      setSlideDuration(5000); // Default duration for image slides
    }
  }, [currentSlide]);

  return (
    <div className="relative isolate overflow-hidden mx-0 mt-4 rounded-3xl min-h-[470px]">
      {/* Full-width Background Slide */}
      <div className="relative flex w-full h-[95vh] bg-blue-950 bg-opacity-100 rounded-xl text-white">
        {slides[currentSlide].videoBackground ? (
          <video
            className="absolute inset-0 w-full h-full object-cover rounded-xl"
            src={slides[currentSlide].videoBackground}
            autoPlay
            loop
            muted
            playsInline
            ref={videoRef}
          />
        ) : (
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center rounded-xl"
            style={{
              backgroundImage: `url(${slides[currentSlide].backgroundImage})`,
            }}
          ></div>
        )}

        {/* Slide Content */}
        <div className="absolute top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-center space-y-6">
          <h2 className="text-5xl font-bold">{slides[currentSlide].title}</h2>
          <p className="text-2xl">{slides[currentSlide].description}</p>
        </div>

        {/* Navigation with Styled Progress Bars */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center items-center space-x-6">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`flex flex-col items-center cursor-pointer`}
              onClick={() => changeSlide(index)}
            >
              <div
                className={`h-2 w-40 rounded-full relative ${
                  currentSlide === index ? "bg-gray-700" : "bg-gray-600"
                }`}
              >
                {currentSlide === index && (
                  <div
                    className="absolute h-2 rounded-full bg-gradient-to-r from-purple-500 to-orange-500"
                    style={{
                      width: `${progress}%`,
                      transition: "width 0.1s linear",
                    }}
                  ></div>
                )}
              </div>
              <p className="text-sm mt-2 text-gray-300 font-semibold">{`0${index + 1} | ${slide.title}`}</p>
            </div>
          ))}
        </div>

        {/* Slide Navigation Buttons */}
        <button
          className="absolute top-1/2 left-5 transform -translate-y-1/2 text-4xl text-white rounded-full p-4"
          onClick={() => changeSlide("prev")}
        >
          {""}
        </button>
        <button
          className="absolute top-1/2 right-5 transform -translate-y-1/2 text-4xl text-white rounded-full p-4"
          onClick={() => changeSlide("next")}
        >
          {""}
        </button>
      </div>
    </div>
  );
}
