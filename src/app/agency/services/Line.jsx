export default function Line() {
    return (
      <div className="flex justify-center items-center md: h-28 pt-44 mb-28">
        <div className="relative">
          {/* Gradient vertical line with adjusted shadow */}
          <div className="w-px h-60 bg-gradient-to-tr from-blue-600 via-purple-600 to-indigo-600 drop-shadow-lg"></div>
        </div>
      </div>
    );
  }
  