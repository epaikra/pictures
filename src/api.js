import axios from 'axios'

const searchImage = async(term) => {

    const url = 'http://api.unsplash.com/search/photos/?client_id=y2FHPEHwiqLd3FojpjMxWKzO-yZ3dH7_nutgS_IXIs4'

    const response = await axios.get(url, {
    params: {
        query: 'cars'
    }

})

    console.log(response)


}

export default searchImage