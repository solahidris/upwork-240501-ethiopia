import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Label } from "./ui/label";

const NavigationHeader = () => {
  return (
    <div className="flex flex-col fixed right-8 top-8 gap-2">
      <Label> Page Navigation</Label>
    <div className="flex gap-2">
      <Link href="/" className="w-20 bg-black text-white rounded-lg text-center">
        <Button>Home</Button>
      </Link>
      <Link href="/awards" className="w-20 bg-black text-white rounded-lg text-center">
        <Button>Awards</Button>
      </Link>
      <Link href="/create" className="w-20 bg-black text-white rounded-lg text-center">
        <Button>Create</Button>
      </Link>
    </div>
    </div>
  );
};

export default NavigationHeader;
