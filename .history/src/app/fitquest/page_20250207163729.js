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
                <div className={styles.packageDesign}>
                    <Image
                        src='/images/2.png'
                        alt="youth persona"
                        className={`${styles.mockup}`}
                        width={500}
                        height={400}
                    />
                    <Image
                        src='/images/3.png'
                        alt="young adult person"
                        className={`${styles.mockup}`}
                        width={500}
                        height={400}
                    />
                    <Image
                        src='/images/4.png'
                        alt="young adult person"
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