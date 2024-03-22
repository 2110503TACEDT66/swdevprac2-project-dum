'use client'

import { useEffect, useState } from 'react'
import styles from './page.module.css'
import ImageList from '@/components/SlideShowImage/SlideShowImage'
import { Button } from '@mui/material'
import Footer from '@/components/Footer/Footer'

export default function Landing() {

  const [imageIndex , setImageIndex] = useState(0)
  
  setTimeout(() => {
      setImageIndex((imageIndex + 1) % ImageList.length)
  }, 4000);

  return (
      <div className={styles.Landing}>
        <section className={styles.LandingSec1}>
            <img className={styles.SlideShowImage} src={ImageList[imageIndex]} width={0} height={0} alt='SlideShowImage' sizes='100vh'/>
          <div className={styles.LandingCover}>
            <div className={styles.LandingCoverTextWrapper}>
              <h1>CEDT Online Job Fair 2022</h1>
              <h2>Look for your own opportunities.</h2>
              <Button className={styles.LandingCoverButton}>Get Started</Button>
            </div>
          </div>
        </section>

        <section className={styles.LandingSec2}>

          <div className={styles.LandingSec2BlockRight + ' ' + styles.LandingSec2Block}>
            <h1 className={styles.LandingSec2TextContainer}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt et praesentium voluptatum illo laudantium alias inventore odit ipsum, eaque beatae error, ea autem? Rerum tempora ipsum qui asperiores, placeat provident!
            Magni ratione velit autem alias eos! Repellendus</h1>
            <div className={styles.LandingSec2IconContainer}>
              <img src='/LandingIcon/1.png' alt="1" />
            </div>
          </div >

          <div className={styles.LandingSec2BlockLeft + ' ' + styles.LandingSec2Block}>
            <div className={styles.LandingSec2IconContainer}>
            <img src='/LandingIcon/2.png' alt="2" />
            </div>
            <h1 className={styles.LandingSec2TextContainer}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam impedit voluptates asperiores repellat optio suscipit? Distinctio officia porro provident sequi blanditiis quasi quam ex. A, ratione asperiores? Consectetur, veniam porro.
            Numquam odio ipsum sequi, doloremque excepturi atqu.</h1>
          </div>

          <div className={styles.LandingSec2BlockRight + ' ' + styles.LandingSec2Block}>
            <h1 className={styles.LandingSec2TextContainer}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, culpa officiis laudantium magni modi neque dignissimos incidunt perspiciatis, numquam, fugit perferendis nihil maxime labore explicabo. Repellat in voluptas accusantium omnis!
            In dolorum quod consectetur animi necessitatibus</h1>
              <div className={styles.LandingSec2IconContainer}>
              <img src='/LandingIcon/3.png' alt="3" />
              </div>
          </div>

        </section>
        <Footer/>
      </div>
  )
}
