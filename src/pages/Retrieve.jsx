import { useState } from "react";
import { usePerson } from "../context/PersonContext"

export const Retrieve = () => {
    let [user, setUser] = useState({});
    const {retrieve} = usePerson();
    function handleSubmit(e){
        e.preventDefault();
        let myuser = retrieve(e.target.aadhar.value);
        setUser(myuser);
        console.log(myuser);
    }
    return (
        <div className="px-[6%]">
            <h2 className="py-[1%] mb-[1%] text-[22px] pl-[1%] font-[500] relative add-border">Add Retrieve Information</h2>
            <div>
                <form onSubmit={handleSubmit} className='flex gap-[10px]'>
                    <input className='px-[1%] outline-none w-[30%] border-[1px]' placeholder="Enter Aadhar No." type="number" id='aadhar' name='aadhar' required/>
                    <button className='bg-blue-500 text-white px-[2%] py-[0.5%]' type='submit'>Find</button>
                </form>
            </div>
            <div className='mt-[5%]'>
                {
                    user && <div>
                        <p>Name: {user.username}</p>
                        <p>DOB: {user.d_o_b}</p>
                        <p>Aadhar: {user.aadharnum}</p>
                        <p>Moblie: {user.moblienum}</p>
                        <p>Age: {user.age}</p>
                    </div>
                }
            </div>
        </div>
    )
}
