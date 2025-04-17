import { LayoutBox } from "../components/LayoutBox";
import { AutocompleteInput } from "../components/AutocompleteInput";
import FilterModal from "../components/FilterModal";
import { fakeData } from "../data/fakeData.js";
import { ServiceCard } from "../components/ServiceCard.js";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store.js";
import { useEffect, useState } from "react";

export const SearchResults = () => {
  const [filteredArray, setFilteredArray] = useState(fakeData);

  const inputValue = useSelector((state: RootState) => {
    return state.inputValue.value;
  });

  const searchFilter = useSelector((state: RootState) => {
    return state.searchFilter;
  });

  useEffect(() => {
    const filterArray = fakeData.filter((data) => data.type === inputValue);
    if (inputValue) {
      setFilteredArray(filterArray);
    }
  }, []);

  const handleFilterClick = () => {
    const filtered = fakeData.filter((item) => item.type === inputValue);
    const filterByCity =
      searchFilter.city || searchFilter.date
        ? filtered.filter((service) => service.city === searchFilter.city)
        : filtered;
    setFilteredArray(filterByCity);
  };

  return (
    <LayoutBox>
      <>
        <div className="flex flex-col gap-2 py-2 mx-5">
          <AutocompleteInput />
          <FilterModal setFilteredArray={handleFilterClick} />
          <div className="flex flex-wrap gap-5 justify-center">
            {filteredArray.map((data) => (
              <ServiceCard key={data.id} id={data.id} data={data} />
            ))}
          </div>
        </div>
      </>
    </LayoutBox>
  );
};
