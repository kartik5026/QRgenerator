/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/


import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer.prompt([
    {
        message: "Enter Your Url Here",
        name:"URL"
    }
]).then((ans)=>{
    const url = ans.URL;
    fs.writeFile("index.txt",url,(err)=>{
        if(err){
            throw err;
        }
        else{
            console.log("File Created Successfully");
        }
    })
    
    const qr_img = qr.image(url);
    qr_img.pipe(fs.createWriteStream("img.png"));
}).catch((err)=>{
    throw err;
})