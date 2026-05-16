import { Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegCalendarCheck } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineArrowOutward } from "react-icons/md";

const DestinationCard = ({ destination }) => {
  const { _id, destinationName, country, duration, price, imageUrl } =
    destination;

  return (
    <Card className="w-full overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
      <div className="relative w-full h-44 sm:h-48 md:h-52">
        <Image
          src={imageUrl}
          alt={destinationName}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4 space-y-3">
        <p className="text-sm text-gray-500 flex items-center gap-1 truncate">
          <IoLocationOutline className="shrink-0" />
          {country}
        </p>

        <div className="flex justify-between items-start gap-3">
          <h2 className="lg:text-2xl text-xl font-semibold line-clamp-2">
            {destinationName}
          </h2>

          <p className="font-bold text-xl whitespace-nowrap">
            ${price}/<sub className="font-medium">Person</sub>
          </p>
        </div>

        <p className="text-sm text-gray-600 flex items-center gap-2">
          <FaRegCalendarCheck className="shrink-0" />
          {duration}
        </p>

        <div className="pt-2">
          <Link
            href={`/destination/${_id}`}
            className="text-blue-500 flex items-center gap-1 text-sm sm:text-base font-medium hover:underline transition "
          >
            <span>Check Details</span>
            <MdOutlineArrowOutward />
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default DestinationCard;
