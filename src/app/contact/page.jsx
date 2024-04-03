"use client"

import Image from "next/image";
import styles from "./contact.module.css";
import { useEffect, useState } from "react"; 

const ContactPage = () => {

  const [isClient, setIsClient] = useState(false);

  useEffect(()=> {
    setIsClient(true);
  },[]);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="contact" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        {isClient}
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea name="" id="" cols="30" rows="10" placeholder="message" />
          <button onClick={()=> console.log("clicked")}>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
