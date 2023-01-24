import React from 'react'
import { WelcomerBanner } from '../../components/WelcomerBanner/WelcomerBanner'
import { BrandBanner } from '../../components/BrandBanner/BrandBanner'
import { WorkingProcess } from '../../components/WorkingProcess/WorkingProcess'
import image3 from '../../assets/img3.png'

import gallery1 from '../../assets/558806a_hb_l_009 1.png'
import gallery2 from '../../assets/image 12.png'
import gallery3 from '../../assets/image 10.png'
import gallery4 from '../../assets/hair_styling 1.png'
import gallery5 from '../../assets/image 11.png'
import gallery6 from '../../assets/image 9.png'


import './about.scss'

export const About = () => {
  const advantages = [
    {
      name: 'Browse Hundrens Of Jobs',
      svg: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26.7044 14.6848L26.4457 14.6529C25.0884 14.4856 24.1177 13.2853 24.2358 11.9203C24.2753 11.463 23.9669 11.0529 23.5184 10.9666L21.5039 10.579C20.2535 10.3385 19.374 9.19718 19.4581 7.92427L19.7107 4.10273C19.7451 3.58141 19.936 3.09072 20.2625 2.68369L21.8535 0.700194C21.0682 0.386463 20.2371 0.17308 19.3752 0.0701616C18.9823 0.0232414 18.59 0 18.2002 0C16.0204 0 13.9169 0.726662 12.1771 2.09911C11.8184 2.3821 11.4854 2.68583 11.1772 3.00656C11.3093 3.06606 11.4373 3.12987 11.5602 3.19872C12.236 3.57704 12.7422 4.19176 12.9856 4.92969C13.2283 5.66532 13.1892 6.4605 12.8753 7.16884L12.4196 8.19704C14.3477 8.26819 16.15 9.05413 17.5214 10.4294C19.9959 12.911 20.408 16.6893 18.7584 19.6033C20.7531 19.4979 22.6639 18.7817 24.2661 17.5178C25.2836 16.715 26.0986 15.7486 26.7044 14.6848Z" fill="#FF7770" />
        <path d="M25.904 3.69026C25.182 2.76991 24.3223 2.00075 23.3423 1.39746L21.4872 3.71022C21.3721 3.85372 21.3048 4.02691 21.2926 4.21098L21.04 8.03246C21.0104 8.48127 21.3194 8.88353 21.7588 8.96802L23.7733 9.35563C25.0495 9.60112 25.9274 10.7645 25.8152 12.0616C25.7736 12.5429 26.1145 12.9659 26.5913 13.0246L27.404 13.1248C28.5642 9.94022 28.0108 6.3762 25.904 3.69026Z" fill="#FF7770" />
        <path d="M10.0856 4.30994C9.09802 5.79328 8.55767 7.48378 8.46191 9.19396C9.15139 8.79776 9.89801 8.514 10.679 8.35158C10.7086 8.26551 10.742 8.18003 10.7794 8.09544L11.4846 6.50414C11.794 5.80581 11.5289 5.00018 10.8679 4.63012C10.6354 4.50002 10.3736 4.39289 10.0856 4.30994Z" fill="#FF7770" />
        <path d="M7.62069 21.9877C7.31276 21.7599 7.01959 21.5075 6.74397 21.231C6.46792 20.9542 6.21757 20.6611 5.99286 20.355L0.240872 26.1233C-0.0796398 26.4448 -0.0796398 26.9677 0.240872 27.2892L0.71095 27.7606C0.864835 27.9149 1.06963 27.9999 1.28755 27.9999C1.50553 27.9999 1.71027 27.9149 1.86416 27.7606L7.62069 21.9877Z" fill="#FF7770" />
        <path d="M16.3593 20.0726C18.6919 17.7334 18.6919 13.9271 16.3593 11.5879C15.2301 10.4554 13.7289 9.83179 12.1323 9.83179C10.5357 9.83179 9.03448 10.4554 7.90522 11.5879C5.57261 13.9271 5.57261 17.7334 7.90522 20.0726C9.03442 21.2051 10.5357 21.8288 12.1323 21.8288C13.7289 21.8288 15.2301 21.2051 16.3593 20.0726Z" fill="#FF7770" />
      </svg>,
      color: 'rgba(240, 64, 55, 0.2)'
    },
    {
      name: 'Flexible hours',
      svg: <svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.875 0H1.125C0.46875 0 0 0.515625 0 1.125V1.875C0 2.53125 0.46875 3 1.125 3C1.125 7.26562 3.51562 10.875 6.75 12C3.51562 13.1719 1.125 16.7812 1.125 21C0.46875 21 0 21.5156 0 22.125V22.875C0 23.5312 0.46875 24 1.125 24H16.875C17.4844 24 18 23.5312 18 22.875V22.125C18 21.5156 17.4844 21 16.875 21C16.875 16.7812 14.4375 13.1719 11.2031 12C14.4375 10.875 16.875 7.26562 16.875 3C17.4844 3 18 2.53125 18 1.875V1.125C18 0.515625 17.4844 0 16.875 0ZM13.3125 18H4.64062C5.4375 15.8438 7.07812 14.25 9 14.25C10.875 14.25 12.5156 15.8438 13.3125 18ZM13.3125 6H4.64062C4.26562 5.10938 4.125 4.07812 4.125 3H13.875C13.875 4.07812 13.6875 5.10938 13.3125 6Z" fill="#413E65" />
      </svg>,
      color: 'rgba(65, 62, 101, 0.2)'
    },
    {
      name: 'Possibility To Work Remotly',
      svg: <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 7.5C12.0625 7.5 13.75 5.85938 13.75 3.75C13.75 1.6875 12.0625 0 10 0C7.89062 0 6.25 1.6875 6.25 3.75C6.25 5.85938 7.89062 7.5 10 7.5ZM7.46875 19.1719L8.6875 17.6719L5.78125 15.2812L3.625 17.9531C3.10938 18.6562 3.10938 19.5938 3.625 20.25L5.875 23.25C6.20312 23.7656 6.76562 24 7.375 24C7.75 24 8.125 23.9062 8.5 23.625C9.29688 23.0156 9.48438 21.8438 8.875 21L7.46875 19.1719ZM14.1719 15.2812L11.2656 17.6719L12.4844 19.1719L11.125 21C10.4688 21.8438 10.6562 23.0156 11.5 23.625C11.8281 23.9062 12.2031 24 12.625 24C13.1875 24 13.75 23.7656 14.125 23.25L16.375 20.25C16.8438 19.5938 16.8438 18.6562 16.3281 17.9531L14.1719 15.2812ZM18.625 6.79688C18.0625 5.95312 16.8906 5.76562 16.0469 6.375L14.125 7.6875C11.6406 9.42188 8.3125 9.42188 5.82812 7.6875L3.95312 6.375C3.0625 5.76562 1.9375 5.95312 1.32812 6.79688C0.71875 7.6875 0.953125 8.8125 1.79688 9.42188L3.67188 10.7812C4.46875 11.3438 5.35938 11.7656 6.25 12.0938V13.5H13.75V12.0938C14.6406 11.7656 15.4844 11.3438 16.2812 10.7812L18.2031 9.42188C19.0469 8.8125 19.2344 7.6875 18.625 6.79688Z" fill="#00BCD4" />
      </svg>,
      color: 'rgba(0, 188, 212, 0.2)'
    },
    {
      name: 'Work and travel',
      svg: <svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.75 7.5H2.25C0.984375 7.5 0 8.53125 0 9.75V20.25C0 21.5156 0.984375 22.5 2.25 22.5H3V23.25C3 23.6719 3.32812 24 3.75 24H5.25C5.625 24 6 23.6719 6 23.25V22.5H12V23.25C12 23.6719 12.3281 24 12.75 24H14.25C14.625 24 15 23.6719 15 23.25V22.5H15.75C16.9688 22.5 18 21.5156 18 20.25V9.75C18 8.53125 16.9688 7.5 15.75 7.5ZM15 17.625C15 17.8594 14.8125 18 14.625 18H3.375C3.14062 18 3 17.8594 3 17.625V16.875C3 16.6875 3.14062 16.5 3.375 16.5H14.625C14.8125 16.5 15 16.6875 15 16.875V17.625ZM15 13.125C15 13.3594 14.8125 13.5 14.625 13.5H3.375C3.14062 13.5 3 13.3594 3 13.125V12.375C3 12.1875 3.14062 12 3.375 12H14.625C14.8125 12 15 12.1875 15 12.375V13.125ZM6.75 2.25H11.25V6H13.5V2.25C13.5 1.03125 12.4688 0 11.25 0H6.75C5.48438 0 4.5 1.03125 4.5 2.25V6H6.75V2.25Z" fill="#9B51E0" />
      </svg>,
      color: 'rgba(155, 81, 224, 0.2)'
    },
    {
      name: 'Yearly bonuses',
      svg: <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 20C1.5 20.8438 2.15625 21.5 3 21.5H10.5V14H1.5V20ZM13.5 21.5H21C21.7969 21.5 22.5 20.8438 22.5 20V14H13.5V21.5ZM22.5 6.5H20.4844C20.8125 5.9375 21 5.32812 21 4.625C21 2.375 19.125 0.5 16.875 0.5C14.9062 0.5 13.6406 1.53125 12.0469 3.73438C10.4062 1.53125 9.14062 0.5 7.21875 0.5C4.92188 0.5 3.09375 2.375 3.09375 4.625C3.09375 5.32812 3.23438 5.9375 3.5625 6.5H1.5C0.65625 6.5 0 7.20312 0 8V11.75C0 12.1719 0.328125 12.5 0.75 12.5H23.25C23.625 12.5 24 12.1719 24 11.75V8C24 7.20312 23.2969 6.5 22.5 6.5ZM7.17188 6.5C6.14062 6.5 5.29688 5.70312 5.29688 4.625C5.29688 3.59375 6.14062 2.75 7.17188 2.75C8.10938 2.75 8.8125 2.9375 11.25 6.5H7.17188ZM16.875 6.5H12.7969C15.2344 2.9375 15.8906 2.75 16.875 2.75C17.9062 2.75 18.75 3.59375 18.75 4.625C18.75 5.70312 17.9062 6.5 16.875 6.5Z" fill="#F653A2" />
      </svg>,
      color: 'rgba(246, 83, 162, 0.2)'
    },
    {
      name: 'Smart salary',
      svg: <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.0469 10.9688L5.98438 9.46875C5.375 9.32812 5 8.76562 5 8.15625C5 7.40625 5.60938 6.75 6.35938 6.75H9.45312C10.0625 6.75 10.625 6.9375 11.0938 7.26562C11.375 7.45312 11.75 7.40625 11.9844 7.17188L13.625 5.57812C13.9531 5.25 13.9062 4.73438 13.5312 4.40625C12.4062 3.51562 10.9531 3.04688 9.5 3V0.75C9.5 0.375 9.125 0 8.75 0H7.25C6.82812 0 6.5 0.375 6.5 0.75V3H6.35938C3.35938 3 0.96875 5.57812 1.25 8.625C1.4375 10.7812 3.07812 12.5625 5.1875 13.1719L9.96875 14.5781C10.5781 14.7188 11 15.2812 11 15.8906C11 16.6406 10.3438 17.25 9.59375 17.25H6.5C5.9375 17.25 5.375 17.1094 4.90625 16.7812C4.57812 16.5938 4.20312 16.6406 3.96875 16.875L2.32812 18.4688C2 18.7969 2.04688 19.3125 2.42188 19.5938C3.59375 20.5312 5 21 6.5 21V23.25C6.5 23.6719 6.82812 24 7.25 24H8.75C9.125 24 9.5 23.6719 9.5 23.25V21C11.6562 20.9531 13.7188 19.6875 14.4219 17.625C15.4531 14.7188 13.7656 11.7656 11.0469 10.9688Z" fill="#81B214" />
      </svg>,
      color: 'rgba(129, 178, 20, 0.2)'
    }
  ]

  return (
    <>
      <WelcomerBanner
        img={image3}
        title={'About Us'}
        text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget odio cras at aliquam id. Et maecenas.'}
      />
      <BrandBanner />
      <div className='wrapper info__block'>
        <h2 className='who__we--are mt-5'>Who We Are</h2>
        <div className='row mt-5'>
          <div className='col'>
            <p className='who__we--are--title'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa, venenatis non sit neque.
              Dignissim etiam arcu quis sapien posuere ac facilisis turpis. Nulla orci amet, aenean donec.
              Neque turpis vehicula arcu interdum consequat, eu et.
              Morbi nullam mi hac aliquam. Dui, volutpat volutpat donec ut lectus tortor gravida amet id. Mauris.
            </p>
          </div>
          <div className='col'>
            <p className='who__we--are--title'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa, venenatis non sit neque.
              Dignissim etiam arcu quis sapien posuere ac facilisis turpis. Nulla orci amet, aenean donec.
              Neque turpis vehicula arcu interdum consequat, eu et.
              Morbi nullam mi hac aliquam. Dui, volutpat volutpat donec ut lectus tortor gravida amet id. Mauris.
            </p>
          </div>
        </div>
      </div>
      <div className='wrapper ' style={{ background: '#F9FAFB' }}>
        <div className='gallery__block'>
          <a href='#' className='gallery__link'>See some pictures of our users who found their dream job.</a>
          <div className='row'>
            <div className='col'>
              <div className='gallery__img position-relative'>
                <div className='bgDark' />
                <img src={gallery1} alt='' />
              </div>
            </div>
            <div className='col'>
              <div className='gallery__img position-relative'>
                <div className='bgDark' />
                <img src={gallery2} alt='' />
              </div>
              <div className='gallery__img mt-4 position-relative'>
                <div className='bgDark' />
                <img src={gallery3} alt='' />
              </div>
            </div>
            <div className='col'>
              <div className='gallery__img position-relative'>
                <div className='bgDark' />
                <img src={gallery4} alt='' />
              </div>
              <div className='gallery__img mt-4 position-relative'>
                <div className='bgDark' />
                <img src={gallery5} alt='' />
              </div>
            </div>
            <div className='col'>
              <div className='gallery__img position-relative'>
                <div className='bgDark' />
                <img src={gallery6} alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='wrapper '>
        <div className='row icon__badge'>
          {
            advantages.map(item => (
              <div className='col-4' key={item.name}>
                <div className='d-flex icon__block'>
                  <div className='w-25 dFlex'>
                    <div className='icon__indicator' style={{ background: item.color }}>
                      {item.svg}
                    </div>
                  </div>
                  <div className='icon__card--info'>
                    <h4 className='icon__card--title'>{item.name}</h4>
                    <p className='icon__card--text'>A team of experts passionate about product management</p>
                  </div>
                </div>
              </div>
            ))
          }


        </div>
      </div>
      <WorkingProcess />
      <div className='wrapper'>
        <div className='row statistic__block'>
          <div className='col-3 d-flex align-items-center'>
            <h2 className='statistic__number'>30k+</h2>
            <div className='ms-3'>
              <p className='statistic__info'>Active</p>
              <p className='statistic__info'>Users</p>
            </div>
          </div>
          <div className='col-3 d-flex align-items-center'>
            <h2 className='statistic__number'>20k+</h2>
            <div className='ms-3'>
              <p className='statistic__info'>Open Job</p>
              <p className='statistic__info'>Positions</p>
            </div>
          </div>
          <div className='col-3 d-flex align-items-center'>
            <h2 className='statistic__number'>5k</h2>
            <div className='ms-3'>
              <p className='statistic__info'>Popular</p>
              <p className='statistic__info'>Companies</p>
            </div>
          </div>
          <div className='col-3 d-flex align-items-center'>
            <h2 className='statistic__number'>10k+</h2>
            <div className='ms-3'>
              <p className='statistic__info'>Happy</p>
              <p className='statistic__info'>Clients</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
