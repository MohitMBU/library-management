import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Login() {

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
            <div className=''>
                  <dialog id="login" className="modal">
                        <div className="modal-box dark:bg-slate-900 dark:text-white">
                              <form  onSubmit={handleSubmit(onSubmit)} method="dialog">
                                    <Link to= '/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                              

                              <h3 className="font-bold text-lg dark:bg-slate-900 dark:text-white">Login</h3>
                              
                              {/* Email */}
                              <div className='mt-4 space-y-2 dark:bg-slate-900 dark:text-white'>
                                    <span>Email</span>
                                    <br />
                                    <input
                                          type="email"
                                          placeholder='Enter your Email'
                                          className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white'
                                          {...register("email", { required: true })}
                                    />
                                    <br />
                                    {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                              </div>

                              {/* Password */}
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
                                          <button
                                                type='button'
                                                onClick={togglePasswordVisibility}
                                                className='absolute right-3 top-1/2 transform -translate-y-1/2'
                                          >
                                                {showPassword ? '🙈' : '👁️'}
                                          </button>
                                          <br />
                                          {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                                    </div>
                              </div>
                            

                              {/* Button */}
                              <div className='flex justify-around mt-4'>
                                    <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Login</button>
                                    <p>Not registered?
                                          <Link 
                                                to='/Signup' 
                                                className='underline text-blue-500 cursor-pointer'>
                                                Signup
                                          </Link>
                                    </p>
                              </div>
                              </form>
                        </div>
                  </dialog>
            </div>
      )
}

export default Login;
