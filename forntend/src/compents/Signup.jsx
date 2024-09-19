import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form";


function Signup() {
      const [showPassword, setShowPassword] = useState(false);

      const togglePasswordVisibility = () => {
            setShowPassword(!showPassword);
      };
      const {
            register,
            handleSubmit,
            formState: { errors },
      } = useForm();

      const onSubmit = (data) => console.log(data)
      return (
            <>
                  <div className='flex h-screen border shadow items-center justify-center '>
                        <div id="my_modal_3" className='w-[600px]'>

                              <div className="modal-box dark:bg-slate-900 dark:text-white">
                                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                                          {/* if there is a button in form, it will close the modal */}
                                          <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                                          <h3 className="font-bold text-lg">Signup</h3>
                                          {/* Email  */}
                                          <div className='mt-4 space-y-2'>
                                                <span>Name</span>
                                                <br />
                                                <input type="text" placeholder='Enter your FullName' className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white' {...register("name", { required: true })} />
                                                <br />
                                                {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
                                          </div>
                                          <div className='mt-4 space-y-2'>
                                                <span>Email</span>
                                                <br />
                                                <input type="Email" placeholder='Enter your Email' className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white '{...register("email", { required: true })} />
                                                <br />
                                                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                                          </div>
                                          {/* password */}
                                          <div className='mt-4 space-y-2 dark:bg-slate-900 dark:text-white'>
                                                <span>Password</span>
                                                <br />
                                                <div className='relative'>
                                                      <input
                                                            type={showPassword ? 'text' : 'password'}
                                                            placeholder='Enter your password'
                                                            className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white'
                                                            {...register("password", { required: true })}
                                                      />
                                                      <br />
                                                      {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                                                      <button
                                                            type='button'
                                                            onClick={togglePasswordVisibility}
                                                            className='absolute  top-1/2 transform -translate-y-1/2'
                                                      >
                                                            {showPassword ? '🙈' : '👁️'}
                                                      </button>
                                                </div>
                                          </div>
                                          {/* Button  */}
                                          <div className='flex justify-around mt-4 '>
                                                <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Signup</button>
                                                <p className='text-xl'>already have Account?{" "}
                                                      <button
                                                            className='underline text-blue-500 cursor-pointer '
                                                            onClick={() => {
                                                                  document.getElementById('login').showModal()
                                                            }}
                                                      >
                                                            Login
                                                      </button>{" "}
                                                      <Login />
                                                </p>
                                          </div>
                                    </form>
                              </div>
                        </div>
                  </div>
            </>
      )
}

export default Signup
