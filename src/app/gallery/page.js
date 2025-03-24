"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import { CustomEase } from "gsap/CustomEase";
import Header from "../../../components/Header";
import styles from "./Gallery.module.css";

const LocomotiveScroll = dynamic(
  () => import("locomotive-scroll").then((mod) => mod.default),
  { ssr: false }
);

export default function GalleryPage() {
  useEffect(() => {
    let scroller;

    const initAnimations = async () => {
      try {
        // Wait until the entire page (including images) is loaded
        await new Promise((resolve) => {
          if (document.readyState === "complete") {
            resolve();
          } else {
            window.addEventListener("load", resolve, { once: true });
          }
        });

        // Register GSAP plugins
        gsap.registerPlugin(ScrollTrigger, Flip, CustomEase);
        CustomEase.create("cubic", "0.83, 0, 0.17, 1");

        // Select the scroll container
        const scrollContainer = document.querySelector(
          "[data-scroll-container]"
        );
        if (!scrollContainer) {
          console.error("Scroll container not found");
          return;
        }

        // Initialize LocomotiveScroll
        scroller = new LocomotiveScroll({
          el: scrollContainer,
          smooth: true,
        });
        console.log("scroller:", scroller); // Check if this is a valid instance

        // Select other DOM elements
        const gallery = document.querySelector(
          `.${styles.imgGalleryContainer}`
        );
        const images = gsap.utils.toArray(`.${styles.img}`);
        const btn = document.querySelector(`.${styles.btn}`);

        if (!gallery || !images.length || !btn) {
          console.error("Gallery, images, or button not found");
          return;
        }

        let rotationValues = [10, -5, 2, -2];
        let isFlipped = false;

        function applyRotation() {
          images.forEach((img, index) => {
            const rotation = isFlipped
              ? 0
              : rotationValues[index % rotationValues.length];
            gsap.to(img, {
              rotate: rotation,
              duration: 2,
              ease: "cubic",
              delay: 0.15,
            });
          });
        }

        btn.addEventListener("click", () => {
          isFlipped = !isFlipped;

          setTimeout(() => {
            btn.textContent = isFlipped ? "Hide All Arts" : "Explore Gallery";
          }, 1000);

          let state = Flip.getState(
            `.${styles.imgGalleryContainer}, .${styles.img}`
          );
          gallery.classList.toggle(styles.order);
          images.forEach((img) => img.classList.toggle(styles.reorder));

          Flip.from(state, {
            absolute: true,
            duration: 2,
            rotate: 0,
            stagger: 0.05,
            ease: "cubic",
            onStart: () => {
              applyRotation();
            },
            onComplete: () => {
              // Make sure `scroller` is valid
              if (scroller && scroller.update) {
                scroller.update();
              }
            },
          });
        });
      } catch (error) {
        console.error("Animation initialization error:", error);
      }
    };

    initAnimations();

    return () => {
      // Cleanup LocomotiveScroll on unmount
      if (scroller) {
        scroller.destroy();
      }
    };
  }, []);

  return (
    <>
      <Header className={styles.nav} />
      <div className={styles.galleryPage}>
        <div className={styles.imgGallery} data-scroll-container>
          <div
            className={`${styles.imgGalleryContainer} ${styles.order}`}
            data-scroll
          >
            <div className={`${styles.img} ${styles.reorder}`} id="i-1">
              <img src="/test-images/img1.webp" alt="img1" />
            </div>
            <div className={`${styles.img} ${styles.reorder}`}>
              <img src="/test-images/img2.webp" alt="img2" />
            </div>
            <div className={`${styles.img} ${styles.reorder}`}>
              <img src="/test-images/img3.webp" alt="img3" />
            </div>
            <div className={`${styles.img} ${styles.reorder}`}>
              <img src="/test-images/img4.webp" alt="img4" />
            </div>
            <div className={`${styles.img} ${styles.reorder}`}>
              <img src="/test-images/img5.webp" alt="img5" />
            </div>
            <div className={`${styles.img} ${styles.reorder}`}>
              <img src="/test-images/img6.webp" alt="img6" />
            </div>
            <div className={`${styles.img} ${styles.reorder}`}>
              <img src="/test-images/img7.webp" alt="img7" />
            </div>
            <div className={`${styles.img} ${styles.reorder}`}>
              <img src="/test-images/img8.webp" alt="img8" />
            </div>
          </div>
        </div>
        <div className={styles.hero}>
          <h1>Art Gallery</h1>
        </div>
        <div className={styles.btn}>Explore Gallery</div>
      </div>
    </>
  );
}
