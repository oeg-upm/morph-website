import axios from 'axios'
const api = "https://morphkgc.oeg.fi.upm.es/"
const parserApi = "https://yarrrmlparser.oeg.fi.upm.es/"
function uploadFiles(data){
    return new Promise(async (resolve,reject) => {
        const formData = new FormData();
        formData.append('mapping', data.mapping);
        formData.append('csv', data.csv)
        const config = {
            headers:{
                'Content-Type':'multipart/form-data'
            },
            responseType:'blob'
        }
        const response = await axios.post(api,formData,config).catch((err) => reject(err));;
        if(response){
            resolve(response.data)
        }else{
            reject()
        }
    });
}
function parseMapping(mapping){
    return new Promise(async (resolve, reject) => {
        const data = {mapping:mapping}
        const response = await axios.post(parserApi + '/parse',data).catch((err) => reject(err));
        if(response){
            resolve(response.data)
        }else{
            reject()
        }
    });
}

export {uploadFiles, parseMapping}