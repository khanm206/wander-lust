import DestinationCard from "@/components/DestinationCard";
import React from "react";

const Destination = async () => {
  const res = await fetch("http://localhost:8000/destination");
  const destinations = await res.json();

  return (
    <section className="w-11/12 mx-auto my-8">
      <h1 className="text-2xl font-semibold">Explore All Destinations</h1>
      <div className="grid md:grid-cols-3 grid-cols-1 lg:grid-cols-4 gap-6 my-6">
        {destinations.map((destination) => (
          <DestinationCard key={destination._id} destination={destination} />
        ))}
      </div>
    </section>
  );
};

export default Destination;
