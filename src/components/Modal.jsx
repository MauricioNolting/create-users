import { IconSquareRoundedXFilled } from "@tabler/icons-react"

const Modal = ({isShowModal, handleCloseModal, register, handleSubmit, submit, idCardToEdit, errors}) => {

  return (
    <section className={`absolute bg-[#ffffff9d] z-50 top-0 bottom-0 right-0 left-0 flex justify-center items-center px-3 transition-opacity duration-500  ${isShowModal ? "visible opacity-100" : "invisible opacity-0"}`}>
        
        <form onSubmit={handleSubmit(submit)} className="bg-[#3C3C3D]  p-3 rounded-2xl grid gap-3 sm:w-[min(450px,_100%)] h-[706px] w-[350px] overflow-hidden relative">
            <button onClick={handleCloseModal} type="button" className="absolute top-2 right-2 text-red-600 transition-all hover:text-red-500"> <IconSquareRoundedXFilled/> </button>
        <div className="grid m-2">
          <label className="text-start text-[#8EFF8B]" htmlFor="">Email</label>
          <input className='border-2 border-[#E5E5E5]  outline-none text-[#E5E5E5] p-1 rounded-md bg-[#3C3C3D] px-3 ' id='email' {...register("email", {
            required: {
                value: true,
                message: "Este campo es requerido",
            },
            maxLength: {
                value: 150,
                message: "Maximo 150 caracteres"
            }
            })} type="text" />
          {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
        </div>
        <div className="grid m-2">
          <label className="text-start text-[#8EFF8B]" htmlFor="password">Password</label>
          <input className='border-2 outline-none border-[#E5E5E5] text-[#E5E5E5] p-1 rounded-md bg-[#3C3C3D] px-3' id='password' {...register("password")} type="text" />
        </div>
        <div className="grid m-2">
          <label className="text-start text-[#8EFF8B]" htmlFor="first_name">First name</label>
          <input className='border-2 outline-none border-[#E5E5E5] text-[#E5E5E5] p-1 rounded-md bg-[#3C3C3D] px-3' id='first_name' {...register("first_name")} type="text" />
        </div>
        <div className="grid m-2">
          <label className="text-start text-[#8EFF8B]" htmlFor="last_name">Last name</label>
          <input className='border-2 outline-none border-[#E5E5E5]  text-[#E5E5E5] p-1 rounded-md bg-[#3C3C3D] px-3' id='last_name' {...register("last_name")} type="text" />
        </div>
        <div className="grid m-2">
          <label className="text-start text-[#8EFF8B]" htmlFor="birthday">Birthday</label>
          <input className='border-2  outline-none border-[#E5E5E5] text-[#E5E5E5] p-1 rounded-md bg-[#3C3C3D] px-3' id='birthday' {...register('birthday')} type="date" />
        </div>
        <div className="grid m-2">
          <label className="text-start text-[#8EFF8B]" htmlFor="image_url">Photo</label>
          <input className='border-2 outline-none border-[#E5E5E5] text-[#E5E5E5] p-1 rounded-md bg-[#3C3C3D] px-3' id='image_url' {...register('image_url')} type="text" />
        </div>

    <div className="grid justify-center gap-3">
        <button className="bg-[#CBFFDA] text[#302F2F] rounded-md hover:bg-[#98fcb4] transition-all w-52" type='submit'>
        {
               idCardToEdit ? "Guardad cambios"  : "Crear"
            }
        </button>
        <button onClick={handleCloseModal} type="button" className="text-red-600 transition-all hover:text-red-500"> Cancelar </button>

        </div>
      </form>

    </section>
  )
}
export default Modal