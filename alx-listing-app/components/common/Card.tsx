import React from "react";
import Image from "next/image";
import { CardProps } from "../../interfaces";

const Card: React.FC<CardProps> = ({ image, title, description }) => {
  return (
    <div className="rounded-lg shadow-md border overflow-hidden hover:shadow-lg transition">
      <Image src={image} alt={title} width={400} height={250} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Card;
