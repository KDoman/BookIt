import { useNavigate, useParams } from "react-router-dom";
import LEFT_ARROW from "../assets/Left_arrow.svg";
import { LayoutBox } from "./LayoutBox";
import { fakeData } from "../data/fakeData";
import { Avatar, Button } from "@heroui/react";
import { firstLettersUppercase } from "../helpers/firstLettersUppercase";
import PHONE_SVG from "../assets/phone.svg";
import { useState } from "react";

export const CardModal = () => {
  const { idCard } = useParams();
  const navigate = useNavigate();
  const { city, name, rating, street, type, services, staff, phones } =
    fakeData[Number(idCard) - 1];

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="mb-10">
      <LayoutBox>
        <div className="px-5 mt-4">
          <img
            src={LEFT_ARROW}
            className="max-w-8 cursor-pointer"
            onClick={goBack}
          />
          <div className="w-full px-1 mt-5">
            <h2 className="font-bold text-2xl">{name}</h2>
            <h3 className="text-md font-bold uppercase">{type}</h3>
            <div className="flex justify-between">
              <p>
                {city}, {street}
              </p>
              <p>{rating}</p>
            </div>
            <div className="mt-5 flex gap-4 flex-wrap border-t-1 border-black">
              {phones.map((phone, i) => {
                return (
                  <div key={i} className="flex gap-1">
                    <img className="max-w-5" src={PHONE_SVG} />
                    <p>{phone}</p>
                  </div>
                );
              })}
            </div>
            <div className="py-5">
              <p className="pb-2 font-bold border-t-1 border-black">
                Wybierz osobę:
              </p>
              <div className="flex gap-2 flex-wrap ">
                {staff.map((person) => {
                  return (
                    <div className="flex flex-col items-center gap-2 w-24 cursor-pointer  py-3 hover:bg-zinc-200">
                      <Avatar isBordered src={person.image} />
                      <p>{person.name}</p>
                    </div>
                  );
                })}
              </div>
              <div className="py-10">
                <p className="font-bold border-t-1 border-black">Usługi:</p>
                {services.map((service, i) => {
                  return (
                    <div
                      key={service.type + i}
                      className="flex justify-between items-center border-b-1 border-gray-900 py-2"
                    >
                      <p> {firstLettersUppercase(service.type)}</p>
                      <Button size="sm">{service.price} zł</Button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </LayoutBox>
    </div>
  );
};
