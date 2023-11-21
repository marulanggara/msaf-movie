// Components
import Search from "../components/Navbar/Search";
import Recent from "../components/Recent/Recent";
import Series from "../components/Series/Series";
import Thumb from "../components/Thumbnail/Thumb";

export default function Home() {
  return (
    <div className="background-img w-full h-full flex-1 flex flex-col md:px-8 px-4">
      <div className="h-full w-full flex lg:flex-row flex-col flex-1 lg:gap-6 gap-4 pb-8">
        <div className="flex flex-col lg:w-1/2 w-full gap-4">
          <div className="flex flex-col lg:h-full mt-auto h-fit justify-end">
            <h1 className="lg:text-6xl text-4xl py-4 lg:py-0 text-center lg:text-right">
              Discover the watch of your{" "}
              <span className="font-semibold">lifetime</span>
            </h1>
          </div>
          <Recent />
        </div>
        <div className="flex flex-col lg:w-1/2 w-full lg:pt-4">
          <p className="flex items-center font-semibold h-[40px] w-full text-lg z-10 bg-gray-100 border-gray-200 border-2 rounded-full px-4 cursor-default mb-4">
            Featured
          </p>
          {/* Featured */}
          <div className="flex flex-col flex-1 gap-4">
            <Thumb />
            <Series />
          </div>
        </div>
      </div>
    </div>
  );
}
