import User from "./User"

/* eslint-disable react/prop-types */
const UsersList = ({users, handleEditUsers, handleDeleteUser}) => {
  return (
    <section className="grid grid-cols-[repeat(auto-fit,_270px)] max-w-[1000px] gap-5 justify-center mx-auto">

    {
        users.map((user) => ( 
           <User key={user.id} user={user} handleEditUsers={handleEditUsers} handleDeleteUser={handleDeleteUser}/>
    ))
    }
    </section>
   
  )
}
export default UsersList