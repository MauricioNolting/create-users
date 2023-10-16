
import User from "./User"

/* eslint-disable react/prop-types */
const UsersList = ({users, handleEditUsers, handleDeleteUser}) => {
  return (
    <section className="grid gap-2 mt-5 min-h-screen">

    {
        users.map((user) => ( 
           <User key={user.id} user={user} handleEditUsers={handleEditUsers} handleDeleteUser={handleDeleteUser}/>
    ))
    }
    </section>
   
  )
}
export default UsersList