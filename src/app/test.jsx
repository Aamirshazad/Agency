export default function Line() {
  return (
    <div className="flex justify-center items-center h-28 pt-44">
      <div className="relative">
        {/* Gradient vertical line */}
        <div className="w-px h-60 bg-gradient-to-br from-green-300 via-red-900 to-transparent"></div>
      </div>
    </div>
  );
}
