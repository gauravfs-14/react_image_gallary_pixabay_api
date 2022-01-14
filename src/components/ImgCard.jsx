import React from 'react'

function ImgCard({image}) {
    
    return (
        <>
            <div className='w-full bg-slate-200'>
                <a href={image.webformatURL} target="new">
                    <img src={image.webformatURL} alt="" className='w-full h-auto' />
                    </a>
                <p className='m-4 text-lg'><strong>Image by:</strong> {image.user}</p>
                <p className='m-4'><strong>Tags:</strong> {image.tags}</p>
                <p className='m-4'><strong>Resolution:</strong> {image.imageHeight} X {image.imageWidth}</p>
            </div>
        </>
    )
}

export default ImgCard
