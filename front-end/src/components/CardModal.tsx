import { useNavigate, useParams } from "react-router-dom";
import LEFT_ARROW from "../assets/Left_arrow.svg";
import { LayoutBox } from "./LayoutBox";
import { fakeData } from "../data/fakeData";

export const CardModal = () => {
  const { idCard } = useParams();
  const navigate = useNavigate();
  const { city, id, name, rating, street, type } = fakeData[Number(idCard) - 1];

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className=" bg-red-200 h-[200px]">
      <LayoutBox>
        <div className="px-5 mt-4">
          <img
            src={LEFT_ARROW}
            className="max-w-8 cursor-pointer"
            onClick={goBack}
          />
          <div className="bg-red-300 w-full px-1 mt-5">
            <h2 className="font-bold text-3xl">{name}</h2>
          </div>
        </div>
      </LayoutBox>
    </div>
  );
};
