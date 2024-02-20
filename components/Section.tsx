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
    <div className="flex-col-center w-full overflow-x-hidden mx-[20px] gap-5">
      {items.map((item, index) => (
        <div
          className="flex flex-col md:flex-row-reverse w-full justify-center items-center gap-5 mx-[20px]"
          key={index}
        >
          <div className=" w-[200px] md:w-[327px] md:h-[218px] relative">
            <Image src={item.img} fill alt={item.title} />
          </div>
          <div className="w-full md:w-[50%] text-wrap">
            <h3>{item.title}</h3>
            <p>{item.para}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Section;
