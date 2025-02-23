"use client";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Link from "next/link";
import styles from "./Contact.module.css";

export default function Contact() {
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "87253d52-5c4b-472a-98cd-f11ca1ffca0b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
    }
  }

  return (
    <>
      <Header />
      <main className={styles["main-container"]}>
        <div className={styles["contact-container"]}>
          <h1>Let's Connect!</h1>
          <form onSubmit={handleSubmit} className={styles["form-container"]}>
            <input
              className={styles["input-box"]}
              type="text"
              name="name"
              placeholder="Your Name"
            />
            <input className={styles["input-box"]} type="email" name="email" placeholder="Your Email" />
            <textarea rows={4} className={styles["input-box"]} name="message" placeholder="Message..."></textarea>
            <button className={styles["cta-btn"]} type="submit">
              Send Message
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
