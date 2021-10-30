const axios = require("axios")
const Path = require("path")
const Fs = require("fs/promises")
let {JSDOM} = require("jsdom")

module.exports = async(req, res)=>{
    const{q} = req.query;

    let response = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=tashkent&appid=1389f5a1a8afe57471373e373e8b5d24`",{
        
    })
    let data = response.data;
    data = data.replaceAll("/themes","https://openweathermap.org/themes")
    
    let dom = new JSDOM(data);
    let temp = dom.window.document;

    let temp = dom.querySeltor(".current-temp").querySeltor("span").textContent
    res.status(200).json({
        ok:true,
        temp,
    })
}