import React, { useState } from "react";
import axios from "axios";

const UploadImg = () => {
const [file, setFile] = useState({})
const [imagePreviewUrl, setImagePreviewUrl] = useState(null) 
const handleUploadImage = (e) => { 
    const file = e.target.files[0] 
    const reader = new FileReader(); 
    reader.onloadend = () => { 
        setFile(file)
        setImagePreviewUrl(reader.result) 
    }
    reader.readAsDataURL(file) 
}

const onClickUpload = async () => {
    const formData = new FormData() 
    formData.append('file', file) 
    const uploadImg = await axios({ 
    method: 'post',
    url: 'http://localhost:6060/upload',
    data: formData
    })
    }

return(
<React.Fragment>
<input type="file" 
     onChange={handleUploadImage} 
   />
   <button onClick={onClickUpload}> Upload </button> 
</React.Fragment>
)
}
export default UploadImg