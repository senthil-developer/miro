import Image from "next/image";

const Section = () => {
  const items = [
    {
      img: "/section/strategize.png",
      title: "Strategize & plan",
      para: "Ensure continuous alignment with customer needs and company strategy. Define goals and initiatives, visualize priorities and dependencies, and finally, watch your plans pay off. Everything is easier when you never run out of space.",
    },
    {
      img: "/section/design.png",
      title: "Design customer-centric solutions",
      para: "Foster a customer-centric mindset and build a mutual team space, where everyone can capture insights, structure them with diagrams and tables, and share it all in a central spot.",
    },
    {
      img: "/section/develop.png",
      title: "Develop your products & services",
      para: "Accelerate time to market with a full suite of capabilities designed for innovation, including diagramming, real-time data visualization, and workshop facilitation. Miro also gives you built-in support for common product development processes, with agile practices like estimation and retrospectives.",
    },
  ];
  return (
    <div className="flex flex-col w-full overflow-x-hidden mx-auto gap-5 items-center">
      {items.map((item, index) => (
        <div
          className="flex flex-col md:flex-row-reverse w-full md:justify-evenly items-center"
          key={index}
        >
          <div className="relative w-[350px] h-[240px] sm:w-[450px] sm:h-[300px] md:w-[400px] lg:w-[600px] lg:h-[370px]">
            <Image src={item.img} fill alt={item.title} />
          </div>
          <div className="md:w-[40%] w-[75%] text-start gap-4 md:justify-center flex flex-col lg:w-[30%]">
            <h3 className="text-xl">{item.title}</h3>
            <p className="text-lg">{item.para}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Section;
