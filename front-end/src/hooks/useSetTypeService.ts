import { useDispatch } from "react-redux";
import { setValue } from "../redux/slices/inputValueSlice";

export const useSetInputValue = () => {
  const dispatch = useDispatch();
  return (value: string) => dispatch(setValue(value));
};
