import React from 'react'

export const CategoryCard = ({ item }) => {
  return (
    <div className='col-3 '>
      <div className='category__card'>
        <div className='category__card--indicator' style={{ backgroundColor: item.indicatorColor }} />
        <div className='category__card--info'>
          <h4 className='category__card--name'>{item.name}</h4>
          <p className='category__card--job'>{item.job}</p>
        </div>
      </div>
    </div>
  )
}
