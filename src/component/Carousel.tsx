import Image from "next/image";
import banner from "../../public/banner.svg";

export default function Carousel(): JSX.Element {
  return (
    <div className="relative flex items-center justify-center overflow-hidden bg-black">
      {/* Imagen del banner */}
      <Image
        src={banner}
        alt="Kung Fu Panda 4"
        className="object-cover w-full h-full"
        priority
      />
    </div>
  );
}
