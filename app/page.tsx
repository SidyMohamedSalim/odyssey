import BlocB from "@/components/ui/blocs/blocB";
import BlocC from "@/components/ui/blocs/blocC";
import Btn from "@/components/ui/elements/btn";
import HeadElIcon from "@/components/ui/elements/headElIcon";
import NavIcons from "@/components/ui/elements/NavIcons";
import Image from "next/image";
import BlocA from "../components/ui/blocs/blocA";

export default function Home() {
  return (
    <main className="bg-gr ">
      {/* top article */}
      <section className="relative">
        <div className="max-w-5xl bg-violet-100 flex mx-auto h-40">
          <div className="p-4">
            <h1 className="font-semibold text-2xl">
              Tokyo pour les amateurs de pizza
            </h1>
            <p className="l line-clamp-1 mt-1 text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
              dolorum culpa ipsam distinctio eligendi in delectus facilis quis?
              Pariatur accusantium voluptate aut quo beatae itaque ut et,
              consequatur officiis distinctio.
            </p>
            <Btn title="Lire" />
          </div>
          <div>
            <Image
              width={800}
              height={800}
              className="h-full"
              alt=""
              src={"/photo5.jpg"}
            />
          </div>
        </div>
      </section>

      {/* Title Section  */}
      <section className="relative"></section>
    </main>
  );
}
