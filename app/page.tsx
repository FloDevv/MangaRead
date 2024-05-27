import dynamic from "next/dynamic";
import Card from "./components/Card";
import { MobileNavbarComponent } from "./components/navbar/mobilenavbar";
import { getDetails } from "./types/getDetails";
const PreviewVideo = dynamic(
  () => import("./components/carousel/previewVideo")
);
const ResumeReading = dynamic(() => import("./components/resumereading"));

export default function Home() {
  const Details = getDetails();

  const language = process.env.DEFAULT_LANGUAGE;
  const data = require(`../locales/${language}.json`);
  return (
    <MobileNavbarComponent activePage="Home">
      <PreviewVideo />
      <div className="md:bg-[#0c0c0c] md:mx-8 lg:mx-16 2xl:mx-24">
        <div className=" p-4  ">
          <ResumeReading />
        </div>
        <hr className="my-8" />
        <h1 className="w-full flex uppercase item-center justify-center text-xl md:text-2xl mb-4 mt-6 md:ml-4 md:justify-start md:items-start ">
          {data.home.allMangasAvailable}
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mx-2 lg:mx-4">
          {Details.map((Detail) => (
            <Card key={Detail.name} name={Detail.name} types={Detail.types} />
          ))}
        </div>
      </div>
    </MobileNavbarComponent>
  );
}
