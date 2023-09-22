import { Box, Button, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditNoteIcon from '@mui/icons-material/EditNote';
import Link from 'next/link';
import ImageBlock from '../ImageBlock';

export default function CartList({cartProd, setCartProd}) {
  const handleDeleteCartItem=(itemId)=>{
      const updateCard=cartProd.filter(item=>item.id!==itemId)
      setCartProd(updateCard)
  }
  return (
    <Box className="w-full lg:w-9/12 cart_list">
     <Paper   elevation={0} square>
      <Table className='cart_list_table ' sx={{ border: '2px solid #f0f6fa' }}>
       
       <TableHead className='hidden md:table-header-group'>
         <TableRow sx={{ border: '2px solid #f0f6fa' }}>
          <TableCell className='px-5 py-4 text-lg font-TextBold text-titleColor bg-primaryBg border border-[#f0f6fa]'>Products </TableCell>
          <TableCell className='px-5 py-4 text-lg font-TextBold text-titleColor bg-primaryBg border border-[#f0f6fa]'>Price </TableCell>
          <TableCell className='px-5 py-4 text-lg font-TextBold text-titleColor bg-primaryBg border border-[#f0f6fa]'>Qty </TableCell>
          <TableCell className='px-5 py-4 text-lg font-TextBold text-titleColor bg-primaryBg border border-[#f0f6fa]'>Subtotal </TableCell>
         </TableRow>
        </TableHead> 

        <TableBody>
          {
            cartProd.map((cartItem)=>
            <TableRow key={cartItem.id} sx={{ border: '2px solid #f0f6fa' }}>
              <TableCell data-th="Products" className='px-4 py-4 xl:px-5 xl:py-4'>
               <Box className="flex justify-start gap-5">
               <Box className="flex items-center justify-start gap-3">
               <Link href={'/productdetail'} className='edit_cart_item'>
                <EditNoteIcon />
               </Link>  
               <Link href={''} className='delete_cart_item' onClick={()=>{handleDeleteCartItem(cartItem.id)}}>
                <DeleteOutlineIcon />
                </Link>
              </Box> 
              <Box className="prod_cart flex items-center justify-center gap-5">
               <ImageBlock image={cartItem.icon} imageClass="w-25" />
               <Typography>  {cartItem.prodName}</Typography>
              </Box>
            
              </Box>
              </TableCell>
              <TableCell data-th="Price" className='px-4 py-4 xl:px-5 xl:py-4 text-center text-sm xl:text-base text-textColor'>${cartItem.price}</TableCell>
              <TableCell data-th="Qty" className='px-4 py-4 xl:px-5 xl:py-4 text-center text-sm xl:text-base text-textColor'>{cartItem.qty}</TableCell>
              <TableCell data-th="SubTotal" className='px-4 py-4 xl:px-5 xl:py-4 text-center text-sm xl:text-base text-textColor'>${cartItem.subTotal}</TableCell>

            </TableRow>
            )
          }
        </TableBody>
      </Table>
     </Paper>
     <Box className="update_cta pt-5 md:pt-7">
                    <Button sx={{ borderWidth: '1px', borderStyle: 'solid' }} className='text-sm xl:text-base text-titleColor font-TextReg px-5 py-2 capitalize border-titleColor hover:bg-titleColor hover:text-secondaryColor'>Update Cart</Button>
                </Box>

    </Box>
  )
}
