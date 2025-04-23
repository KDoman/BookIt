import { useNavigate, useParams } from "react-router-dom";
import LEFT_ARROW from "../assets/Left_arrow.svg";
import { LayoutBox } from "./LayoutBox";
import { servicesFakeData, service, worker } from "../data/servicesFakeData";
import { Avatar, Button, Calendar } from "@heroui/react";
import { firstLettersUppercase } from "../helpers/firstLettersUppercase";
import PHONE_SVG from "../assets/phone.svg";
import SELECT_SVG from "../assets/Select.svg";
import { motion } from "framer-motion";
import { useState } from "react";
import { getCurrentDate } from "../helpers/getCurrentDate";

export const CardModal = () => {
  const { idCard } = useParams();
  const navigate = useNavigate();
  const { city, name, rating, street, type, services, staff, phones } =
    servicesFakeData[Number(idCard) - 1];

  const goBack = () => {
    navigate(-1);
  };

  const [selectedPerson, setSelectedPerson] = useState<worker | null>(null);
  const [selectedService, setSelectedService] = useState<service | null>(null);

  const setPerson = (e: worker) => {
    setSelectedPerson(e);
  };

  const setService = (e: service) => {
    setSelectedService(e);
  };

  return (
    <div className="mb-10">
      <LayoutBox>
        <div className="px-5 mt-4 ">
          <div
            className="w-10 h-10 bg-zinc-100  cursor-pointer overflow-hidden"
            onClick={goBack}
          >
            <motion.div
              className="flex items-center"
              whileHover={{ translateX: -7 }}
            >
              <img src={LEFT_ARROW} className="p-2" />
              <div className="w-5 h-5 p-5"></div>
            </motion.div>
          </div>
          <div className="w-full px-1 mt-5 flex flex-col gap-5">
            <div className="bg-zinc-100 p-2  rounded-lg">
              <h2 className="font-bold text-2xl">{name}</h2>
              <h3 className="text-md font-bold uppercase">{type}</h3>
              <div className="flex justify-between">
                <p>
                  {city}, {street}
                </p>
                <p>{rating}</p>
              </div>
            </div>
            <div className="flex gap-4 flex-wrap bg-zinc-100 rounded-lg p-2">
              {phones.map((phone, i) => {
                return (
                  <div key={i} className="flex gap-1">
                    <img className="max-w-5" src={PHONE_SVG} />
                    <p>{phone}</p>
                  </div>
                );
              })}
            </div>
            <div className="rounded-lg bg-zinc-100 p-2">
              <p className="pb-2 font-bold ">Wybierz osobę:</p>
              <div className="flex gap-2 flex-wrap ">
                {staff.map((person) => {
                  return (
                    <div
                      className={`flex flex-col hover:bg-zinc-200 transition-colors items-center gap-2 min-w-24 cursor-pointer pt-4 pb-2 rounded-lg ${
                        selectedPerson?.id == person.id ? "bg-zinc-200" : null
                      }`}
                      onClick={() => setPerson(person)}
                    >
                      <Avatar isBordered src={person.image} />
                      <p>{person.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="p-2 bg-zinc-100 rounded-lg">
              <p className="font-bold">Usługi:</p>
              {services.map((service, i) => {
                return (
                  <div
                    key={service.type + i}
                    className="flex justify-between items-center border-b-1 last-of-type:border-b-0 border-gray-900 py-2"
                  >
                    <p> {firstLettersUppercase(service.type)}</p>
                    <Button
                      size="sm"
                      onPress={() => setService(service)}
                      className={`overflow-hidden max-w-20 `}
                    >
                      <motion.div
                        animate={{
                          x: selectedService?.id === service.id ? 63 : 0,
                        }}
                        style={{ translateX: -35 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                        className="flex items-center"
                      >
                        <img src={SELECT_SVG} className="w-4 mr-10" />
                        {`${service.price} zł`}
                      </motion.div>
                    </Button>
                  </div>
                );
              })}
            </div>
            <Calendar
              color="foreground"
              className="mx-auto"
              isDisabled={!selectedPerson || !selectedService}
              onChange={(e) => console.log(`${e.year} / ${e.month} / ${e.day}`)}
              minValue={getCurrentDate()}
            />
            <Button className="mx-auto block min-w-full">Zarezerwuj</Button>
          </div>
        </div>
      </LayoutBox>
    </div>
  );
};
