import React from 'react'
import  vg from "./../assets/img2.webp"
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from  "react-icons/ai"
export default function Home() {
  return (
<>
<div className="home" id='home'>
    <main>
        <h1>Aniruddha</h1>
        <p>Solution to all your problems</p>
    </main>
</div>

<div className="home2">
    <img src={vg}  alt="Graphics" />

    <div>
        <p>
            We are your one and only solution to the tect problems you face every day. 
            we are leading tech company whose aim is to increase the problem solving ability in children.
        </p>
    </div>
</div>

<div  className="home3" id="about">
   <div>
    <h1> Who we are? </h1>
    <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet omnis quisquam rerum! Quas eaque doloribus placeat hic veritatis ipsum, nihil dicta pariatur quis labore culpa quod, laboriosam tempore nobis amet.
    </p>
   </div>
</div>

<div className="home4" id='brands'>
    <div>
        <h1>
            Brands
        </h1>

        <article>
        <div style={{
            animationDelay : "0.3s"
        }}>
            <AiFillGoogleCircle/>
            <p>Google</p>
        </div>
        <div style={{
            animationDelay : "0.5s"
        }}>
            <AiFillAmazonCircle/>
            <p>Amazon</p>
        </div>
        <div style={{
            animationDelay : "0.7s"
        }}>
            <AiFillYoutube/>
            <p>Youtube</p>
        </div>
        <div style={{
            animationDelay : "0.9s"
        }}>
            <AiFillInstagram/>
            <p>Instagram</p>
        </div>

        </article>
    </div>
</div>

</>  )
}
