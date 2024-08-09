import React from 'react';
import laptop from "../assets/laptop.webp"
import { useFormik } from 'formik';
import { signUpSchema } from '../schemas';

const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
};

export const Homepage = () => {

    const { values, errors, touched, handleBlur, handleChange, handleSubmit, isValidating } =
        useFormik({
            initialValues,
            validationSchema: signUpSchema,
            onSubmit: (values, action) => {
                console.log(values);
                action.resetForm();
            },
        });
        console.log(errors);

    return (
        <div className='flex justify-center items-center h-[100vh] bg-[#efedee]'>
            <div className='w-[65%] h-min-[65vh] bg-white rounded-[10px] grid grid-cols-2 overflow-hidden'>
                <form onSubmit={handleSubmit} className='px-[8%] py-[10%]'>
                    <h1 className='text-2xl'>Welcome!</h1>
                    <div className='my-[2%] border-[1px] flex flex-col p-[2%] rounded-[5px]'>
                        <label htmlFor="name" className='text-[12px] font-[500]'>NAME</label>
                        <input value={values.name} onChange={handleChange} onBlur={handleBlur} className='outline-none' type="text" id='name' name='name' placeholder='Name' autoComplete='off' />
                        {errors.name && touched.name ? (<p className="form-error">{errors.name}</p>) : null}
                    </div>
                    <div className='my-[5%] border-[1px] flex flex-col p-[2%] rounded-[5px]'>
                        <label htmlFor="email" className='text-[12px] font-[500]'>EMAIL</label>
                        <input value={values.email} onChange={handleChange} onBlur={handleBlur} className='outline-none' type="email" id='email' name='email' placeholder='Email' autoComplete='off' />
                        {errors.email && touched.email ? (<p className="form-error">{errors.email}</p>) : null}
                    </div>
                    <div className='my-[5%] border-[1px] flex flex-col p-[2%] rounded-[5px]'>
                        <label htmlFor="password" className='text-[12px] font-[500]'>PASSWORD</label>
                        <input value={values.password} onChange={handleChange} onBlur={handleBlur} className='outline-none' type="password" id='password' name='password' placeholder='Password' autoComplete='off' />
                        {errors.password && touched.password ? (<p className="form-error">{errors.password}</p>) : null}
                    </div>
                    <div className='my-[5%] border-[1px] flex flex-col p-[2%] rounded-[5px]'>
                        <label htmlFor="confirm_password" className='text-[12px] font-[500]'> CONFIRM PASSWORD</label>
                        <input value={values.confirm_password} onChange={handleChange} onBlur={handleBlur} className='outline-none' type="password" id='confirm_password' name='confirm_password' placeholder='Confirm Password' autoComplete='off' />
                        {errors.confirm_password && touched.confirm_password ? (<p className="form-error">{errors.confirm_password}</p>) : null}
                    </div>
                    <div className='flex justify-center'>
                        {
                            values.name && values.email && values.passwprd && values.confirm_password && Object.keys(errors).length===0 ? <button type='submit' className='bg-[#666666] text-white px-[5%] py-[2%] rounded-[5px]'>SIGN UP</button>:<button type='submit' className='bg-[#cccccc] text-white px-[5%] py-[2%] rounded-[5px]' disabled>SIGN UP</button>
                        }
                        
                    </div>
                </form>
                <div>
                    <img className='object-center object-cover h-[100%]' src={laptop} alt="laptop" />
                </div>
            </div>
        </div>
    )
};
