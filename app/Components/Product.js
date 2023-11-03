"use client"

import Image from 'next/image'

const Product = (props) => {



    const { product } = props;
    const { id, imageUrl } = product;

    console.log(imageUrl);

    console.log(id);
    return (
        <div className='border rounded-lg'>
            <Image className='rounded-lg' src={"https://ollyo-task-free-host.netlify.app/image-11.jpeg"} alt='ollyo_product' width={1500} height={1500}></Image>
        </div>
    );
};

export default Product;