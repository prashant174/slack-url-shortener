const express=require("express")
const { generateNewUrl, shortUrl } = require("../controllers/urlController")
const router=express.Router()

router.post("/shorten",generateNewUrl)
router.get("/:shortUrl",shortUrl)

module.exports={
    router
}
