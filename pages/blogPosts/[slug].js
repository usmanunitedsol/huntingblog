import { SingleBed } from '@mui/icons-material';
import { Box, Container } from '@mui/material';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const slug = (props) => {

    console.log(props.Blog);
//  const router=useRouter();
//  const {slug}=router.query;
 const [sigleBlog, setsigleBlog] = useState(props.Blog);


 

 return <Box>
    <Container maxWidth={"sm"} margin="auto">
        <h2 className='items-center  font-mono text-xl lg:flex font-bold'>{sigleBlog.title && sigleBlog.title}</h2>
        <p>{sigleBlog.content && sigleBlog.content}</p>
    </Container>
 </Box>

}

export async function getServerSideProps(context) {
    // Fetch data from external API
    const {slug}=context.query;
    const res = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
    const Blog = await res.json()
   
    // Pass data to the page via props
    return { props: { Blog } }
  }
  

export default slug


