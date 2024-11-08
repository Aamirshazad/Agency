export default function VideoSection() {
    return (
      <div className="place-items-center">
        <div className="w-5/6 aspect-video place-items-center">
          <video
            className="w-full h-auto rounded-3xl shadow-lg "
            controls
          >
            <source src="https://videos.pexels.com/video-files/18069166/18069166-uhd_2560_1440_24fps.mp4" type="video/mp4" />
            
          </video>
        </div>
      </div>
    );
  }
  