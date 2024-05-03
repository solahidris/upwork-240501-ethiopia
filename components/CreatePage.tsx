import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const CreatePage = () => {
  console.log("create");

  return (
    <div className="flex min-w-screen">
      {/* Left side */}
      <div className="w-full flex flex-col pl-20">
        <p className="pb-14 text-4xl">Create</p>
        <Label className="pb-6 text-xl">Name</Label>
        <Input className="w-[300px] mb-20 bg-gray-100"></Input>
        <Label className="pb-6 text-xl">Thumbnail</Label>
        <Input className="w-[300px] mb-20 bg-gray-100"></Input>
      </div>
      {/* Right Side */}
      <div className="w-full pt-20">
        <p className="pb-14 text-4xl">13 Files Uploaded</p>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <Label className="pb-6 text-xl">Name of media</Label>
            <Input className="w-[300px] bg-gray-100"></Input>
          </div>
          <div className="flex flex-col">
            <Label className="pb-6 text-xl">Select File</Label>
            <Input className="w-[300px] bg-gray-100"></Input>
          </div>
          <div className="flex flex-col">
            <Label className="pb-6 text-xl">File Type</Label>
            <Input className="w-[300px] bg-gray-100"></Input>
          </div>
          <div className="flex flex-col gap-4 items-end mt-10 pr-8">
            <Button className="w-40">Upload</Button>
            <Button className="w-40">Finish</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
