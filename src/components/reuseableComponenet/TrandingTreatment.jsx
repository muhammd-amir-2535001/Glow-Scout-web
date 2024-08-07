import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TreatmentCard from "./TreatmentCard";
import Image from "next/image";

const treatments = [
  {
    image: "/images/home/tranding-1.png",
    title: "Laser Resurfacing",
    description: "Lorem ipsum.",
    label: "Lorem Ipsum",
  },
  {
    image: "/images/home/tranding-2.png",
    title: "Botox Injections",
    description: "Consectetur.",
    label: "Lorem Ipsum",
  },
  {
    image: "/images/home/tranding-3.png",
    title: "Chemical Peel",
    description: "Ut ut.",
    label: "Lorem Ipsum",
  },
  {
    image: "/images/home/tranding-4.png",
    title: "Microdermabrasion",
    description: "Etiam sed.",
    label: "Lorem Ipsum",
  },
  {
    image: "/images/home/tranding-5.png",
    title: "Dermal Fillers",
    description: "Pellentesque.",
    label: "Lorem Ipsum",
  },
  {
    image: "/images/home/tranding-5.png",
    title: "Dermal Fillers",
    description: "Pellentesqu.",
    label: "Lorem Ipsum",
  },
  {
    image: "/images/home/tranding-5.png",
    title: "Dermal Fillers",
    description: "Pellentesque.",
    label: "Lorem Ipsum",
  },
  {
    image: "/images/home/tranding-2.png",
    title: "Botox Injections",
    description: "Consectetur.",
    label: "Lorem Ipsum",
  },
  {
    image: "/images/home/tranding-3.png",
    title: "Chemical Peel",
    description: "Ut ut.",
    label: "Lorem Ipsum",
  },
  {
    image: "/images/home/tranding-4.png",
    title: "Microdermabrasion",
    description: "Etiam sed",
    label: "Lorem Ipsum",
  },
];

const TrandingTreatment = () => {
  return (
    <div className="mx-auto py-10 md:py-20  font-raleway relative rounded-full border-0">
      <Image
        width={300}
        height={300}
        alt="bg"
        src={"/images/shadow-1.png"}
        className=" absolute top-0 right-0 z-0 hidden md:block"
      />

      <div className="text-center text-darkMahron pb-5">
        <h2 className="text-5xl md:text-6xl font-thin "> Trending Treatments </h2>
        <p className="m-2 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh
            faucibus.
        </p>
      </div>

      <div className="my-5 md:my-16 z-50 md:container mx-3">
        <Carousel
          opts={{ align: "start" }}
          className="w-full md:container md:ml-8 overflow-hidden"
        >
          <CarouselContent className="flex md:space-x-4">
            {treatments.map((treatment, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2  md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
              >
                <TreatmentCard {...treatment} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden  md:block">
            <CarouselPrevious style={{ left: "0rem" }} />
            <CarouselNext style={{ right: "0rem" }} />
          </div>
        </Carousel>
      </div>

      <Image
        width={300}
        height={300}
        alt="bg"
        src={"/images/shadow-2.png"}
        className=" absolute bottom-0 left-0 border-none  rounded-xl z-[-1000] hidden md:block"
      />
    </div>
  );
};

export default TrandingTreatment;
