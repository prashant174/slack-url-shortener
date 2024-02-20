const shortid=require("shortid")
const { URL } = require("../models/urlModel")

const generateNewUrl= async(req,res)=>{
    const body=req.body
    if(!body.url){
        return res.status(400).send({msg:"Url is required"})
    }
  const shortId=shortid()

  await URL.create({
    shortId:shortId,
     redirectUrl:body.url,
     visitHistory:[]
  });

  return res.json({id:shortId})
}

const shortUrl=async(req,res)=>{
    try {
        const shortId=req.params.shortId;
        const entry=await URL.findOneAndUpdate({
            shortId
        },{$push:{
            visitHistory:{
                timestamp:Date.now()
            },
        }})
    
        res.redirect(entry.redirectUrl)
    } catch (error) {
        console.log(error)
    }
   
}



module.exports={
    generateNewUrl,
    shortUrl
}