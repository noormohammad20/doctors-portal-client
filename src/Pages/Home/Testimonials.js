import React from 'react'
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review'
const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'winson herry',
            review: 'Dr  & staff welcomes you on the phone in the office and in the chair. They make you feel comfortable and confident in the service that you receive. They managed to keep a four year old calm and excited about the dentist. I cannot say enough positive things about this office',
            img: people1,
            location: 'london'
        },
        {
            _id: 2,
            name: 'linda gomez',
            review: 'She and her entire team are wonderful. I hadn’t been to the dentist in several years and they made me feel at ease and answered all of my questions. Thank you!',
            img: people2,
            location: 'newyork'
        },
        {
            _id: 3,
            name: 'william john',
            review: "I had avoided the dentist for a few years due to long appointments, painful cleanings, etc. and had a good amount of plaque buildup as a result. Dr. Harris was incredibly quick, the cleaning was painless, and I m super pleased with the outcome. My teeth feel and look super clean and healthy",
            img: people3,
            location: 'celifornia'
        }
    ]
    return (
        <section className='my-28'>
            <div className='flex justify-between sm:flex-grow-0'>
                <div >
                    <h4 className="text-xl text-primary font-bold">
                        Testimonials
                    </h4>
                    <h2 className='text-3xl'>What our Patients Say</h2>
                </div>
                <div>
                    <img src={quote} className='w-24 lg:w-48' alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    )
}

export default Testimonials