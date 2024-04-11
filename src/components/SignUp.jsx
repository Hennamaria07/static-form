import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const passwordCheck = watch("password");

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

    function togglePasswordVisibility() {
        setIsPasswordVisible((prevState) => !prevState);
    }

    const toggleConfirmPasswordVisibility = () => {
        setIsConfirmPasswordVisible((prevState) => !prevState);
    }
  return (
    <>
    <main className='w-[100vw] h-[100vh] bg-img'>
    <section className='grid place-content-center h-full'>
    <form className='grid gap-5 py-10 px-5 rounded-lg sm:w-[50vw] lg:w-[40vw] glass overflow-x-hidden ' onSubmit={handleSubmit(data => console.log(`Form submitted successfully---> ${JSON.stringify(data)}`))}>
    <div className='text-center pb-5'>
            <h2 className='text-4xl font-medium'>Sing up to Exclusive</h2>
            <p className='text-sm' >Enter your details below</p>
        </div>
            <div>
                <label className="input input-bordered flex items-center gap-2">
                    Name
                    <input
                        type="text"
                        name='name'
                        className="grow"
                        placeholder="Daisy"
                        {...register('name', {
                            pattern: {
                                value: /^[a-zA-Z]{5,}(\s[a-zA-Z]+)*$/,
                                message: "Name should contain minimum 5 characters"
                            },
                            required: "Name is required",
                            validate: (fieldValue) => fieldValue !== ""
                        })} />
                </label>
                <p className='text-red-500'>{errors.fullName?.message}</p>
            </div>
            <div>
                <label className="input input-bordered flex items-center gap-2">
                    Email
                    <input
                        type="text"
                        className="grow"
                        placeholder="daisy@site.com"
                        name='email'
                        {...register('email',
                            {
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                    message: "Invalid email format"
                                },
                                required: "Email is required",
                                validate: (fieldValue) => fieldValue !== ""
                            }
                        )} />
                </label>
                <p className='text-red-500'>{errors.email?.message}</p>
            </div>
            <div>
                <label className="input input-bordered flex items-center gap-2">
                    Phone
                    <input
                        type="number"
                        className="grow"
                        placeholder="7510454663"
                        name='phone'
                        {...register('phone',
                            {
                                pattern: {
                                    value: /^(?:(?:\+|0{0,2})91(\s*[-]\s*)?|[0]?)?[6789]\d{9}$/,
                                    message: "Invalid phone number"
                                },
                                required: "Phone Number is required",
                                validate: (fieldValue) => fieldValue !== ""
                            })} />
                </label>
                <p className='text-red-500'>{errors.phone?.message}</p>
            </div>
            <div>
                <label className="input input-bordered flex items-center gap-2">
                    Password
                    <input
                        type={isPasswordVisible ? "text" : "password"}
                        className="grow"
                        name='password'
                        {...register('password',
                            {
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                    message: "Password must be at least 8 characters and include at least one lowercase letter, one uppercase letter, one digit, and one special character"
                                },
                                required: "Password is required",
                                validate: (fieldValue) => fieldValue !== ""
                            })} />
                    <div onClick={togglePasswordVisibility} className="mt-3 mr-4 cursor-pointer">
                        {isPasswordVisible ? (
                            <span className="material-symbols-outlined">visibility</span>
                        ) : (
                            <span className="material-symbols-outlined">visibility_off</span>
                        )}
                    </div>
                </label>
                <p className='text-red-500'>{errors.password?.message}</p>
            </div>
            <div>
                <label className="input input-bordered flex items-center gap-2">
                    Confirm Password
                    <input
                        type={isConfirmPasswordVisible ? "text" : "password"}
                        className="grow" name='confirmPassword'
                        {...register('confirmPassword', {
                            required: "Please provide a correct password",
                            validate: (fieldValue) => fieldValue === passwordCheck || "Passwords do not match"
                        })} />
                    <div onClick={toggleConfirmPasswordVisibility} className="mt-3 mr-4 cursor-pointer">
                        {isConfirmPasswordVisible ? (
                            <span className="material-symbols-outlined">visibility</span>
                        ) : (
                            <span className="material-symbols-outlined">visibility_off</span>
                        )}
                    </div>
                </label>
                <p className='text-red-500'>{errors.confirmPassword?.message}</p>
            </div>
            <div className='flex justify-between py-2 gap-5'>
                <p>Already Have an Account?<Link className='ps-2 text-primary' to={'/login'}>Login</Link></p>
            </div>
            <div>
                <button className="btn btn-accent w-full">Sign Up</button>
            </div>
        </form>
    </section>
    </main>
    </>
  )
}

export default SignUp