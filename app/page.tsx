import BlocB from "@/components/ui/blocs/blocB";
import BlocC from "@/components/ui/blocs/blocC";
import AvatarEl from "@/components/ui/elements/AvatarEl";
import Btn from "@/components/ui/elements/btn";
import HeadElIcon from "@/components/ui/elements/headElIcon";
import NavIcons from "@/components/ui/elements/NavIcons";
import { Avatar } from "@radix-ui/react-avatar";
import {
  AirVent,
  BedDouble,
  Bell,
  Edit2,
  Globe,
  Heart,
  HomeIcon,
  MoreHorizontal,
  Plane,
  RollerCoaster,
  Search,
  ShoppingCart,
  Utensils,
  UtensilsCrossed,
  Wallet,
  WalletCards,
} from "lucide-react";
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
      <section className="relative py-5">
        <div className="max-w-5xl flex justify-between mx-auto px-4">
          {/* logo site */}
          <div>
            <h1 className="font-semibold text-3xl">Tripadvisor</h1>
          </div>
          {/* rigth logo */}
          <div className="flex gap-1">
            <HeadElIcon title="Avis" Icon={Edit2} />
            <HeadElIcon title="Voyages" Icon={Heart} />
            <HeadElIcon title="Alertes" Icon={Bell} />
            <AvatarEl />
            <HeadElIcon title="Panier" Icon={ShoppingCart} />
          </div>
        </div>
      </section>

      {/*  */}
      <header>
        <div className="grid max-md:overflow-scroll max-md:px-4 max-md:pb-6 max-md:flex max-md:overflow-x-visible max-md::snap-x sm:grid-cols-4 gap-2 max-w-5xl mx-auto px-2">
          <NavIcons title="Hotels" Icon={BedDouble} />
          <NavIcons title="Activités" Icon={RollerCoaster} />
          <NavIcons title="Locations de vacances" Icon={HomeIcon} />
          <NavIcons title="Restaurants" Icon={Utensils} />
          <NavIcons title="Récits de voyage" Icon={Globe} />
          <NavIcons title="Vols" Icon={Plane} />
          <NavIcons title="Croisières" Icon={AirVent} />
          <NavIcons title="Plus" Icon={MoreHorizontal} />
        </div>
      </header>

      {/* Search */}

      <section className="mx-2 my-10">
        <div className="max-w-5xl mx-auto my-4 h-80 bg-cover bg-[url('/carte.jpg')]">
          <div className="bg-[rgba(0,0,0,0.3)] w-full h-full flex items-center justify-center">
            <form action="" className="mx-auto w-full px-10 relative">
              <label
                htmlFor="search"
                className="absolute  left-16 top-5 font-light"
              >
                <Search />
              </label>
              <input
                type="search"
                name=""
                placeholder="Quelle destination?"
                id="search"
                className="w-full h-16  rounded-full pr-6 py-2 pl-14 text-gray-600"
              />
            </form>
          </div>
        </div>
      </section>

      {/* Section Best */}
      <section className="relative my-10">
        <div className="max-w-5xl mx-auto my-4 h-96 bg-cover bg-[url('/photo3.jpg')]">
          <div className="bg-[rgba(0,0,0,0.3)] w-full h-full flex items-end  justify-start">
            <div className="p-4 text-white">
              <h1 className="font-semibold text-4xl">
                Activités Travellers&apos;Choice Best of the Best
              </h1>
              <p className="font-light text-xl">
                Découvrez la creme de la creme, une selection a partir d&apos;
                avis authentiques
              </p>
              <Btn title="Voir la liste" isWhite={true} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
