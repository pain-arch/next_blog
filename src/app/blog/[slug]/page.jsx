import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src="/post3.jpeg"
          alt=""
          // width={400}
          // height={600}
          fill
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="/post2.jpeg"
            alt=""
            width={50}
            height={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailvalue}>Shykat</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailvalue}>02-04-2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          eveniet, necessitatibus nostrum, esse alias quidem iure, quas
          praesentium fuga earum hic sequi perspiciatis dolorum unde culpa et
          natus vel. Corporis?Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Nihil eveniet, necessitatibus nostrum, esse alias quidem iure,
          quas praesentium fuga earum hic sequi perspiciatis dolorum unde culpa
          et natus vel. Corporis?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nihil eveniet, necessitatibus nostrum, esse alias
          quidem iure, quas praesentium fuga earum hic sequi perspiciatis
          dolorum unde culpa et natus vel. Corporis?Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Nihil eveniet, necessitatibus nostrum,
          esse alias quidem iure, quas praesentium fuga earum hic sequi
          perspiciatis dolorum unde culpa et natus vel. Corporis?Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Nihil eveniet,
        </div>
      </div>
    </div>
  );
};
export default SinglePostPage;
