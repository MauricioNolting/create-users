
import User from "./User"

/* eslint-disable react/prop-types */
const UsersList = ({users, handleEditUsers, confirmDelete}) => {
  return (
    <section className="grid gap-2 mt-5 min-h-screen">

    {
        users.map((user) => ( 
           <User key={user.id} user={user} handleEditUsers={handleEditUsers}  confirmDelete={confirmDelete}/>
    ))
    }
    </section>
   
  )
}
export default UsersList