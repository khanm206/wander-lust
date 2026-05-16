import Image from "next/image";
import { IoLocationOutline, IoAirplaneOutline } from "react-icons/io5";
import { FaRegCalendarCheck, FaRegClock, FaShieldAlt } from "react-icons/fa";
import { MdOutlineFreeCancellation } from "react-icons/md";
import { EditModal } from "./EditModal";
import BackButton from "./BackButton";
import { DeleteButton } from "./DeleteButton";

const DestinationDetailsCard = ({ destination }) => {
  return (
    <div className="w-11/12 mx-auto py-10">
      <div className="rounded-2xl overflow-hidden shadow-lg border bg-white">
        {/* Image */}
        <div className="relative w-full h-[35vh] sm:h-[45vh]">
          <Image
            src={destination.imageUrl}
            alt={destination.destinationName}
            fill
            className="object-cover pointer-events-none"
          />

          <div className="absolute inset-0 pointer-events-none bg-linear-to-t from-black/50 to-transparent" />

          <div className="absolute bottom-4 left-4 text-white">
            <h1 className="text-2xl sm:text-3xl font-bold">
              {destination.destinationName}
            </h1>
            <p
              className="flex items-center gap-1 text-sm opacity-90
            "
            >
              <IoLocationOutline />
              {destination.country}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Category + Price */}
          <div className="flex flex-wrap justify-between items-center gap-3">
            <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-600 font-medium">
              {destination.category}
            </span>

            <div className="text-right">
              <p className="text-2xl font-bold text-green-600">
                ${destination.price}
              </p>
              <p className="text-xs text-gray-500">per person</p>
            </div>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="p-3 rounded-lg bg-gray-50 flex items-center gap-2">
              <FaRegClock className="text-gray-600" />
              <div>
                <p className="text-gray-500">Duration</p>
                <p className="font-medium">{destination.duration}</p>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-gray-50 flex items-center gap-2">
              <FaRegCalendarCheck className="text-gray-600" />
              <div>
                <p className="text-gray-500">Departure</p>
                <p className="font-medium">{destination.departureDate}</p>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-gray-50 flex items-center gap-2">
              <IoLocationOutline className="text-gray-600" />
              <div>
                <p className="text-gray-500">Destination</p>
                <p className="font-medium">{destination.country}</p>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-gray-50 flex items-center gap-2">
              <IoAirplaneOutline className="text-gray-600" />
              <div>
                <p className="text-gray-500">Package Type</p>
                <p className="font-medium">{destination.category}</p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">What’s included</h2>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <MdOutlineFreeCancellation className="text-green-600" />
                Free cancellation up to 7 days before departure
              </li>

              <li className="flex items-center gap-2">
                <FaShieldAlt className="text-green-600" />
                Travel insurance included
              </li>

              <li className="flex items-center gap-2">
                <IoAirplaneOutline className="text-green-600" />
                Airport pickup & drop-off
              </li>

              <li className="flex items-center gap-2">
                <FaRegCalendarCheck className="text-green-600" />
                Daily breakfast + hotel stay
              </li>
            </ul>
          </div>

          {/* Description */}
          <div>
            <h2 className="text-lg font-semibold mb-2">About this trip</h2>
            <p className="text-gray-600 leading-7">{destination.description}</p>
          </div>

          {/* CTA */}

          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4">
            <EditModal destination={destination} />
            <DeleteButton destination={destination} />
            <BackButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailsCard;
