import { IconSquareRoundedXFilled } from "@tabler/icons-react"

const Modal = ({isShowModal, handleCloseModal, register, handleSubmit, submit, idCardToEdit}) => {

  return (
    <section className={`absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center bg-black/30 px-3 transition-opacity duration-500  ${isShowModal ? "visible opacity-100" : "invisible opacity-0"}`}>
        
        <form onSubmit={handleSubmit(submit)} className="bg-white p-3 rounded-md grid gap-3 w-[min(270px,_100%)] overflow-hidden relative">
            <button onClick={handleCloseModal} type="button" className="absolute top-2 right-2 text-red-600 transition-all hover:text-red-500"> <IconSquareRoundedXFilled/> </button>
        <h2>
            {
               idCardToEdit ? "Editar usuario"  : "Crear usuario"
            }
        </h2>
        <div className="grid m-2">
          <label className="text-start" htmlFor="">Email</label>
          <input className='border-2 border-black outline-none p-1' id='email' {...register("email")} type="text" />
        </div>
        <div className="grid m-2">
          <label className="text-start" htmlFor="password">Password</label>
          <input className='border-2 border-black outline-none p-1' id='password' {...register("password")} type="text" />
        </div>
        <div className="grid m-2">
          <label className="text-start" htmlFor="first_name">First name</label>
          <input className='border-2 border-black outline-none p-1' id='first_name' {...register("first_name")} type="text" />
        </div>
        <div className="grid m-2">
          <label className="text-start" htmlFor="last_name">Last name</label>
          <input className='border-2 border-black outline-none p-1' id='last_name' {...register("last_name")} type="text" />
        </div>
        <div className="grid m-2">
          <label className="text-start" htmlFor="birthday">Birthday</label>
          <input className='border-2 border-black outline-none p-1' id='birthday' {...register('birthday')} type="date" />
        </div>
        <div className="grid m-2">
          <label className="text-start" htmlFor="image_url">Photo</label>
          <input className='border-2 border-black outline-none p-1' id='image_url' {...register('image_url')} type="text" />
        </div>
        <button className="border-2 bg-slate-200 p-2" type='submit'>
        {
               idCardToEdit ? "Guardad cambios"  : "Crear"
            }
        </button>
      </form>

    </section>
  )
}
export default Modal