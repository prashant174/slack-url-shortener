const shortid=require("shortid")
const { URL } = require("../models/urlModel")

const generateNewUrl= async(req,res)=>{
  const { longUrl } = req.body;
  const shortUrl = shortid();
  await URL.create({ longUrl, shortUrl });
  res.json({ shortUrl });

}

const shortUrl=async(req,res)=>{
    try {
       const { shortUrl } = req.params;
  const url = await URL.findOne({ shortUrl });
  if (!url) {
    return res.status(404).json({ error: 'Short URL not found' });
  }
  res.redirect(url.longUrl);
    } catch (error) {
        console.log(error)
    }
   
}



module.exports={
    generateNewUrl,
    shortUrl
}
