const mongoose=require("mongoose")

const urlSchema=new mongoose.Schema({
    longUrl: { type: String, required: true },
  shortUrl: { type: String, required: true, unique: true },
})

const URL=mongoose.model('url',urlSchema)

module.exports={
    URL
}
