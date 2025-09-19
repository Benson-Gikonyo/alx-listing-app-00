import { HERO_BG, FILTERS, PROPERTYLISTINGSAMPLE } from "@/constants";
import Pill from "@/components/common/Pill";
import PropertyCard from "@/components/common/PropertyCard";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-[400px] flex items-center justify-center text-center text-white"
        style={{ backgroundImage: `url(${HERO_BG})`, backgroundSize: "cover" }}
      >
        <div className="bg-black bg-opacity-40 w-full h-full absolute top-0 left-0"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold">Find your favorite place here!</h1>
          <p className="mt-4 text-lg">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="flex flex-wrap gap-3 justify-center py-6">
        {FILTERS.map((filter, idx) => (
          <Pill key={idx} label={filter} />
        ))}
      </section>

      {/* Listings */}
      <section className="grid gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-8">
        {PROPERTYLISTINGSAMPLE.map((property, idx) => (
          <PropertyCard key={idx} property={property} />
        ))}
      </section>
    </>
  );
}
