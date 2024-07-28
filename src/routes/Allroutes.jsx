import { Route, Routes } from "react-router-dom"
import { Homepage } from "../pages/Homepage"
import { Retrieve } from "../pages/Retrieve"

export const Allroutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/retrieve" element={<Retrieve/>}/>
        </Routes>
    </>
  )
}
