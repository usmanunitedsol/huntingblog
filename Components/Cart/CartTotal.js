import { Box, Button, Paper, Table, TableBody, TableCell, TableHead, TableRow, TextField } from '@mui/material'
import Link from 'next/link'
import React from 'react'

export default function CartTotal({cartProd}) {
  return (
  <Box  className="w-10/12 md:w-6/12 lg:w-3/12 cart_total">
  <Paper elevation={0} square>
  <Table sx={{ border: '2px solid #f0f6fa'}}>
  <TableHead>
  <TableRow>
  <TableCell colSpan={2} className='px-3 py-3 xl:px-5 xl:py-4 text-lg font-TextBold text-titleColor bg-primaryBg border border-[#f0f6fa]'>Summary</TableCell>
  </TableRow>
  </TableHead>
  <TableBody>
  <TableRow sx={{ border: '2px solid #f0f6fa'}}>
  <TableCell className='px-4 py-4 xl:px-5 xl:py-4 text-base font-TextBold text-titleColor'>SubTotal</TableCell>
  <TableCell align='right' className='px-4 py-4 xl:px-5 xl:py-4 text-base font-TextBold text-titleColor'>$10</TableCell>
  </TableRow>
  <TableRow sx={{ border: '2px solid #f0f6fa'}}>
  <TableCell className='px-4 py-4 xl:px-5 xl:py-4 text-base xl:text-lg font-TextBold text-[#000]'>Total</TableCell>
  <TableCell align='right' className='px-4 py-4 xl:px-5 xl:py-4 text-base xl:text-lg font-TextBold text-[#000]'>$55</TableCell>
  </TableRow>
  </TableBody>
  </Table>
  </Paper>
  <Link href={""} sx={{borderWidth:'1px', borderStyle:'solid'}} className='w-[100%] block text-sm xl:text-base font-semibold text-center px-3 py-3 xl:px-5 xl:py-4 uppercase rounded-none text-secondaryColor bg-primaryColor border border-primaryColor hover:bg-transparent hover:text-primaryColor transition-all'>Proceed To Checkout</Link>
  <Box className="discount_block pt-5 md:pt-7">
                    <TextField placeholder= 'Enter Discount Code' fullWidth className='rounded-none mb-5'/>
                    <Button sx={{borderWidth:'1px', borderStyle:'solid'}} className='text-sm xl:text-base text-titleColor font-TextReg px-5 py-2 capitalize border-titleColor hover:bg-titleColor hover:text-secondaryColor '>Apply Cuppon</Button>
     </Box>
  </Box>
  )
}
