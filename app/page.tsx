import ItemsCard from "@/components/items-card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center overflow-x-hidden overflow-y-hidden">
      <div className="relative w-screen h-[300px] lg:h-[600px]">
        <Image src="/bg.svg" alt="background" fill className="object-cover" />
        <div className="w-[216px] h-[143px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-[596px] lg:h-[394px]">
          <Image src="/logo.svg" fill alt="logo" className="object-contain" />
        </div>
      </div>

      <div className="relative flex flex-col w-screen items-center">
        <Image
          src="/back-image.svg"
          alt="fundo"
          fill
          className="object-cover absolute"
        />
        <div className=" w-full h-[1732px] items-center lg:h-[746px]  flex flex-col md:h-[1000px] md:items-center">
          <h1 className="text-[40px] font-semibold mb-[50px] mt-[50px] lg:mt-[144px] text-center">
            Mais vendidas
          </h1>
          <div>
            <ItemsCard />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center lg:flex-row mb-16">
        <div className="relative w-[327px] h-[400px] lg:w-[488px] lg:h-[500px] lg:mx-[136px] mt-16 md:w-[704px] md:h-[400px]">
          <Image
            src="/sobre-image.svg"
            alt="sobre"
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <div className="w-[327px] h-[392px] mt-16 lg:w-[592px] lg:h-[284px] md:w-[704px] md:h-[257px]">
          <h2 className="text-4xl font-semibold">
            Sobre a La P<span className="text-yellow-400">i</span>
            <span className="text-red-600">z</span>
            <span className="text-green-600">z</span>a
          </h2>
          <p className="mt-8 text-lg font-medium">
            Bem-vindo ao &quot;La Pizza&quot;, o seu refúgio acolhedor para uma
            experiência de pizzaria autêntica. Em nosso pequeno oásis italiano,
            cada pedaço de pizza é uma obra-prima artesanal. Sinta-se em casa
            enquanto o aroma sedutor de massa fresca assa no forno, criando as
            pizzas mais deliciosas da cidade.
          </p>
          <Button className="rounded-[25px] gap-y-3 w-[195px] h-[41px] mt-8 mb-16 cursor-pointer">
            LER MAIS SOBRE
          </Button>
        </div>
      </div>
    </div>
  );
}
