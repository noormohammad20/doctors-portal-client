import React from 'react'
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import Service from './Service'
import DentalTerms from './DentalTerms'
const Services = () => {
    const services = [
        {
            _id: 1,
            name: "Fluoride Treatment",
            description: 'Fluoride is a natural mineral that builds strong teeth and prevents cavities. It’s been an essential oral health treatment for decades. Fluoride supports healthy tooth enamel and fights the bacteria that harm teeth and gums. Tooth enamel is the outer protective layer of each tooth.',
            img: fluoride
        },
        {
            _id: 2,
            name: "Cavity Filling",
            description: 'Cavities are permanently damaged areas in the hard surface of your teeth that develop into tiny openings or holes. Cavities, also called tooth decay or caries, are caused by a combination of factors, including bacteria in your mouth, frequent snacking, sipping sugary drinks and not cleaning your teeth well.',
            img: cavity
        },
        {
            _id: 3,
            name: "Teeth Whitening",
            description: 'Everyone notices a bright, white, glowing smile. And everyone notices how confident you feel when you have that beautiful smile. That’s why we utilize long-lasting Teeth Whitening procedure — because we want you to glow with pride and confidence.',
            img: whitening
        },
    ]
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-primary text-xl font-bold uppercase'>Our Services</h3>
                <h2 className='text-4xl mb-4'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            <DentalTerms></DentalTerms>
        </div>
    )
}

export default Services