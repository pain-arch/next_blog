import Link from "next/link";

const NavigationTest = () =>{
    return(
        <div>
        <Link href="/blog" prefetch={false}>Clicked</Link>
        </div>
    )
}

export default NavigationTest;