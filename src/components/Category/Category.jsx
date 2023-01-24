import React from 'react'
import { CategoryCard } from './CategoryCard/CategoryCard'
import './category.scss'

const category = [
  { name: 'Hotel', job: 43, indicatorColor: '#20BFA9' },
  { name: 'Restaurants', job: 52, indicatorColor: '#F2994A' },
  { name: 'Beauty Salons', job: 66, indicatorColor: '#2D9CDB' },
  { name: 'Trade Centers', job: 21, indicatorColor: '#BB6BD9' },
  { name: 'Real Estate', job: 44, indicatorColor: '#828282' },
  { name: 'Sports Coaches', job: 58, indicatorColor: '#BB6BD9' },
  { name: 'Babysitting', job: 34, indicatorColor: '#EB5757' },
  { name: 'Cleaning', job: 37, indicatorColor: '#F2C94C' },
]

export const Category = () => {
  return (
    <div className='wrapper'>
      <div className='row category '>
        <div className='col-12'>
          <div className='row category__header'>
            <div className='col'>
              <h1 className='category__header--title'>Explore Jobs by Category</h1>
            </div>
            <div className='col'>
              <p className='category__header--text'>
                Get the most exciting jobs from the best cities of
                Europe and UAE and grow your career fast with others.
              </p>
            </div>
          </div>
        </div>
        <div className='col-12'>
          <div className='row category__content'>
            {
              category.map(item => (
                <CategoryCard item={item} key={item.name} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
