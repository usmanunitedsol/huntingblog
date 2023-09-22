import { Box, Container } from '@mui/material'
import Link from 'next/link'
import { parse } from 'postcss'
import React, { useEffect, useState } from 'react'
import slug from './blogPosts/[slug]'

export default function Blog(props) {

  const [blog, setblog] = useState(props.allBlogs)

  return (
    <Box className="sectionpadding">
    <Container maxWidth={"md"}>
    <Box className='blogs'>
      {
        blog.map((blogitem)=>{
        return  <Box key={blogitem.slug} className="blogitems py-2">
           <Link href={`/blogPosts/${blogitem.slug}`}>
          <h3 className=" cursor-pointer items-center  font-mono text-xl lg:flex font-bold">{blogitem.title}</h3>
          </Link>
          <p>{blogitem.content.substr(0,400)}</p>
         </Box>
         
        }

        )
      }
         
        </Box>
    </Container>
    </Box>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/blogs`)
  const allBlogs = await res.json()
 
  // Pass data to the page via props
  return { props: { allBlogs } }
}
