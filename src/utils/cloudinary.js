import {v2 as cloudinary} from "cloudinary"
import fs from "fs"


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


const uplaodOnCloudinary = async(localFilePath)=>{
    try {
      if (!localFilePath) return null;
      //uplaod the file on cloudinary
       const response = await cloudinary.uploader.upload(localFilePath,{
        resource_type:"auto"
      })
      //file has been uplaoded successfully
      console.log("File is uploaded on cloudinary",response.url)
    //   console.log(response)
    return response;
    } catch (error) {
             fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation failed
             return null   
    }
}


export {uplaodOnCloudinary}

// cloudinary.uploader.upload(
//   "https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
//   { public_id: "olympic_flag" },
//   function (error, result) {
//     console.log(result);
//   }
// );