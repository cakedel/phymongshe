import React from 'react'
import CategorySlider from './CategorySlider'

const MainproductSlide = ({shopList, category}) => {
  return (
    <div>
        <CategorySlider shopList={shopList} category={category}/>
    </div>
  )
}

export default MainproductSlide