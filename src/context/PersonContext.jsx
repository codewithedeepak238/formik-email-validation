import { createContext, useState } from "react";
import { useContext } from "react";

const initialData = [];

const PersonContext = createContext(initialData);

export const PersonProvider = ({ children }) => {
    let [userdata, setUserdata] = useState([]);
    function addUser(name, dob, aadhar, mobile) {
        var userdob = new Date(dob);
        var month_diff = Date.now() - userdob.getTime();
        var age_dt = new Date(month_diff);    
        var year = age_dt.getUTCFullYear();
        var userage = Math.abs(year - 1970);

        let newuser = {
            id: Math.random()*2*Math.random()*10,
            username: name,
            d_o_b: dob,
            aadharnum: aadhar,
            moblienum: mobile,
            age: userage
        }
        console.log(newuser.id);
        setUserdata([...userdata, newuser]);
    }
    function deleteuser(id) {
        let newUsers = userdata.filter((user) => user.id !== id);
        setUserdata(newUsers);
    }
    function retrieve(aadharnum) {
        for (let i = 0; i < userdata.length; i++) {
            if (userdata[i].aadharnum === aadharnum) {
                return userdata[i];
            }
        }
        return "No user found";
    }
    let value = {
        userdata,
        addUser,
        deleteuser,
        retrieve
    }
    return (
        <PersonContext.Provider value={value}>
            {children}
        </PersonContext.Provider>
    )
}

export const usePerson = () => useContext(PersonContext);