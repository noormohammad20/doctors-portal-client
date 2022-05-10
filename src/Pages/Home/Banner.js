import React from 'react'
import chair from '../../assets/images/chair.png'
import Button from '../Shared/Button'
const Banner = () => {
    return (
        <div class="hero min-h-screen bg-[url('/src/assets/images/bg.png')] bg-cover">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} class="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 class="text-7xl font-bold">Your New Smile Starts Hare</h1>
                    <p class="py-6">Specially designed for patients seeking dentistry abroad, we offer you bespoke expertise at a price that is unbelievably affordable. We have an elite team of carefully selected specialists from all fields of dentistry.</p>
                    <Button></Button>
                </div>
            </div>
        </div>
    )
}

export default Banner