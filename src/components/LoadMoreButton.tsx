import React from 'react'
import './LoadMoreButton.css';

const LoadMoreButton = ({onLoadMore}: {onLoadMore: ()=>void}) => {
    
    function onClickHandler(){
        onLoadMore();
    }

  return (
    <div className="load-more">
    <div className="load-more__spacer"></div>
    <button 
      className="load-more__button"
      onClick={onClickHandler}
    >
      Load More &#709;
    </button>
    <div className="load-more__spacer"></div>
  </div>
  )
}

export default LoadMoreButton