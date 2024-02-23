import Image from "next/image";
import Link from "next/link";
import Links from "./links/links";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        <Image src="/grow.png" alt="" width={120} height={60}/>
      </Link>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
