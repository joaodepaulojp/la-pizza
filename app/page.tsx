import ItemsCard from "@/components/items-card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center">
        <Image src="/bg.svg" width={1920} height={600} alt="background" />
        <Image
          src="/logo.svg"
          width={600}
          height={395}
          alt="logo"
          className="absolute"
        />
      </div>

      <div className="flex flex-col">
        <div className="w-[1237px] h-[746px] bg-amber-100 flex justify-center items-center flex-col">
          <h1 className="text-[40px] font-semibold mb-[50px]">Mais vendidas</h1>
          <div>
            <ItemsCard />
          </div>
        </div>
      </div>
    </div>
  );
}
