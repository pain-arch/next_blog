import styles from "./footer.module.css"

const Footer =()=>{
    return (
        <div className={styles.container}>
            <div className={styles.logo}>.himu</div>
            <div className={styles.text}>
                dev by himu © All rights reserved
            </div>
        </div>
    )
}

export default Footer;