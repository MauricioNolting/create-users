const User = ({user, handleDeleteUser, handleEditUsers}) => {
  return (
    <article className="my-5">
         <ul  className="my-4 text-red-500">
                <li>{user.email}</li>
                <li>{user.password} passsword</li>
                <li>{user.first_name}</li>
                <li>{user.last_name}</li>
                <li>{user.birthday}</li>
                <li>{user.photo}</li>
        </ul> 
        <div className="bg-red">
            <button onClick={() => handleEditUsers(user)}> 
                Editar
            </button>
            <button onClick={() => handleDeleteUser(user.id)}> 
                eliminar
            </button>
        </div> 
            
    </article>
  )
}
export default User