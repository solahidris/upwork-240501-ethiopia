import { Button } from "./ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const AwardsPage = () => {
  console.log("awards");

  const years = [2016,2017,2018,2019,2020,2021,2022,2023,2024];

  return (
    <div className="flex p-10">
    {/* Left Side */}
    <div className="flex flex-col gap-20 w-[10vw]">
      <div className="flex flex-col bg-gray-300 rounded-3xl w-32 mx-auto justify-center items-center py-4">
        <span>Awards</span>
      </div>
      <Carousel
          opts={{
            align: "start",
          }}
          orientation="vertical"
          className="w-full max-w-xs"
        >
          <CarouselContent className="-mt-1 h-[400px]">
            {Array.from({ length: years.length }).map((_, index) => (
              <CarouselItem key={index} className="pt-1 basis-1/4">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex items-center justify-center p-6">
                      <span className="text-xl font-semibold">
                        {years[index]}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
    </div>
    {/* Right Side */}
    <div className="flex flex-col gap-8 w-[90vw]">
      <div className="flex justify-center w-[1000px] mx-auto">
        <Carousel className="max-w-[800px]">
          <CarouselContent className="-ml-1">
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card className="border-0 shadow-none">
                    <CardContent className="flex items-center justify-center px-8 py-10 rounded-3xl border border-gray-300">
                      <span className="text-2xl font-semibold">
                        {/* {index + 1} */}
                        Year
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>


      <div className="flex justify-center">
        <Carousel className="w-full max-w-md">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      
      <div className="flex justify-center w-[1000px] mx-auto">
        <Carousel className="max-w-[800px]">
          <CarouselContent className="-ml-1">
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2"
              >
                <div className="p-1">
                  <Card className="border-0 shadow-none">
                    <CardContent className="flex items-center justify-center px-8 py-8 rounded-3xl border border-gray-300">
                      <span className="text-2xl font-semibold">
                        Sponsors Advert
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

    </div>
  </div>
  )
};

export default AwardsPage;