import HomeContainer from "@/containers/HomeContaniner";
import Image from "next/image";
import landingItem from "../../public/undraw_solution_mindset_re_57bf.svg";
import Space from "@/containers/Space";
import Button from "@/components/Button";
import HomeIcons from "@/components/HomeIcons";

export default function Home() {
  return (
    <div className="w-full items-center justify-between  h-full flex">
      <div className="w-1/2">
        <h3 className="text-7xl leading-[80px] font-bold">
          Creative Thoughts Agency.
        </h3>
        <Space />
        <Space />
        <p className=" leading-6 pr-5 ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur,
        </p>
        <p
          className=" leading-6 pr-5 overflow-hidden whitespace-nowrap border-r border-solid border-black w-0 
        transition-all animate-typing max-w-lg"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, quasi
        </p>
        <Space />
        <Space />
        <div className="flex items-center w-1/2 gap-4">
          <Button primary>Learn More</Button>
          <Button>Contact</Button>
        </div>
        <Space />
        <HomeIcons />
      </div>
      <div className="w-1/2 p-2 h-full ">
        <Image
          src={landingItem}
          className="h-full w-full"
          alt="Landscape picture"
        />
      </div>
    </div>
  );
}
