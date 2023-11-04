"use client"

import Image from 'next/image'
import logo from "./assets/ollyo.png"
import { BsFillCheckSquareFill } from 'react-icons/bs'
import image1 from "./assets/images/image-10.jpeg"
import { useEffect, useState } from 'react'
import Product from './Components/Product'

export default function Home() {

  const [selected, setSelected] = useState(0)
  const [isChecked, setIsChecked] = useState(false)
  const [shuffledData, setShuffledData] = useState([]);

  const handleSelected = (id, isChecked) => {
    setSelected(isChecked ? selected - 1 : selected + 1)
  }


  useEffect(() => {
    fetch("images.json")
      .then(res => res.json())
      .then(data => shuffle(data))
  }, [])

  //   function shuffleImg(img) {
  //     for (let i = 0; i < img.length; i++) {
  //         const j = Math.floor(Math.random() * img.length);
  //         [img[i], img[j]] = [img[j], img[i]];
  //     }
  // }


  function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }

  const shuffle = (data) => {
    const newShuffledData = (data.length > 0) && shuffleArray(data);
    setShuffledData(newShuffledData);
  };



  // console.log(shuffledData);



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
            <div>
              <button onClick={() => shuffle(shuffledData)} className='font-bold text-purple-700 hover:text-red-700 mr-5'>Shuffle Images</button>
              <button className='font-bold text-purple-700 hover:text-red-700'>Delete file</button>
            </div>
          </div>
        </nav>

        {/* Drag&Drop box start================================================= */}

        <section className='mx-auto w-full xl:w-8/12 grid grid-cols-5 gap-3'>

          {shuffledData &&
            shuffledData.map((product, index) => <Product
              key={product.id}
              product={product}
              handleSelected={handleSelected}
              index={index}
              isChecked={isChecked}
              setIsChecked={setIsChecked}
            >
            </Product>)
          }
        </section>

      </main>
    </>
  )
}
