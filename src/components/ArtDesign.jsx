import React from 'react'
import Image from 'next/image'

const ArtDesign = () => {
  return (
    <div className=' mt-10'>
        <Image
              style={{ width: "100%", margin: "auto" }}
              width={1000}
              height={1000}
              unoptimized
              src="https://gallery.famewheels.com/portfolio/artandillustration/artillustration.webp"
            />
        <Image />
    </div>
  )
}

export default ArtDesign