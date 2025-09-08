import TechIcon from "./tech-icon";

function TechCard({ techItem, index }) {
  return (
    <div className="overflow-hidden p-[0.8px] rounded-lg border border-gray-500 w-full sm:max-w-60 shadow-myShadow2 ">
      <div className=" h-80 bg-cardC rounded-md  items-center justify-center flex flex-col p-4 skillCard cursor-grab ">
        <TechIcon icon={techItem.icon} index={index} />

        <div className="p-4 ">
          <p className="text-center text-2xl font-bold">{techItem.title}</p>
        </div>
      </div>
    </div>
  );
}

export default TechCard;
