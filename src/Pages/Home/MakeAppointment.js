import React from 'react'
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import Button from '../Shared/Button'

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}
            className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-130px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary font-bold py-3'>Appointment</h3>
                <h2 className='text-3xl text-white pb-3'>Make an Appointment Today</h2>
                <p className='text-white pb-3'>
                    TO REQUEST FOR AN ONLINE APPOINTMENT, PLEASE COMPLETE THE FORM BELOW AND CLICK THE “REQUEST” BUTTON.
                    Your appointment will be confirmed through return e-mail or telephonic communication. Please be informed that this submission of “Request for Appointment” will only be workable after confirmation by our Appointment Centre. Confirmation of an appointment depends upon the availability of doctors at your preferred date and time.
                    TO MAKE AN APPOINTMENT VIA PHONE, OR FOR FURTHER INFORMATION REGARDING YOUR APPOINTMENT, PLEASE CALL OUR APPOINTMENT CENTRE AT THE FOLLOWING NUMBERS Phone: 01719555207 , 01533654259</p>
                <Button>Get Started</Button>
            </div>
        </section>
    )
}

export default MakeAppointment