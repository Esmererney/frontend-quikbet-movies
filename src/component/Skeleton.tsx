interface SkeletonProps {
  type: "search" | "movies" | "movieDetail" | "recommendations";
}

const Skeleton: React.FC<SkeletonProps> = ({ type }) => {
  if (type === "search") {
    return (
      <div className="space-y-4">
        <div className="w-3/4 h-8 bg-gray-300 animate-pulse rounded"></div>
        <div className="w-2/4 h-6 bg-gray-300 animate-pulse rounded"></div>
      </div>
    );
  }
  if (type === "movies") {
    return (
      <div className="bg-gray-300 animate-pulse rounded-md h-60">
        <div className="h-3/5 bg-gray-200"></div>
        <div className="p-4">
          <div className="h-4 bg-gray-200 rounded mb-2"></div>
          <div className="h-3 bg-gray-200 rounded mb-4"></div>
          <div className="flex justify-between">
            <div className="h-3 w-12 bg-gray-200 rounded"></div>
            <div className="h-3 w-12 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "movieDetail") {
    return (
      <div className="animate-pulse space-y-4">
        <div className="w-full h-72 bg-gray-700 rounded-lg"></div>
        <div className="w-3/4 h-6 bg-gray-700 rounded"></div>
        <div className="w-1/2 h-4 bg-gray-700 rounded"></div>
        <div className="w-1/3 h-4 bg-gray-700 rounded"></div>
        <div className="flex gap-4">
          <div className="w-32 h-12 bg-gray-700 rounded"></div>
          <div className="w-32 h-12 bg-gray-700 rounded"></div>
        </div>
        <div className="w-full h-6 bg-gray-700 rounded"></div>
      </div>
    );
  }

  if (type === "recommendations") {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg overflow-hidden animate-pulse"
          >
            <div className="w-full h-60 bg-gray-700"></div>
            <div className="p-4 text-center">
              <div className="h-6 bg-gray-700 w-3/4 mx-auto mb-2 rounded"></div>
              <div className="h-4 bg-gray-700 w-1/2 mx-auto rounded"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return null;
};

export default Skeleton;
