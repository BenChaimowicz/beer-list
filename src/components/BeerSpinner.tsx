import React from 'react'
import beerloader from '../assets/beerloader.gif';
import './BeerSpinner.css';

const BeerSpinner = () => {
  return (
    <div className='spinner'>
        <img src={beerloader} alt="" />
    </div>
  )
}

export default BeerSpinner