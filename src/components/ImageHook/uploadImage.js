

const imageUpload = async image => {

    const imageHostKey = process.env.REACT_APP_imgbb_key;

    if (image) {
      const formData = new FormData()
      formData.append('image', image)
      const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
  
      const response = await fetch(url, {
        method: 'POST',
        body: formData,
      })
      const data = await response.json()
      return data
    }
  }
  
  export default imageUpload;