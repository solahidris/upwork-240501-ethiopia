import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Label } from "./ui/label";
import { Card } from "./ui/card";

const NavigationHeader = () => {
  return (
    <div className="relative m-10 gap-2 ">
      <Card className="p-3 bg-white flex items-center gap-4 z-[1000px]">
        <Label>Page Navigation</Label>
        <div className="flex gap-2">
          <Link
            href="/"
            className="w-20 bg-black text-white rounded-lg text-center"
          >
            <Button>Home</Button>
          </Link>
          <Link
            href="/awards"
            className="w-20 bg-black text-white rounded-lg text-center"
          >
            <Button>Awards</Button>
          </Link>
          <Link
            href="/create"
            className="w-20 bg-black text-white rounded-lg text-center"
          >
            <Button>Create</Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default NavigationHeader;
