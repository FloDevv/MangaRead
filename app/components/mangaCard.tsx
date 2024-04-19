// MangaCard.tsx
import Link from "next/link";
import DynamicBlur from "./dynamicBlur";
export default function MangaCard({ mangaName }: { mangaName: string }) {
  return (
    <div className="flex flex-col items-stretch rounded-lg overflow-hidden shadow-lg hover:shadow-2xl ease-in-out transform group hover:scale-105 transition-transform duration-300 w-full">
      <Link key={mangaName} href={`/manga/${mangaName}`}>
        <div className="flex flex-col items-stretch">
          <DynamicBlur
            src={`/${mangaName}/manga/Tome 01/01-001.webp`}
            alt={mangaName}
            className="object-cover w-full h-80 sm:h-76 md:h-72 lg:h-76 2xl:h-96"
          />
          <div className="p-2">
            <h1 className="text-xs sm:text-sm md:text-base text-center text-white transition-colors duration-300 ease-in-out group-hover:text-red-500 break-words">
              {mangaName}
            </h1>
          </div>
        </div>
      </Link>
    </div>
  );
}
