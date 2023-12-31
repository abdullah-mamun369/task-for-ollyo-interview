"use client"

import Image from 'next/image'
import { useState } from 'react';
import { Draggable } from "react-beautiful-dnd"

const Product = (props) => {

    const { product, handleSelected, index, draggableId } = props;
    const { id, imageUrl } = product;

    const [isChecked, setIsChecked] = useState(false)

    // console.log(draggableId);

    // console.log(index);

    // console.log(imageUrl);

    // console.log(id);
    if (index === 0) {
        return (
            <div className='col-span-2 row-span-2 border rounded-lg'>
                <Draggable draggableId={draggableId} index={index}>
                    {
                        (provided) => (
                            <div className='col-span-2 row-span-2 border rounded-lg' {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
                                <div className='group'>
                                    <div className='border rounded-lg relative overflow-hidden'>
                                        <Image className='rounded-lg' src={imageUrl} alt='ollyo_product' width={500} height={500}></Image>
                                        <div
                                            className=
                                            {`absolute h-full w-full ${(isChecked === false) ? 'bg-black/60 -bottom-10 opacity-0' : 'bg-black/20 bottom-0 opacity-100'} flex justify-end p-5 group-hover:bottom-0  group-hover:opacity-100 transition-all duration-300`}>
                                            <input onChange={() => {
                                                setIsChecked(!isChecked);
                                                handleSelected(id, isChecked);
                                            }} className='form-checkbox h-6 w-6 rounded-full text-purple-600 bg-purple-600' type="checkbox" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                    }
                </Draggable>
            </div>
        )
    } else {
        return (
            <div className='col-span-1 border rounded-lg'>
                <Draggable draggableId={draggableId} index={index}>
                    {
                        (provided) => (
                            <div className='group' {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                <div className='border rounded-lg relative overflow-hidden'>
                                    <Image className='rounded-lg' src={imageUrl} alt='ollyo_product' width={500} height={500}></Image>
                                    <div
                                        className=
                                        {`absolute h-full w-full ${(isChecked === false) ? 'bg-black/60 -bottom-10 opacity-0' : 'bg-black/20 bottom-0 opacity-100'} flex justify-end p-5 group-hover:bottom-0  group-hover:opacity-100 transition-all duration-300`}>
                                        <input onChange={() => {
                                            setIsChecked(!isChecked);
                                            handleSelected(id, isChecked);
                                        }} className='form-checkbox h-6 w-6 rounded-full text-purple-600 bg-purple-600' type="checkbox" />
                                    </div>
                                </div>
                            </div>

                        )
                    }
                </Draggable>

            </div>


        );
    }
};

export default Product;