"use client";
import { useEffect, useState } from "react";
import { getStaticProps } from "@/querys/apiconsumer";
import Image from "next/image";
import ButtonPages from "@/components/pagination";

interface Character {
  name: string;
  // Outras propriedades do personagem, se houver
}

export default function Home() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [name, setName] = useState("");
  const [active, setActive] = useState<number>(1);
  const [maxPagination, setMaxPagination] = useState<number>();

  useEffect(() => {
    const fetchCharacters = async () => {
      const data = await getStaticProps(name, active);
      setCharacters(data.characters.results);
      setMaxPagination(data.characters.info.pages);
      console.log(data.characters);
    };

    fetchCharacters();
  }, [name, active]);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (active != 1) {
      setActive(1);
    }
    setName(event.target.value.trim());
  };
  const next = () => {
    if (active === maxPagination) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  return (
    <>
      <div>
        <div className="mt-4 flex w-screen justify-center ">
          <input
            className="h-8 border border-black placeholder:text-sm placeholder:uppercase 
            placeholder:italic placeholder:text-red-700  "
            onChange={handleInput}
            placeholder="Busque seu Personagem... "
          />
        </div>

        <ButtonPages
          active={active}
          next={next}
          prev={prev}
          setactive={setActive}
          maxPagination={maxPagination ?? 0}
          input={() => {}}
          increment={() => {}}
          decrement={() => {}}
          page={0}
        />
        <div className="ml-4 mt-4 grid grid-cols-5 gap-6 text-center">
          {characters.length > 0 &&
            characters.map((user: any, index: number) => {
              return (
                <div
                  key={index}
                  className="flex h-fit w-[150px] flex-col items-center gap-3 rounded-md border-4 border-[#b3dc2b] bg-[#04b3cb] pb-4  "
                >
                  <Image
                    className="mt-4 rounded-md border "
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
      </div>
    </>
  );
}
