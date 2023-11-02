import Image from 'next/image'
import logo from "./assets/ollyo.png"
import { BsFillCheckSquareFill } from 'react-icons/bs'
import image1 from "./assets/images/image-10.jpeg"

export default function Home() {
  return (
    <>
      <main>

        {/* Navbar start================================================= */}
        <nav className='border-b-2'>
          {/* <div className='h-16 flex items-center mx-auto w-full xl:w-10/12'>
            <h1 className='text-3xl font-bold'>Gallery</h1>
          </div> */}
          <div className='h-16 flex items-center mx-auto w-full xl:w-10/12 justify-between'>
            {/* <input className='form-checkbox h-6 w-6 rounded-full text-purple-600' type="checkbox" checked /> */}
            <h3 className='flex items-center text-xl font-bold'><BsFillCheckSquareFill className=' text-purple-700 mr-2' /> 2 Files Selected</h3>
            <button className='font-bold text-purple-700 hover:text-red-700'>Delete file</button>
          </div>
        </nav>

        {/* Drag&Drop box start================================================= */}

        <section className='mx-auto w-full xl:w-10/12'>

        </section>

      </main>
    </>
  )
}
