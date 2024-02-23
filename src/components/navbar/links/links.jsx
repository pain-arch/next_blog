"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./links.module.css"
import NavLink from "./navLink/navLink";


const links= [
    {
        title:"Home",
        path:"/",
    },
    {
        title:"About",
        path:"/about"
    },
    {
        title:"Contact",
        path:"/contact"
    },   
    {
        title:"Blog",
        path:"/blog"
    },
];


const Links =()=>{


    const [open, setOpen] = useState(false);



    const session = true;
    const Admin = true;

    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map((link=>(
                    <NavLink item={link} key={link.title}></NavLink>
                )))} 

                
                { session ? (
                    <>
                    {Admin && <NavLink item={{title:"Admin", path:"/admin"}} ></NavLink>}
                    <button className={styles.logout}>Logout</button>
                    </>            ): 
                ( <NavLink item={{title:"Login", path:"/login"}}></NavLink>)
                }
            </div>

            <Image className={styles.menuButton} src='/menu.png' alt='' width={30} height={30} onClick={()=> setOpen((prev) => !prev)}/>
            {
                open && <div className={styles.mobileLinks}>
                    {
                        links.map((link) => (
                            <NavLink item={link} key={link.title}/>
                        ))
                    }
                </div>
            }
        </div>
    )
};

export default Links;