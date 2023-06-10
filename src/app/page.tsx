"use client";
import { apiConsumer } from "@/services/apiconsumer";
import Image from "next/image";
import { useEffect, useState } from "react";

type witch = {
  results: {
    name: string;
    image: string;
  }[];
};

export default function Home() {
  const [name, setName] = useState("");
  const [crazy, setCrazy] = useState<any>([]);

  async function search() {
    const result = await apiConsumer<witch[]>(
      `https://rickandmortyapi.com/api/character/?name=${name}`
    );
    setCrazy(result.results);
  }

  useEffect(() => {
    search();
  }, [name]);

  const handleInput = (event: any) => {
    setName(event.target.value.trim());
  };

  const logValue = () => {
    console.log(name);
  };

  return (
    <>
      <div className="flex flex-col  ">
        <div className="flex w-screen justify-center mt-4 ">
          <input
            className="h-8 border border-black placeholder:italic placeholder:text-red-700 
            placeholder:uppercase placeholder:text-sm  "
            onChange={handleInput}
            placeholder="Busque seu Personagem... "
          />
        </div>

        {name === "" ? (
          ""
        ) : (
          <div className="grid grid-cols-5 gap-6 text-center ml-4 mt-4">
            {crazy.length > 0 &&
              crazy.map((user: any, index: number) => {
                console.log(crazy.length);
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center w-[150px] h-fit pb-4 bg-[#04b3cb] border-[#b3dc2b] border-4 gap-3 rounded-md  "
                  >
                    <Image
                      className="border rounded-md mt-4 "
                      key={user.id}
                      src={user.image}
                      width={100}
                      height={100}
                      alt="bruxo"
                    />
                    <p className="decoration-black">{user.name}</p>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </>
  );
}
