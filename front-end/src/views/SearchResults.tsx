import { LayoutBox } from "../components/LayoutBox";
import { SearchedServices } from "../components/SearchedServices.js";
import { SearchFilters } from "../components/SearchFilters.js";
import { servicesFakeData } from "../data/servicesFakeData.js";
import { useWindowWidth } from "../hooks/useWindowWidth.js";

export const SearchResults = () => {
  const windowSize = useWindowWidth();

  const isMapHidden = windowSize > 639;
  return (
    <>
      <LayoutBox>
        <div className="grid grid-cols-7 grid-rows-1 gap-4 my-2">
          <div className="col-span-7">
            <SearchFilters />
          </div>

          <div
            className={`row-span-4 row-start-2 bg-red-100  ${
              isMapHidden ? "col-span-3 " : "col-span-7"
            }`}
          >
            <SearchedServices items={servicesFakeData} />
          </div>
          {isMapHidden && (
            <div className="col-span-4 row-span-4 col-start-4 row-start-2">
              3
            </div>
          )}
        </div>
      </LayoutBox>
    </>
  );
};
