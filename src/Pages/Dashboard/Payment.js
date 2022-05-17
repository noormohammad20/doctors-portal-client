import { loadStripe } from '@stripe/stripe-js'
import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import Loading from '../Shared/Loading'
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js'
import CheckoutForm from './CheckoutForm'

const stripePromise = loadStripe('pk_test_51L0UwIL7AxqzKmmPbosdUCE6ovKhhw0MlVsYBshVWDcn9HTNGloXhZGn3cwwLs3XzLOIWMKhYhhdi0sdIbvnkWbu00xOlLaiMG')

const Payment = () => {
    const { id } = useParams()
    const url = `http://localhost:5000/booking/${id}`

    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>

            <div class="card w-50 max-w-md my-12 bg-base-100 shadow-xl">
                <div class="card-body">
                    <p className='text-success font-bold'>Hello {appointment.patientName}</p>
                    <h2 class="card-title">Please Pay For {appointment.treatment}</h2>
                    <p>Your Appointment <span className='text-orange-700'>{appointment.date}</span> at <span className='text-orange-700'>{appointment.slot}</span></p>
                    <p>Please Pay ${appointment.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                </div>
            </div>
        </div>
    )
}

export default Payment