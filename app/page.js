"use client"

import Image from 'next/image'
import logo from "./assets/ollyo.png"
import { BsFillCheckSquareFill } from 'react-icons/bs'
import image1 from "./assets/images/image-10.jpeg"
import { useEffect, useState } from 'react'
import Product from './Components/Product'

export default function Home() {

  const [originalImage, setOriginalImage] = useState([])
  const [selected, setSelected] = useState(0)
  const [isChecked, setIsChecked] = useState(false)




  const handleSelected = () => {
    setIsChecked(!isChecked);
    setSelected(isChecked ? selected - 1 : selected + 1)
  }


  useEffect(() => {

    fetch("images.json")
      .then(res => res.json())
      .then(data => setOriginalImage(data))

  }, [])


  // // const [shuffledData, setShuffledData] = useState(originalImage);



  // function shuffleArray(array) {
  //   const shuffledArray = [...array];
  //   for (let i = shuffledArray.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  //   }
  //   return shuffledArray;
  // }

  // const shuffle = () => {
  //   const newShuffledData = shuffleArray(originalImage);
  //   setShuffledData(newShuffledData);
  // };


  // console.log(originalImage);

  // const selectedImageIndex = originalImage[0];

  // // const selectedImageUrl = selectedImageIndex.imageUrl;

  // // console.log(selectedImageUrl);

  // console.log(originalImage);

  return (
    <>
      <main>

        {/* Navbar start================================================= */}
        <nav className='border-b-2 mb-5'>
          {/* <div className='h-16 flex items-center mx-auto w-full xl:w-10/12'>
            <h1 className='text-3xl font-bold'>Gallery</h1>
          </div> */}
          <div className='h-16 flex items-center mx-auto w-full xl:w-8/12 justify-between'>
            {/* <input className='form-checkbox h-6 w-6 rounded-full text-purple-600' type="checkbox" checked /> */}
            <h3 className='flex items-center text-xl font-bold'><BsFillCheckSquareFill className=' text-purple-700 mr-2' /> {selected} Files Selected</h3>
            <button className='font-bold text-purple-700 hover:text-red-700'>Delete file</button>
          </div>
        </nav>

        {/* Drag&Drop box start================================================= */}

        <section className='mx-auto w-full xl:w-8/12 grid grid-cols-5 gap-3'>
          <div className='col-span-2 row-span-2 border rounded-lg'>
            <div className='group'>
              <div className='border rounded-lg relative overflow-hidden'>
                <Image className='rounded-lg' src={image1} alt='ollyo_product' width={1500} height={1500}></Image>
                <div className='absolute h-full w-full bg-black/40 flex justify-end p-5 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                  <input checked={isChecked} onChange={handleSelected} className='form-checkbox h-6 w-6 rounded-full text-purple-600 bg-purple-600' type="checkbox" />
                </div>
              </div>
            </div>
          </div>
          {originalImage &&
            originalImage.map(product => <Product
              key={product.id}
              product={product}
              isChecked={isChecked}
              handleSelected={handleSelected}
            >
            </Product>)
          }
        </section>

      </main>
    </>
  )
}
