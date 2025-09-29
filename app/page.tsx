import ItemsCard from "@/components/items-card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center overflow-x-hidden">
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

      <div className="relative flex flex-col w-screen items-center">
        <Image
          src="/back-image.svg"
          alt="fundo"
          fill
          className="object-cover absolute"
        />
        <div className=" w-[1237px] h-[746px] flex justify-center items-center flex-col">
          <h1 className="text-[40px] font-semibold mb-[50px]">Mais vendidas</h1>
          <div>
            <ItemsCard />
          </div>
        </div>
      </div>
      <div className="flex flex-col-2 items-center justify-center">
        <Image
          src="/sobre-image.svg"
          alt="sobre"
          width={488}
          height={500}
          className="mt-16 mb-16 mr-[116px]"
        />
        <div className="w-[592px] h-[284px]">
          <h2 className="text-4xl font-semibold">
            Sobre a La P<span className="text-yellow-400">i</span>
            <span className="text-red-600">z</span>
            <span className="text-green-600">z</span>a
          </h2>
          <p className="mt-4 text-lg font-medium">
            Bem-vindo ao &quot;La Pizza&quot;, o seu refúgio acolhedor para uma
            experiência de pizzaria autêntica. Em nosso pequeno oásis italiano,
            cada pedaço de pizza é uma obra-prima artesanal. Sinta-se em casa
            enquanto o aroma sedutor de massa fresca assa no forno, criando as
            pizzas mais deliciosas da cidade.
          </p>
          <Button className="rounded-[25px] gap-y-3 w-[195px] h-[41px] mt-8 cursor-pointer">
            LER MAIS SOBRE
          </Button>
        </div>
      </div>
    </div>
  );
}
