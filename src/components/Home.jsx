import React from 'react'
import vg from '../assets/2.webp';
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from 'react-icons/ai';

function Home() {



  return (
    <>
        <div className="home" id='home'>
            <main>
                <h1>Tech-Pro</h1>
                <p>Solution to all your problems</p>
            </main>
        </div>

        <div className="home2">
            <img src={vg} alt="Graphics" />

            <div>
                <p>
                    We are your one and only solution to the tech problems you face
                    every day. We are leading tech company whose aim is to increase the
                    problem solving ability in children.
                </p>
            </div>
        </div>

        <div className="home3" id='about'>
            <div>
                <h1>Who we are?</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quam esse vel sit repudiandae labore in odit tempora. Reiciendis excepturi rem iste commodi, placeat tenetur ullam sint explicabo necessitatibus quasi praesentium voluptas blanditiis, ipsa odio dicta voluptates deleniti. Obcaecati error doloribus, beatae quae est unde iste dolore non eligendi explicabo, perferendis facilis fugiat illum vel. Eveniet ipsam placeat libero, ipsa fugiat, est facilis voluptatibus non qui beatae labore inventore nostrum sapiente, unde sit. Sit ipsa natus voluptate, ducimus numquam, officiis vero debitis modi quos est nostrum tenetur sint minus tempore ad in, culpa quae qui nulla libero quod a voluptates!</p>
            </div>
        </div>

        <div className="home4" id='brands'>
            <div>
                <h1>Brands</h1>

                <article>
                    <div style={{
                        animationDelay : "1s"
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
                        <p>YouTube</p>
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
    </>
  )
}

export default Home;