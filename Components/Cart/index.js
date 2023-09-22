import { Box, Container } from '@mui/material'
import React, { useState } from 'react'
import CartList from './CartList'
import CartTotal from './CartTotal'

export default function Cart() {

    const [cartProd,setCartProd]=useState([
        {id:1,prodName:'WooComerce Development Services', icon:'images/cart_1.png',price:'15',qty:'1',subTotal:'15.00'},
        {id:2,prodName:'Wordpress Development Services', icon:'images/cart_2.png',price:'15',qty:'1',subTotal:'15.00'},
    ])
  return (
    <Container>
    <Box className="sectionpadding">
    <Box className="flex flex-col lg:flex-row gap-5">
    <CartList cartProd={cartProd} setCartProd={setCartProd}/>
    <CartTotal cartProd={cartProd}/>
    </Box>    
    </Box>
    </Container>
  )
}
