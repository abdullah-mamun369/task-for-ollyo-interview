"use client"

import Image from 'next/image'

const Product = (props) => {

    const { product, isChecked, handleSelected } = props;
    const { id, imageUrl } = product;

    console.log(imageUrl);

    console.log(id);
    return (
        <div className='group'>
            <div className='border rounded-lg relative overflow-hidden'>
                <Image className='rounded-lg' src={imageUrl} alt='ollyo_product' width={1500} height={1500}></Image>
                <div className='absolute h-full w-full bg-black/40 flex justify-end p-5 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                    <input checked={isChecked} onChange={handleSelected} className='form-checkbox h-6 w-6 rounded-full text-purple-600 bg-purple-600' type="checkbox" />
                </div>
            </div>
        </div>


    );
};

export default Product;