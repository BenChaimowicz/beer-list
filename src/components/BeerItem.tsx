import React from 'react'
import ReactTooltip from 'react-tooltip';
import './BeerItem.css';
import {IBeerItem}from'../interfaces/BeerItem.interface';

const BeerItem = ({beerItem}: {beerItem: IBeerItem}): React.ReactElement => {
  const maltIngredients: string = beerItem.ingredients.malt.map(m => m.name).join(', ');
  const hopsIngredients: string = beerItem.ingredients.hops.map(h => h.name).join(', ');
  const yeastIngredients: string = beerItem.ingredients.yeast;
  const simplifiedIngredients: string = `Ingredients:<br />Malt: ${maltIngredients}<br />Hops: ${hopsIngredients}<br />Yeast: ${yeastIngredients}`;  

  return (
    <div className='beer-item'>
        <div data-tip={simplifiedIngredients} data-for='beer-ingredients' className='beer-item__image'>
            <img src={beerItem.image_url} alt="" />
        </div>
        <div className='beer-item__text-container'>
            <h2 className='beer-item__name'>{beerItem.name}</h2>
            <h4 className='beer-item__type'>{beerItem.tagline}</h4>
            <div className='beer-item__description'>{beerItem.description}</div>
        </div>
        <ReactTooltip id='beer-ingredients' multiline={true} effect='float' className='beer-item__tooltip'></ReactTooltip>
    </div>
  )
}

export default BeerItem