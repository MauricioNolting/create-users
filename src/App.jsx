 import axios from 'axios'
 import { EMPTY_FORM_VALUES, URL_BASE } from './consts/const'
 import { useEffect, useState } from 'react'
import './App.css'
import Modal from './components/Modal'
import { useForm } from 'react-hook-form'
import UsersList from './components/UsersList'

function App() {

  const [isShowModal, setIsShowModal] = useState(false)

  const [users, setUsers] = useState([])

  const [idCardToEdit, setIdCardToEdit] = useState(null)
  
  const {handleSubmit, register, reset, formState: {errors}} = useForm() 


  const submit = (data) => {
    if (idCardToEdit) {
      updateUser(data)
    } else {
      createUser(data)
    }
    
     
  }

  const handleCloseModal = () => {
    setIsShowModal(false)
    reset(EMPTY_FORM_VALUES)
    setIdCardToEdit(null)
  }
  const hanldeOpenModal = () => {
    setIsShowModal(true)
  }

  const updateUser = (data ) => {
    axios
    .put(URL_BASE + `/users/${idCardToEdit}/`, data)
    .then(() => {
        createAllUsers()
        handleCloseModal()
    })
    .catch((err) => console.log(err))
  }

  const createUser = (data) => {
    axios
    .post(URL_BASE + "/users/", data)
    .then(() => {
      createAllUsers()
      handleCloseModal()
      reset(EMPTY_FORM_VALUES)
      console.log(data)
    })
    .catch((err) => console.log(err))
  }

   const createAllUsers = () => {
     axios
     .get(URL_BASE + "/users/")
     .then(({data}) => setUsers(data))
     .catch((err) => console.log(err))
   }
   console.log(users)


   // Eliminar el usuario
   const handleDeleteUser = (id) => {
      axios.delete(URL_BASE + `/users/${id}/`)
      .then(() => createAllUsers())
      .catch((err) => console.log(err))
   }


   //Para que abra el modal y editar los datos del usuario seleccionado
   const handleEditUsers = (user) => {
    hanldeOpenModal()
    reset(user)
    setIdCardToEdit(user.id)
  }


   useEffect(() => {
    createAllUsers()
   }, [])


  return (
    <main className='min-h-screen bg-slate-900 grid justify-center'>
      <header className='mb-0'>
        <div className='flex flex-col items-center gap-40 mb-0'>
        <span className='text-[#8EFF8B] top-14 w-300px mx-auto mt-8'>List of user</span>
        <button className='bg-[#CBFFDA] hover:bg-[#a4ffbe]  text-[#302F2F] top-56 w-[200px] rounded-md sm:w-[345px] h-[42px]' onClick={hanldeOpenModal}>Crear usuario</button>
        </div>
      </header>
      <Modal isShowModal={isShowModal} handleCloseModal={handleCloseModal} handleSubmit={handleSubmit} register={register} submit={submit} idCardToEdit={idCardToEdit} errors={errors}/>
      <UsersList users={users} handleEditUsers={handleEditUsers} handleDeleteUser={handleDeleteUser}/>
    </main>
  )
}

export default App
