import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Head } from 'next/document'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {  
  return (

<>      


    <main
      className={`flex max-w-xl m-auto flex-col items-center justify-center   ${inter.className}`}
    >


      <div className=" top">
        <h1 className=" max-w-5xl w-full items-center justify-center font-mono text-5xl lg:flex">
          Hunting coding </h1>
       
       </div>

       <div className="py-10">
       <h2 className=" max-w-5xl w-full items-center justify-center font-mono text-3xl lg:flex">
          Trendy blongs </h2>
       </div>
     

        <div className='blogs'>
         <div className="blogitems">
          <h3 className="  items-center  font-mono text-xl lg:flex font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores nihil rerum, iusto dicta in tempora eligendi architecto a tempore esse doloremque animi quo minus veritatis excepturi reprehenderit dolores eaque praesentium.</p>
         </div>

         <div className="blogitems">
          <h3 className=" items-center font-mono text-xl lg:flex font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores nihil rerum, iusto dicta in tempora eligendi architecto a tempore esse doloremque animi quo minus veritatis excepturi reprehenderit dolores eaque praesentium.</p>
         </div>

         <div className="blogitems">
          <h3 className="   items-center  font-mono text-xl lg:flex font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores nihil rerum, iusto dicta in tempora eligendi architecto a tempore esse doloremque animi quo minus veritatis excepturi reprehenderit dolores eaque praesentium.</p>
         </div>

         
        </div>
      
       
        
    </main>
    </>
  )
}
