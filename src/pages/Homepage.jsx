import { useState } from "react"
import { usePerson } from "../context/PersonContext";
import { PersonCard } from "../components/PersonCard";

export const Homepage = () => {
    const [show, setShow] = useState(false);
    let { userdata, addUser } = usePerson();
    
    function handleAdd(e){
        e.preventDefault();
        let name = e.target.name.value;
        let dob = e.target.dob.value;
        let aadhar = e.target.aadhar.value;
        let mobile = e.target.mobile.value;
        setShow(false);
        addUser(name, dob, aadhar, mobile);
    }
    
    return (
        <div className="px-[6%]">
            <h2 className="py-[1%] mb-[1%] text-[22px] pl-[1%] font-[500] relative add-border">Add New Person</h2>

            <div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    {
                        userdata.length > 0 ? <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Date of birth
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Aadhar Number
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Mobile Number
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Age
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userdata.map((user)=>{return(
                                    <PersonCard user={user} key={user.id}/>
                                )})
                            }
                        </tbody>
                    </table>: ""
                    }
                    
                </div>
                <div className="mt-[1%]">
                    {
                        show && <form onSubmit={handleAdd}>
                            <h2 className="text-[22px] text-center mb-[2%]">Fill below form for New Entry</h2>
                            <div className="bg-gray-100 py-[2%] flex justify-between px-[2%] gap-[10px]">
                                <input className="p-[0.5%] border outline-none w-full" id="name" name="name" type="text" placeholder="Name" required />
                                <input className="p-[0.5%] border outline-none w-full" id="dob" name="dob" type="date" required />
                                <input className="p-[0.5%] border outline-none w-full" id="aadhar" name="aadhar" type="number" placeholder="Aadhar Number" required />
                                <input className="p-[0.5%] border outline-none w-full" id="mobile" name="mobile" type="number" placeholder="Mobile Number" required />
                                <input className="p-[0.5%] border outline-none w-full" name="age" id="age" type="number" placeholder="Age" required />
                                <button className="p-[0.5%] text-blue-500 underline" type="submit">Save</button>
                            </div>
                        </form>
                    }
                </div>
                <div>
                    <button onClick={() => setShow(true)} className="text-white bg-blue-600 px-[35px] py-[10px] mt-[2%]">Add</button>
                </div>

            </div>
        </div>
    )
}
