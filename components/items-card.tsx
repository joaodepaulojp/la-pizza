import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const ItemsCard = () => {
  const pizzas = [
    {
      id: 1,
      name: "La Cuma",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "R$ 29,90",
      image: "/lacuma-pizza.svg",
    },
    {
      id: 2,
      name: "La Menta",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "R$ 25,50",
      image: "/lamenta-pizza.svg",
    },
    {
      id: 3,
      name: "La Cuma 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "R$ 26,00",
      image: "/lacuma2-pizza.svg",
    },
    {
      id: 4,
      name: "La Toca",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "R$ 23,80",
      image: "/latoca-pizza.svg",
    },
  ];
  return (
    <div className="w-[1237px] h-[360px] flex items-center md:flex-row gap-x-[40px] flex-col gap-y-[80px]">
      {pizzas.map((pizza) => (
        <Card
          key={pizza.id}
          className="w-[280px] h-[300px] justify-center text-center relative bg-[#fefbf4] border-2 border-[#FFF5DE]"
        >
          <Image
            src="/icon-favorite.svg"
            width={32}
            height={32}
            alt="icon-favorite"
            className="absolute top-2 right-2"
          />
          <CardHeader>
            <Image
              src={pizza.image}
              width={120}
              height={120}
              alt={pizza.name}
              className="mx-auto"
            />
            <CardTitle className="text-[20px] font-semibold">
              {pizza.name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-[16px]">{pizza.description}</p>
            <p className="text-[32px] font-semibold mt-4">{pizza.price}</p>
            <Button className="rounded-[25px] p-[10px] w-[206px] h-[41px] font-semibold mt-6">
              COMPRAR AGORA
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ItemsCard;
