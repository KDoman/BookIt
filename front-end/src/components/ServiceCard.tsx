import { Card, CardHeader, CardBody, Image } from "@heroui/react";
import { useNavigate, useParams } from "react-router-dom";
import { fakeData } from "../data/fakeData";

export const ServiceCard = ({ id, data }: { id: string; data: fakeData }) => {
  const navigate = useNavigate();
  const { service } = useParams();

  return (
    <div
      className="relative sm:max-w-[48%]"
      onClick={() => navigate(`/search/${service}/${id}`)}
    >
      <Card className=" w-full shadow-none border-2 cursor-pointer ">
        <CardHeader className=" px-4 flex-col items-start">
          <h4 className="font-bold text-large">{data.name} </h4>
          <p className="text-tiny uppercase font-bold">{data.type}</p>
          <small className="text-default-500">
            {data.street}, {data.city}
          </small>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src="https://heroui.com/images/hero-card-complete.jpeg"
          />
        </CardBody>
      </Card>
    </div>
  );
};
