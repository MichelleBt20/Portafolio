import info from "@D/AboutMe.json";
import img from "@A/imgPlaceholder.png";

export const Home = () => {
  return (
    <section className="flex h-full w-full items-center justify-center bg-white p-4">
      <div className="max-w-[600px] min-w-[250px] w-full flex flex-col items-center gap-12 sm:flex-row sm:justify-between sm:items-center">
        <div className="w-48 h-48 sm:w-50 sm:h-50 shadow-lg sm:rotate-[-5deg]">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={img}
            alt="Michelle Betancurt IMG"
          />
        </div>

        <div className="text-center sm:text-left sm:max-w-[350px] sm:min-w-[250px]">
          <h2 className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-[#3B82F6] to-[#EC4899] bg-clip-text text-transparent mb-2">Michelle Betancurt</h2>
          <p className="text-gray-700 sm:text-lg">{info.description}</p>
        </div>
      </div>
    </section>
  );
};