"use client";

import { AlertDialog, Button } from "@heroui/react";

import { redirect, useRouter } from "next/navigation";
import { MdDelete } from "react-icons/md";

export function DeleteButton({ destination }) {
  const { _id, destinationName, country, departureDate } = destination;

  const router = useRouter();

  const handleDelete = async () => {
    const res = await fetch(`http://localhost:8000/destination/${_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });

    redirect("/destination");
  };

  return (
    <AlertDialog>
      <Button className="w-full sm:w-auto px-6 py-6 rounded-xl bg-red-600 text-white font-medium hover:bg-red-500 transition">
        <MdDelete />
        <span>Delete</span>
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete destination permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete the destination to{" "}
                <strong>
                  {destinationName} of {country} on {departureDate}
                </strong>{" "}
                and all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button onClick={handleDelete} slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete Destination
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
