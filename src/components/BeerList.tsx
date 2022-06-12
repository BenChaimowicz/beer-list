import React, { useEffect, useState, useContext } from "react";
import BeerItem from "./BeerItem";
import { IBeerItem } from "../interfaces/BeerItem.interface";
import { getBeersList } from "../api/PunkAPI";
import "./BeerList.css";
import BeerSpinner from "./BeerSpinner";
import { Context as ResponsiveContext, useMediaQuery } from "react-responsive";
import LoadMoreButton from "./LoadMoreButton";
// import MediaQueryContext from "../store/MediaQueryContext";

const BeerList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [beers, setBeers] = useState<IBeerItem[]>([]);
  const [pagesLoaded, setPagesLoaded] = useState<number>(1);

  const isBigScreen = useMediaQuery({ query: "(min-width: 82rem)" });
  const isDesktop = useMediaQuery({
    query: "(min-width: 62rem, max-width: 81rem)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width: 43rem, max-width: 61rem)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 42rem)" });

  const onClickHandler =() => {
    getBeers(pagesLoaded);
  }

  async function getBeers(page: number, perPage?: number) {
    try {
      setIsLoading(true);
      const { data }: { data: IBeerItem[] } = await getBeersList(pagesLoaded);
      setBeers((prevState: IBeerItem[]) => [...prevState, ...data]);
      setPagesLoaded(pagesLoaded + 1);
      setIsLoading(false);
    } catch (error) {
      console.error("Could not get beers from API!", error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getBeers(pagesLoaded);
  }, []);

  return (
    <div className="beer-list">
      <div
        className={
          isBigScreen || isDesktop
            ? "beer-list__container beer-list__big"
            : "beer-list__container beer-list__small"
        }
      >
        {isLoading && <BeerSpinner></BeerSpinner>}
        {beers.length && beers.length > 0 ? (
          beers.map((beer: IBeerItem) => (
            <BeerItem beerItem={beer} key={beer.id} isMobile={isMobile}></BeerItem>
          ))
        ) : (
          <span>No beers yet.</span>
        )}
      </div>
      <div className="beer-list__btn-container">
        <LoadMoreButton onLoadMore={onClickHandler}></LoadMoreButton>
      </div>
    </div>
  );
};

export default BeerList;
