class HomeWorkService {
    uploadHomeWorkDetails = (grade, branch_id, subject, chapter) => {
        return new Promise((resolve, reject) => {
            const body = {
                "student_id" : 9999,
                "grade" : grade,
                "branch_id" : branch_id,
                "subject" : subject,
                "chapter" : chapter
            }
            let options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            }
            let responce = fetch('http://192.168.1.29:8000/homeworks', options)
            responce.then(res => {
                res.json().then(resp => {
                    resolve(resp)
                }).catch(error => {
                    reject(error)
                })
            })
            .catch(error => {
                reject(error)
            })
        })
    }

    uploadImage = (imageDetails, fileName, homeworkId) => {
        return new Promise(async (resolve, reject) => {
            let data = new FormData()
            data.append('file_name', {
                uri : imageDetails.path,
                name : `${fileName}.jpg`,
                type : imageDetails.mime
            })
            data.append('hw_id', homeworkId)
            let options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                body: data
            }
            let responce = fetch('http://192.168.1.29:8000/homeworks_files', options)
            responce.then(res => {
                res.json().then(resp => {
                    resolve(resp)
                }).catch(error => {
                    reject(error)
                })
            })
            .catch(error => {
                reject(error)
            })
        })
    }

}

export default new HomeWorkService()