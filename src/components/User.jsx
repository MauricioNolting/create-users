import { IconPencil, IconTrashXFilled } from "@tabler/icons-react"

const User = ({user, handleEditUsers, confirmDelete}) => {



  return (
    // <article className="w-[503px] h-[161px]">
    //      <ul  className="my-4 text-red-500 rounded-lg border-[2px] bg-[#D3D3D3]">
    //             <li>{user.email}</li>
    //             <li>{user.password} passsword</li>
    //             <li>{user.first_name}</li>
    //             <li>{user.last_name}</li>
    //             <li>{user.birthday}</li>
    //             <li>{user.photo}</li>
    //     </ul> 
    //     <div className="bg-red">
    //         <button onClick={() => handleEditUsers(user)}> 
    //             Editar
    //         </button>
    //         <button onClick={() => handleDeleteUser(user.id)}> 
    //             eliminar
    //         </button>
    //     </div> 
            
    // </article>
<article className="z-10 mt-4">
    <div className="max-w-[200px] max-h-[200px] overflow-hidden rounded-full mx-auto relative bottom-1 border-2">
    <img className="rounded-full" src={user.image_url} alt="" />
    </div>
<div className="w-[350px] h-[161px] sm:w-[503px] 
text-red-500 rounded-lg border-[2px] bg-[#a3a3a3]">
   
    
    <div className="bg-red top-2 right-2 flex gap-2 justify-end">

    <h2 className="w-[400px] text-xl p-3 text-[#0F0F2D]">
{user.first_name}  {user.last_name}</h2>
   <button onClick={() => handleEditUsers(user.id)} className="w-9 h-9 bg-white rounded-md mt-2 flex justify-center items-center transition-all duration-200 text-black hover:bg-slate-300 hover:text-white"> 
       <IconPencil className=""/>

   </button>
   <button onClick={() => confirmDelete(user.id)} className="w-9 h-9 rounded-md flex justify-center transition-all duration-200 items-center mt-2 mr-2 text-black bg-red-500 hover:bg-red-600"> 
       <IconTrashXFilled className=""/>
   </button>
</div> 

<hr className="sm:w-[400px] w-[250px] border-[2px] border-[#E5E5E5]"/>
<ul className="">
       <div className="grid sm:grid-cols-[1fr,180px] grid-cols-[1fr,_120px] pt-4 text-sm gap-1 pl-2">
           <li className="text-[#D3D3D3]">Email: </li>
           <li className="text-[#D3D3D3]">Birthday:</li>
           <li className="text-white">{user.email}</li>
           <li className="text-white">{user.birthday}</li>
       </div>
</ul> 
</div>
</article>
  )
}
export default User