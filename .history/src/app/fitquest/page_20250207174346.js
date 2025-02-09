"use client";
import Header from "../../../components/Header";
import styles from "@/app/fitquest/Fitquest.module.css";
import Image from "next/image";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

export default function Fitquest() {
    const Slider = dynamic(() => import('react-slick'), {ssr: false});
    const settings = {dots: true, infinite: true, speed: 500, slidesToShow: 3, slidesToScroll: 1, autoplay: false, autoplaySpeed: 3000, centerMode: true, centerPadding: '5px', varibleWidth: true};
    const images = ['/images/2.png', '/images/3.png', '/images/4.png']


    return(
        <>
            <Header/>
            <main className={styles.mainContainer}>
                <section className={`${styles.projectSection}`}>
                    <Image
                        src='/images/fitquest.png'
                        alt="Guava Can Design"
                        className={`${styles.mockup}`}
                        width={500}
                        height={400}
                    />
                    <div className={styles.projectInfo}>
                        <h2>FitQuest</h2>
                        <h3>UI/UX Design</h3>
                        <h4>Rationale</h4>
                        <p>
                        FitQuest is a mobile web app designed to help adults and youth who struggle to meet the recommended weekly physical activity levels. By making fitness engaging and accessible, FitQuest empowers users to build and maintain healthier habits.<br/>Upon sign-up, users take a quiz to assess their current fitness level. Based on the results, FitQuest recommends personalized workout videos tailored to their needs. To enhance motivation, the app features an interactive reward system by completing workouts earns points, which can be redeemed for exclusive in-app rewards. FitQuest transforms exercise into a fun and rewarding journey through an interactive reward system.
                        </p>
                    </div>
                </section>
                <section className={styles.personaContainer}>
                    <h3>User Persona</h3>
                    <div className='w-full overflow-hidden'>
                        <Slider {...settings}>
                            {images.map((src, index)=> (
                                <div key={index} className="cursor-pointer px-4">
                                    <img src={src} alt={`slide ${index+1}`} className="w-full h-auto"></img>
                                </div>
                            ))}
                        </Slider>
                        {/* <Image
                            src='/images/2.png'
                            alt="youth persona"
                            className={`${styles.persona}`}
                            width={500}
                            height={400}
                        />
                        <Image
                            src='/images/3.png'
                            alt="young adult persona"
                            className={`${styles.persona}`}
                            width={500}
                            height={400}
                        />
                        <Image
                            src='/images/4.png'
                            alt='working mom persona'
                            className={`${styles.persona}`}
                            width={500}
                            height={400}
                        /> */}
                    </div>
                </section>
            </main>
        </>
    );
}