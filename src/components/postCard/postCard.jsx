import Image from "next/image";
import Link from "next/link";
import styles from "./postCard.module.css";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="/post1.jpeg"
            alt=""
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>01.03.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}> This is a new post</h1>
        <p className={styles.description}>Lets Learn More.....</p>
        <Link className={styles.link} href='/blog/post'>READ MORE</Link>
      </div>
    </div>
  );
};

export default PostCard;
