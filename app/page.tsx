import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
          <h1 className="text-2xl mt-[50px] mb-[50px]">Mais vendidas</h1>

          <div className="bg-white w-[1237px] h-[360px] flex items-center">
            <Card className="w-[280px] h-[300px] justify-center text-center relative bg-[#fefbf4] border-2 border-[#FFF5DE]">
              <Image
                src="/icon-favorite.svg"
                width={32}
                height={32}
                alt="icon-favorite"
                className="absolute top-2 right-2"
              />
              <CardHeader>
                <Image
                  src="/lacuma-pizza.svg"
                  width={120}
                  height={120}
                  alt="la-cuma"
                  className="mx-auto"
                />
                <CardTitle className="text-[20px] font-semibold">
                  La Cuma
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[16px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p className="text-[32px] font-semibold mt-4">R$ 29,90</p>
                <Button className="rounded-[25px] p-[10px] w-[206px] h-[41px] font-semibold mt-6">
                  COMPRAR AGORA
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
