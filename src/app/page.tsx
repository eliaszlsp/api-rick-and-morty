"use client";
import { useEffect, useState } from "react";
import { getStaticProps } from "@/querys/apiconsumer";
import Image from "next/image";
import ButtonPages from "@/components/pagination";
import StampCard from "@/components/stampcard";
import Loading from "@/components/loading";

interface Character {
  name: string;
  // Outras propriedades do personagem, se houver
}

export default function Home() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [name, setName] = useState("");
  const [active, setActive] = useState<number>(1); // page active
  const [maxPagination, setMaxPagination] = useState<number>();
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchCharacters = async () => {
      const data = await getStaticProps(name, active);
      setCharacters(data.characters.results);
      setMaxPagination(data.characters.info.pages);
      setLoading(true);
    };

    const fetchData = async () => {
      setLoading(false);
      await fetchCharacters();
    };

    fetchData();
  }, [name, active]);

  const handleInput = (event: any) => {
    if (active !== 1) {
      setActive(1);
    }
    setName(inputValue);
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
        <div className=" mt-4 flex w-screen justify-center ">
          <input
            className="h-10 rounded-md border-4 pl-1 focus:border-[#bfde42] focus:outline-none  "
            onChange={(e) => setInputValue(e.target.value.trim())}
            placeholder="Find your character... "
          />

          <button
            onClick={handleInput}
            className="ml-10 w-24 rounded-md border-4 border-[#bfde42] bg-[#41b4c9] "
          >
            Search
          </button>
        </div>
        {!loading ? (
          <Loading />
        ) : (
          <div className=" mx-7 my-5  flex flex-wrap justify-center gap-40 text-center ">
            {characters.length > 0 &&
              characters.map((user: any, index: number) => {
                return (
                  <div
                    key={index}
                    className="relative flex  h-96 min-h-full w-64 flex-col items-center gap-1 rounded-md border-4 border-[#bfde42] bg-[#41b4c9] pb-4  "
                  >
                    <Image
                      className="mt-4 rounded-md border "
                      key={user.id}
                      src={user.image}
                      width={200}
                      height={200}
                      alt="bruxo"
                      priority={true}
                    />
                    <p className=" relative ">
                      {" "}
                      <strong>Name: </strong> {user.name}
                    </p>
                    <p className="">
                      {" "}
                      <strong>Species:</strong> {user.species}
                    </p>
                    <p className="">
                      {" "}
                      <strong> Gender:</strong> {user.gender}
                    </p>
                    <p className="">
                      {" "}
                      <strong>Location: </strong> {user.location.name}{" "}
                    </p>
                    <div className=" absolute right-0   -mr-[55px] h-56 w-56 ">
                      <StampCard status={user.status} />
                    </div>
                  </div>
                );
              })}
          </div>
        )}

        <div className=" mr-20  flex flex-1 flex-row-reverse self-end ">
          <ButtonPages
            active={active}
            next={next}
            prev={prev}
            setActive={setActive}
            maxPagination={maxPagination || 0}
            page={0}
          />
        </div>
      </div>
    </>
  );
}
