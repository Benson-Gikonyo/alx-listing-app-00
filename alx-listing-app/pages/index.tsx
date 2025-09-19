import React from "react";
import Card from "../components/common/Card";
import Button from "../components/common/Button";
import { UI_TEXT } from "../constants";

const Home: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <header className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold">ALX Listing App</h1>
        <Button label={UI_TEXT.bookNow} />
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Card
          image="/assets/house-1.jpg"
          title="Cozy Apartment"
          description="A lovely apartment in the city center, close to all amenities."
        />
        <Card
          image="/assets/house-2.jpg"
          title="Beach House"
          description="Enjoy the ocean view from this spacious house near the coast."
        />
        <Card
          image="/assets/placeholder.jpg"
          title="Mountain Cabin"
          description="Escape to the mountains with this peaceful wooden cabin."
        />
      </section>
    </main>
  );
}


export default Home