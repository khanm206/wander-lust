"use client";

import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { MdOutlineArrowBack } from "react-icons/md";

const BackButton = () => {
  const router = useRouter();
  return (
    <Button
      onPress={() => {
        router.push(`/destination`);
      }}
      className="w-full sm:w-auto px-6 py-6 rounded-xl bg-sky-600 text-white font-medium hover:bg-sky-500 transition"
    >
      <MdOutlineArrowBack />
      <span>Back</span>
    </Button>
  );
};

export default BackButton;
