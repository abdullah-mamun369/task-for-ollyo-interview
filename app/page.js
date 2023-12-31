"use client"



import { BsFillCheckSquareFill } from 'react-icons/bs'
import { TbArrowsShuffle2 } from 'react-icons/tb'
import { BsCardImage } from 'react-icons/bs'
import { useEffect, useState } from 'react'
import Product from './Components/Product'
import { DragDropContext, Droppable } from "react-beautiful-dnd"
import Loading from './Components/Loading'

export default function Home() {

  const [selected, setSelected] = useState(0)
  const [shuffledData, setShuffledData] = useState([]);
  const [dragImageArray, setDragImageArray] = useState(shuffledData);
  const [selectedItems, setSelectedItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)



  //fetching the data=====================================================================================
  useEffect(() => {
    setIsLoading(true)
    fetch("images.json")
      .then(res => res.json())
      .then(data => shuffle(data))
    setIsLoading(false)
  }, [])


  //Dynamically calculate the checked images============================================================
  const handleSelected = (id, isChecked) => {
    setSelected(isChecked ? selected - 1 : selected + 1)
    if (!isChecked) {
      setSelectedItems([...selectedItems, id])
    } else {
      const data = selectedItems.reduce((acc, curr) => {
        if (curr !== id) {
          acc.push(curr);
        }
        return acc
      }, [])
      setSelectedItems(data)
      setDragImageArray(data)
    }
  }



  //Deleting functionality of selected images============================================================
  const handleDelete = () => {
    const newImageList = shuffledData.filter(item => !selectedItems.includes(item.id))
    setShuffledData(newImageList)
    setDragImageArray(newImageList)
    setSelected(0)
  }



  //Shuffle the images===================================================================================
  function shuffleImg(img) {
    const shuffleImg = [...img]

    for (let i = 0; i < shuffleImg.length; i++) {
      const j = Math.floor(Math.random() * shuffleImg.length);
      [shuffleImg[i], shuffleImg[j]] = [shuffleImg[j], shuffleImg[i]];
    }
    return shuffleImg;
  }


  const shuffle = (data) => {
    const newShuffledData = (data.length > 0) && shuffleImg(data);
    setShuffledData(newShuffledData);
    setDragImageArray(newShuffledData)
  };


  //On Drag End function (React Beautiful DND default implementation)=================================================
  const handleOnDragEnd = (result) => {
    console.log(result);

    // [shuffledData[result.destination.index], shuffledData[result.source.index]] = [shuffledData[result.source.index], shuffledData[result.destination.index]]

    if (!result.destination) {
      return;
    }

    const reorderedItems = Array.from(shuffledData);
    const [reorderedItem] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, reorderedItem);

    setShuffledData(reorderedItems);

  }

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center text-xl"><Loading /></div>
    )
  } else {
    return (
      <>

        {/* Navbar start================================================= */}
        <nav className='border-b-2 mb-5'>
          {
            selected === 0 ?
              <div className='h-16 flex items-center justify-between mx-auto w-full md:w-10/12 xl:w-8/12 p-5 md:p-0 '>
                <h1 className='text-3xl font-bold'>Gallery</h1>
                <button onClick={() => shuffle(shuffledData)} className='font-bold text-purple-700 hover:text-blue-700 mr-5 hidden md:flex items-center'> <TbArrowsShuffle2 className='mr-2 text-2xl' /> Shuffle Images</button>
              </div>
              :
              <div className='h-16 flex items-center mx-auto w-full md:w-10/12 xl:w-8/12 p-5 md:p-0 justify-between'>
                {/* <input className='form-checkbox h-6 w-6 rounded-full text-purple-600' type="checkbox" checked /> */}
                <h3 className='flex items-center text-xl font-bold'><BsFillCheckSquareFill className=' text-purple-700 mr-2' /> {selected} Files Selected</h3>
                <button onClick={() => shuffle(shuffledData)} className='font-bold text-purple-700 hover:text-blue-700 mr-5 hidden md:flex items-center'> <TbArrowsShuffle2 className='mr-2 text-2xl' /> Shuffle Images</button>
                <button onClick={handleDelete} className='font-bold text-red-700'>Delete file</button>

              </div>
          }
        </nav>

        {/* Drag&Drop box start================================================= */}
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <div>
            <Droppable droppableId="imagesss" type="group" direction="horizontal">

              {(provided) => (

                <div {...provided.droppableProps} ref={provided.innerRef} className='mx-auto grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3 md:w-10/12 xl:w-8/12 p-5 md:p-0'>
                  {shuffledData &&
                    shuffledData.map((product, index) => <Product
                      key={product.id}
                      product={product}
                      handleSelected={handleSelected}
                      index={index}
                      draggableId={product.id}
                    >
                    </Product>)
                  }
                  <button className='w-full h-full border-2 border-gray-400 border-dashed rounded-lg bg-gray-100 flex flex-col justify-center items-center'>
                    <BsCardImage className='text-4xl text-gray-500' />
                    <h1 className='text-2xl font-bold text-gray-500'>Add Images</h1>
                  </button>
                </div>

              )}
            </Droppable>
          </div>
        </DragDropContext>

      </>
    )
  }
}
