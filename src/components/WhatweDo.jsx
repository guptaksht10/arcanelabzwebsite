import { workspaceData } from "../constants";

const WhatweDo = () => {
  return (
    <section className="bg-white w-full min-h-screen flex">
      {/* Left Column - Title */}
      <div className="w-1/2 flex flex-col justify-start items-start p-12 sticky top-0 h-screen">
        <h2 className="text-black text-8xl font-bold leading-tight font-dm-sans">
          What We <br /> Do?
        </h2>
      </div>

      {/* Right Column - Scrollable content */}
      <div className="w-1/2 overflow-y-scroll h-screen pr-6">
        <div className="flex flex-col gap-20 py-12">
          {workspaceData.map((item, index) => (
            <div key={index} className="flex flex-col gap-4">
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full rounded-xl"
              />
              {/* Number */}
              <span className="text-blue-600 text-lg font-semibold">
                {String(index + 1).padStart(2, "0")}
              </span>
              {/* Title */}
              <h3 className="text-black text-4xl font-bold leading-tight">
                {item.title}
              </h3>
              {/* Description */}
              <p className="text-gray-700 text-lg leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatweDo;
