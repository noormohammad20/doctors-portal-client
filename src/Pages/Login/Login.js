import React, { useEffect } from 'react'
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import { useForm } from "react-hook-form"
import Loading from '../Shared/Loading'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import useToken from '../../hooks/useToken'
const Login = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth)
    const { register, formState: { errors }, handleSubmit } = useForm()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth)
    const navigate = useNavigate()
    const location = useLocation()

    const [token] = useToken(user || googleUser)

    let from = location.state?.from?.pathname || "/"

    useEffect(() => {

        if (token) {
            navigate(from, { replace: true })
        }

    }, [token, from, navigate])

    let signInError
    if (error || googleError) {
        signInError = <p className='text-red-500'><small>{error?.message || googleError?.message}</small></p>
    }

    if (loading || googleLoading) {
        return <Loading></Loading>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)

    }
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email" placeholder="Enter Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email Is Required!'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a Valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password" placeholder="Enter Your Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password Is Required!'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must Be Six Characters or Longer!'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        {signInError}
                        <input className='btn w-full max-w-xs' type="submit" value="Login" />
                    </form>
                    <p><small>New to Doctors Portal? <Link className='text-primary' to='/signup'>Create New Account</Link> </small></p>

                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline"
                    >Continue With Google</button>
                </div>
            </div>
        </div>

    )
}

export default Login