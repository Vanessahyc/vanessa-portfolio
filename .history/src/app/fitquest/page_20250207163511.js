"use client";
import Header from "../../../components/Header";
import styles from "@/app/floom/Floom.module.css";
import Image from "next/image";
import { useState } from "react";

export default function Fitquest() {

    return(
        <>
            <Header/>
            <main className={styles.mainContainer}>
                <section className={`${styles.projectSection}`}>
                <Image
                    src='/images/2.png'
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
                    <h4>Floom Flavor</h4>
                    <div className={styles.flavorFilter}>
                    <button
                        onClick={() => {setSelectedImage("/images/Guava_Mockup.jpg"); setSelectedDieline('/images/Guava_Dieline_New.png'); setSelectedColor('/images/Guava_Color.svg');}}
                    >
                        Guava
                    </button>
                    <button
                        onClick={() => {setSelectedImage("/images/Orange_Mockup.jpg"); setSelectedDieline('/images/Orange_Dieline_New.png'); setSelectedColor('/images/Guava_Color.svg');}}
                    >
                        Orange
                    </button>
                    <button
                        onClick={() => {setSelectedImage("/images/Mangosteen_Mockup.jpg"); setSelectedDieline('/images/Mangosteen_Dieline_New.png'); setSelectedColor('/images/Guava_Color.svg');}}
                    >
                        Mangosteen
                    </button>
                    </div>
                </div>
                </section>
                <section className={styles.packageContainer}>
                <h3>Package Design</h3>
                <div className={styles.packageDesign}>
                    <Image
                        src={selectedColor}
                        alt="Guava Can Design"
                        className={`${styles.mockup}`}
                        width={500}
                        height={400}
                    />
                    <Image
                        src={selectedDieline}
                        alt="Guava Can Design"
                        className={`${styles.mockup}`}
                        width={500}
                        height={400}
                    />
                </div>
                </section>
            </main>
        </>
    );
}