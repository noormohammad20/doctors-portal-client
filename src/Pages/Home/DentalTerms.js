import React from 'react'
import treatment from '../../assets/images/treatment.png'
import Button from '../Shared/Button'
const DentalTerms = () => {
    return (
        <div className="hero min-h-screen my-28">
            <div className="hero-content flex-col lg:flex-row">
                <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
                <div className=' sm:pl-20'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care,On Your Terms</h1>
                    <p className="py-6">Exceptional Dental Care is a cheerful dental practice, offering high-quality dental care in the heart of Spearwood. We are wheelchair-accessible, caring and affordable. We use new technologies for the comfort of our patients. We have a Digital x-ray and OPG machine and an Intraoral camera is used for patient's understanding of their oral condition.

                        At our dental clinic in Spearwood, we strive to provide our patients with an exceptional experience at the dentist.

                        We offer a wide range of General Dentistry services for the whole family, providing gentle dentistry for all ages. It is convenient when everything is offered under the same roof.</p>
                    <Button>Get Started</Button>
                </div>
            </div>
        </div>
    )
}

export default DentalTerms