// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import * as fs from 'fs'; 

export default function handler(req, res) {
  fs.readFile(`blogdata/${req.query.slug}.json`,'utf-8',(error,data)=>{
    console.log(req.query.slug)
    if(error)
    {
      res.status(500).json({error:"not found"})
    }
    console.log(req.query.slug)
    res.status(200).json(JSON.parse( data))
  })

}
