import Logo from "@/components/Logo";
import Hero from "./_sections/Hero";

export default function Home() {

  return (
    <main className="">
      <Hero />
      <div className="flex flex-row justify-center items-center">
        <Logo width={300} height={173.95} />
      </div>
    </main>
  );
}
