import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PlayIcon } from "@radix-ui/react-icons";

export default function Main() {
  return (
    <div className="relative bg-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center py-12 lg:py-24">
        <div className="flex-1">
          <div className="max-w-md">
            <p className="text-sm font-semibold uppercase tracking-wide text-green-600">
              Start learning for free
            </p>
            <h1 className="mt-2 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
              Build Data Skills Online
            </h1>
            <p className="mt-4 text-lg text-gray-500">
              Data drives everything. Get the skills you need for the future of
              work.
            </p>
            <div className="mt-6 sm:flex sm:space-x-4">
              <Button className="bg-green-600 text-white px-4 py-2 rounded-md shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                Join For Free
              </Button>
              <Button className="mt-3 sm:mt-0 bg-white text-green-600 px-4 py-2 rounded-md shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                Find Courses
              </Button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Dialog>
            <DialogTrigger>
              <div className="relative hover:scale-105 transform transition-transform duration-300">
                <Image
                  src="/main_shape.png"
                  alt="cloudinary"
                  width={500}
                  height={500}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayIcon className="w-12 h-12 text-white bg-black bg-opacity-50 rounded-full p-2" />
                </div>
              </div>
            </DialogTrigger>
            <DialogContent>
              <iframe
                width={660}
                height={360}
                src="//www.youtube.com/embed/LlCwHnp3kL4?mute=0&amp;autoplay=0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
