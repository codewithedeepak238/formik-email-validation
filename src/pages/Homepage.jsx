import React from 'react';
import laptop from "../assets/laptop.webp"
import { useFormik } from 'formik';

export const Homepage = () => {
    return (
        <div className='flex justify-center items-center h-[100vh] bg-[#efedee]'>
            <div className='w-[65%] h-[65vh] bg-white rounded-[10px] grid grid-cols-2 overflow-hidden'>
                <form className='px-[8%] py-[10%]'>
                    <h1 className='text-2xl'>Welcome!</h1>
                    <div className='my-[2%] border-[1px] flex flex-col p-[2%] rounded-[5px]'>
                        <label htmlFor="username" className='text-[12px] font-[500]'>NAME</label>
                        <input className='outline-none' type="text" id='username' name='username' placeholder='Name' autoComplete='off' />
                    </div>
                    <div className='my-[5%] border-[1px] flex flex-col p-[2%] rounded-[5px]'>
                        <label htmlFor="email" className='text-[12px] font-[500]'>EMAIL</label>
                        <input className='outline-none' type="email" id='email' name='email' placeholder='Email' autoComplete='off' />
                    </div>
                    <div className='my-[5%] border-[1px] flex flex-col p-[2%] rounded-[5px]'>
                        <label htmlFor="password" className='text-[12px] font-[500]'>PASSWORD</label>
                        <input className='outline-none' type="password" id='password' name='password' placeholder='Password' autoComplete='off' />
                    </div>
                    <div className='my-[5%] border-[1px] flex flex-col p-[2%] rounded-[5px]'>
                        <label htmlFor="confirm_password" className='text-[12px] font-[500]'> CONFIRM PASSWORD</label>
                        <input className='outline-none' type="password" id='confirm_password' name='confirm_password' placeholder='Confirm Password' autoComplete='off' />
                    </div>
                    <div className='flex justify-center'>
                        <button type='submit' className='bg-[#cccccc] text-white px-[5%] py-[2%] rounded-[5px]'>SIGN UP</button>
                    </div>
                </form>
                <div>
                    <img className='object-center object-cover h-[100%]' src={laptop} alt="laptop" />
                </div>
            </div>
        </div>
    )
};
