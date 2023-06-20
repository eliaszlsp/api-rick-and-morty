import { Spinner } from "@material-tailwind/react";

export default function Loading(): any {
  return (
    <div className="mt-48 flex h-96 justify-center text-9xl uppercase text-white ">
      <Spinner className="h-16 w-16 text-[#bfde42]" />
    </div>
  );
}
