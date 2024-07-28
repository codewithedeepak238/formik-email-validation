import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <div>
            <div className="text-2xl bg-blue-600 text-white text-center py-[2%]">
                <h2>Deepak Saraswat Directory App</h2>
            </div>
            <div className="my-[2%] flex justify-evenly">
                <Link to="/" className="text-white bg-blue-600 px-[15px] py-[5px]">Add New Person</Link>
                <Link to="/retrieve" className="text-white bg-blue-600 px-[15px] py-[5px]">Retrieve Information</Link>
            </div>
        </div>
    )
}
