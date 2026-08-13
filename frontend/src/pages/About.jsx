import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      
      <div className='text-2xl text-center pt-8 border-t border-gray-200'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aspernatur quidem optio assumenda voluptates officiis commodi et labore aliquid laboriosam autem iste quis cumque, veritatis nesciunt unde error, vero aut.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum fugiat quisquam accusamus saepe, vero, omnis provident culpa esse dolorem voluptate expedita! Ratione consequatur reprehenderit reiciendis nihil aperiam ad deleniti libero!</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>lorem ipsum dolor sit amet consectetur adipisicing elit. Eum fugiat quisquam accusamus saepe, vero, omnis provident culpa esse dolorem voluptate expedita! Ratione consequatur reprehenderit reiciendis nihil aperiam ad deleniti libero!</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>lorem ipsum dolor sit amet consectetur adipisicing elit. Eum fugiat quisquam accusamus saepe, vero, omnis provident culpa esse dolorem voluptate expedita! Ratione consequatur reprehenderit reiciendis nihil aperiam ad deleniti libero!</p>
        </div>
        <div className='border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>lorem ipsum dolor sit amet consectetur adipisicing elit. Eum fugiat quisquam accusamus saepe, vero, omnis provident culpa esse dolorem voluptate expedita! Ratione consequatur reprehenderit reiciendis nihil aperiam ad deleniti libero!</p>
        </div>
        <div className='border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>lorem ipsum dolor sit amet consectetur adipisicing elit. Eum fugiat quisquam accusamus saepe, vero, omnis provident culpa esse dolorem voluptate expedita! Ratione consequatur reprehenderit reiciendis nihil aperiam ad deleniti libero!</p>
        </div>
      </div>

      <NewsletterBox />
      
    </div>
  )
}

export default About