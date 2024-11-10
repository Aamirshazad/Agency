export default function NowPlatform() {
  return (
    <div className="relative isolate overflow-hidden mx-6 mt-4 rounded-3xl min-h-[670px]">
      {/* Background image */}
      <img
        src="https://images.pexels.com/photos/7974/pexels-photo.jpg"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />

      {/* Overlay container with left padding */}
      <div
        className="relative flex w-full mt-28 mb-10 py-10 px-10 max-w-md mx-auto md:mx-0 md:max-w-lg lg:max-w-xl p-8 bg-blue-950 bg-opacity-90 rounded-xl text-white"
        style={{ marginLeft: '40px' }}  // Direct inline style to add a left margin
      >
        {/* Text content */}
        <div className="space-y-4 mt-5">
          <h2 className="text-5xl font-bold">CortixAI</h2>
          <p className="text-2xl">
            Connect and automate workflows across the enterprise with the single AI platform for business transformation.
          </p>
          <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600">
            Start Now
          </button>
        </div>
      </div>
    </div>
  );
}
