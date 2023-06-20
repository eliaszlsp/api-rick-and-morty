"use client";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";

interface Props {
  page: number;
  maxPagination: number;
  active: number;
  setActive: (index: number) => void;
  prev: () => void;
  next: () => void;
}

type Color = "blue" | "blue-gray";

export default function ButtonPages(props: Props) {
  const { maxPagination, active, setActive, prev, next }: Props = props;

  useEffect(() => {}, []);

  type Variant = "filled" | "text";

  const getItemProps = (index: number) => ({
    variant: active === index ? ("filled" as Variant) : ("text" as Variant),
    color: active === index ? ("blue" as Color) : ("blue-gray" as Color),
    onClick: () => {
      setActive(index);
    },
  });

  const buttons = numbersPages(maxPagination);

  function numbersPages(maxPage: number) {
    let result = [];

    if (maxPage < 42) {
      for (let index = 1; index <= maxPage; index++) {
        result.push(
          <IconButton {...getItemProps(index)} key={index}>
            {index}
          </IconButton>
        );
      }
    } else if (active <= 10) {
      for (let index = 1; index <= 10; index++) {
        result.push(
          <IconButton {...getItemProps(index)} key={index}>
            {index}
          </IconButton>
        );
      }
    } else if (active <= 20) {
      for (let index = 11; index <= 20; index++) {
        result.push(
          <IconButton {...getItemProps(index)} key={index}>
            {index}
          </IconButton>
        );
      }
    } else if (active <= 30) {
      for (let index = 21; index <= 30; index++) {
        result.push(
          <IconButton {...getItemProps(index)} key={index}>
            {index}
          </IconButton>
        );
      }
    } else if (active <= 40) {
      for (let index = 31; index <= 40; index++) {
        result.push(
          <IconButton {...getItemProps(index)} key={index}>
            {index}
          </IconButton>
        );
      }
    } else if (active <= 50) {
      for (let index = 41; index <= maxPage; index++) {
        result.push(
          <IconButton {...getItemProps(index)} key={index}>
            {index}
          </IconButton>
        );
      }
    }

    return result;
  }

  return (
    <div className="flex items-center gap-4">
      <Button
        variant="text"
        color="blue-gray"
        className="flex items-center gap-2"
        onClick={prev}
        disabled={active === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>
      <div className="flex items-center gap-2">{buttons}</div>
      <Button
        variant="text"
        color="blue-gray"
        className="flex items-center gap-2"
        onClick={next}
        disabled={active === maxPagination}
      >
        Next
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
}
