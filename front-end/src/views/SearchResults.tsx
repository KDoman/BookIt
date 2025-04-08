import { LayoutBox } from "../components/LayoutBox";
import { AutocompleteInput } from "../components/AutocompleteInput";
import FilterModal from "../components/FilterModal";
import { fakeData } from "../data/fakeData.js";
import { ServiceCard } from "../components/ServiceCard.js";

export const SearchResults = () => {
  return (
    <LayoutBox>
      <>
        <div className="flex flex-col sm:flex-row gap-2 py-2 mx-5 ">
          <AutocompleteInput setService={(e) => console.log(e)} />
          <FilterModal />
          {fakeData.map((data) => (
            <ServiceCard key={data.id} id={data.id} data={data} />
          ))}
        </div>
      </>
    </LayoutBox>
  );
};
