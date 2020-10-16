import axios from 'axios';
const endpoint = 'http://0.0.0.0:5000/api/'
function sendData(form){
    return new Promise((resolve, reject) => {
        const options = {
            headers:{
                'accept':'binary/octet-stream',
                'Content-Type': 'multipart/form-data',
                'Access-Control-Allow-Headers':'*'
            }
        }
        console.log(form)
        const bodyFormData = new FormData();
        bodyFormData.append('format', form.format);
        if(form.url !== undefined)
            bodyFormData.append('url', form.url);
        if(form.file !== undefined){
            // bodyFormData.append('file', form.file);
            bodyFormData.append("file", form.file[0]);
        }     
        axios.post(endpoint, bodyFormData, options).then((response) => {
            resolve(response.data)
        }).catch(err => reject(err))
    })
}
export  {sendData}