import fs from "fs/promises";
import Image from "next/image";
import path from "path";
import { getPlaiceholder } from "plaiceholder";
import React from "react";

const DynamicBlur: React.FC<{ src: string; alt: string }> = async ({
  src,
  alt,
}) => {
  const imagePath = path.join(process.cwd(), "public", src); // Assurez-vous que le chemin est correct

  let file;
  try {
    file = await fs.readFile(imagePath);
  } catch (err) {
    return null; // Or handle the error in another way
  }

  let base64;
  try {
    base64 = await getPlaiceholder(file);
  } catch (error) {
    return null; // Or handle the error in another way
  }

  return (
    <Image
      src={src}
      alt={`Cover image de ${alt}`} // if the image conveys information
      style={{ objectFit: "cover" }}
      quality={1}
      fill
      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 30vw, 20vw"
      priority={true}
      placeholder="blur"
      blurDataURL={base64.base64} // Convert base64 object to string
      className="transition-all duration-500 ease-in-out transform "
    />
  );
};

export default DynamicBlur;
