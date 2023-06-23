import Image from "next/image";
import Link from "next/link";
import Hero from "public/image/hero.png";

export default function Home() {
  return (
    <main className="flex items-center gap-[100px] ">
      <div className="flex-1 flex flex-col gap-6 ">
        <h1 className="title-gradient text-5xl font-bold">
          Better design for your digital products.
        </h1>
        <p className="text-sm font-light">
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Link
          href="/portfolio"
          className="bg-green-500 hover:bg-green-600 rounded-lg py-2 px-4 text-white w-max"
        >
          see our works
        </Link>
      </div>
      <div className="flex-1">
        <Image src={Hero} alt="hero photo" className="w-full " />
      </div>
    </main>
  );
}
