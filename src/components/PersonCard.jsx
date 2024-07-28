import { usePerson } from "../context/PersonContext"

export const PersonCard = ({user}) => {
    let {deleteuser} = usePerson();
    function handleDelete(user){
        deleteuser(user.id)
    }
    return (
        <>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {user.username}
                </th>
                <td className="px-6 py-4">
                    {user.d_o_b}
                </td>
                <td className="px-6 py-4">
                    {user.aadharnum}
                </td>
                <td className="px-6 py-4">
                    {user.moblienum}
                </td>
                <td className="px-6 py-4">
                    {user.age}
                </td>
                <td className="px-6 py-4">
                    <button onClick={()=>handleDelete(user)} type="submit" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</button>
                </td>
            </tr>
        </>
    )
}
