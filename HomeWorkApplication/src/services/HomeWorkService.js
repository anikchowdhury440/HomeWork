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
                    'Content-Type': 'multipart/form-data'
                },
                body: JSON.stringify(body)
            }
            let responce = fetch('http://192.168.1.29:8000/manageimages', options)
            responce.then(res => {
                console.log(res)
                res.json().then(resp => {
                    console.log(resp)
                    resolve(resp)
                }).catch(error => reject(error))
            })
            .catch(error => reject(error))
        })
    }

    addImage = (imageDetails, index) => {
        return new Promise(async (resolve, reject) => {
            let data = new FormData()
            data.append('image', {
                uri : imageDetails.path,
                name : `images${index}.jpg`,
                type : imageDetails.mime
            })
            data.append('name', `images${index}.jpg`)
            let options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                body: data
            }
            let responce = fetch('http://192.168.1.29:8000/manageimages', options)
            responce.then(res => {
                res.json().then(resp => {
                    resolve(resp)
                }).catch(error => reject(error))
            })
            .catch(error => reject(error))
        })
    }

}

export default new HomeWorkService()