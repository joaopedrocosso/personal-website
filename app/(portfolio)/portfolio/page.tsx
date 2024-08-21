import { ScrollProvider } from "../_providers/ScrollProvider";
import Portfolio from "@/app/(portfolio)/_sections/Portfolio";
import SideProfile from "../_sections/SideProfile";

export default function PersonalPortfolio() {
  return (
    <main className="p-6 md:p-8 lg:p-0 flex flex-col lg:flex-row lg:gap-32 antialiased justify-center">
      <ScrollProvider>
        <section className="lg:flex lg:flex-col lg:sticky lg:top-0 lg:h-screen lg:max-h-screen lg:justify-between lg:items-start lg:py-24">
          <SideProfile />
        </section>

        <section className="flex flex-col lg:max-w-xl">
          <Portfolio />
        </section>
      </ScrollProvider>
    </main>
  );
}
