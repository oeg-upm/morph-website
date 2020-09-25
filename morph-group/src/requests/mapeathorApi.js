import axios from 'axios';
const endpoint = 'https://morph.oeg.fi.upm.es/tool/mapeathor/api/'
function sendData(form){
    return new Promise((resolve, reject) => {
        const options = {
            header:{
                'accept':'binary/octet-stream',
                'Content-Type': "multipart/form-data",
                'Access-Control-Allow-Headers':'*'
            }
        }
        axios.post(endpoint, form, options).then((response) => {
            resolve(response.data)
        }).catch(err => reject(err))
    })
}
export  {sendData}