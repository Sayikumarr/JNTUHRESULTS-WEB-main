import Link from "next/link";
import HomeBanner from "./HomeBanner";
import React,{useState} from 'react';
import Script from "next/script";
const HomeFooter = ()=>
{
    const closeBanner=()=>{
        
       setHomeBanner(<></>)
    }
    const [homeBanner,setHomeBanner]=useState(<HomeBanner closeBanner={closeBanner}/>)
    return (
    <>

        <p className="mt-1 block text-left mx-[12%] text-center mb-4 text-[65%] sm:text-[100%]">
            Made with ❤ by &nbsp;
            <Link href="https://github.com/Sayikumarr/" >
                <a target="_blank" className="font-bold text-[#9C1A8B]" >
                    Sai Kumar Mudhiraj
                </a>
            </Link>
        </p>
		<center>
		<a target="_blank" rel="noopener noreferrer nofollow" href="https://camo.githubusercontent.com/b50fefa11a8f211d777f7b966bb11b71ae1c7d087eab664cd17295801a5f020a/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d736179696b756d6172722673686f775f69636f6e733d74727565266c6f63616c653d656e">
		<img align="center" src="https://camo.githubusercontent.com/b50fefa11a8f211d777f7b966bb11b71ae1c7d087eab664cd17295801a5f020a/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d736179696b756d6172722673686f775f69636f6e733d74727565266c6f63616c653d656e" alt="sayikumarr" data-canonical-src="https://github-readme-stats.vercel.app/api?username=sayikumarr&amp;show_icons=true&amp;locale=en" /></a>
		</center>
        {/* <p className="mt-1 block text-left mx-[12%] text-center mb-4 text-[67%] sm:text-[100%]">
            If you found this app helpful, you can support me by &nbsp;
            <Link href="#" >
                <a className="font-bold text-[#9C1A8B]">
                    buying me a pizza here.
                </a>
            </Link>
        </p>
         {homeBanner} 
		 
		  */}


        

    </>      
    )
}
export default HomeFooter;
