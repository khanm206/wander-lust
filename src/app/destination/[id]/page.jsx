import DestinationDetailsCard from "@/components/DestinationDetailsCard";

const DestinationDetails = async ({ params }) => {
  const useParams = await params;
  const id = await useParams.id;
  const res = await fetch(`http://localhost:8000/destination/${id}`);
  const destination = await res.json();

  return <DestinationDetailsCard destination={destination} />;
};

export default DestinationDetails;
