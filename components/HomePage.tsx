import { Button } from "./ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HomePage = () => {
  console.log("homepage");

  const years = [2016,2017,2018,2019,2020,2021,2022,2023,2024];
  const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

  return (
    <div className="flex p-10">
      {/* Left Side */}
      <div className="flex flex-col gap-20 w-[10vw]">
        <div className="flex flex-col bg-gray-300 rounded-3xl w-32 mx-auto justify-center items-center py-4">
          <span>Awards</span>
          <span className="text-xs pb-2">Coming Soon</span>
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
              {Array.from({ length: alphabet.length }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/2 lg:basis-1/5"
                >
                  <div className="p-1">
                    <Card className="border-0 shadow-none">
                      <CardContent className="flex items-center justify-center px-8 py-3 rounded-full border border-gray-300">
                        <span className="text-2xl font-semibold">
                          {alphabet[index]}
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

        <div className="flex gap-4 items-center justify-center">
          <div className="flex py-1.5 px-4 bg-gray-300 rounded-full items-center gap-4 w-28">
            <p className="font-bold pl-2">1</p>
          </div>
          <div className="flex py-1.5 px-4 bg-gray-300 rounded-full items-center gap-4 w-28">
            <p className="font-bold pl-2">2</p>
          </div>
          <div className="flex py-1.5 px-4 bg-gray-300 rounded-full items-center gap-4 w-28">
            <p className="font-bold pl-2">3</p>
          </div>
        </div>

        <div className="flex justify-center">
          <Carousel className="w-full max-w-md">
            <CarouselContent>
              {Array.from({ length: alphabet.length }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-4xl font-semibold">
                          {alphabet[index]}
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
                  className="pl-1 md:basis-1/2 lg:basis-1/5"
                >
                  <div className="p-1">
                    <Card className="border-0 shadow-none">
                      <CardContent className="flex items-center justify-center px-8 py-6 rounded-3xl border border-gray-300">
                        <span className="text-2xl font-semibold text-transparent">
                          {index + 1}
                        </span>
                      </CardContent>
                      <span className="text-center pl-14">name</span>
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
  );
};

export default HomePage;

// https://www.figma.com/file/CVhKjEoThe5bM8jF3ZeyFy/Memo?type=design&node-id=0-1&mode=design
