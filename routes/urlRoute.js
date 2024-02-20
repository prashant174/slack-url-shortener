const express=require("express")
const { generateNewUrl, shortUrl } = require("../controllers/urlController")
const router=express.Router()

router.post("/",generateNewUrl)
router.get("/:shortId",shortUrl)

module.exports={
    router
}