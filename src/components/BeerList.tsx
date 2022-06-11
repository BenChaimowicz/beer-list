import React, { useEffect, useState } from "react";
import BeerItem from "./BeerItem";
import { IBeerItem } from "../interfaces/BeerItem.interface";
import { getBeersList } from "../api/PunkAPI";
import "./BeerList.css";
import BeerSpinner from "./BeerSpinner";

const BeerList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [beers, setBeers] = useState<IBeerItem[]>([]);
  const [pagesLoaded, setPagesLoaded] = useState<number>(1);

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
      {isLoading && <BeerSpinner></BeerSpinner>}
      {beers.length && beers.length > 0 ? (
        beers.map((beer: IBeerItem) => (
          <BeerItem beerItem={beer} key={beer.id}></BeerItem>
        ))
      ) : (
        <span>No beers yet.</span>
      )}
      <div className="beer-list__btn-container">
        <div className="beer-list__btn-spacer"></div>
        <button
          className="beer-list__load-more-btn"
          onClick={() => getBeers(pagesLoaded)}
        >
          Load More &#709;
        </button>
        <div className="beer-list__btn-spacer"></div>
      </div>
    </div>
  );
};

export default BeerList;
