import axios from 'axios'
import App from './App'

const searchImage = async(term) => {

    const url = 'http://api.unsplash.com/search/photos/?client_id=y2FHPEHwiqLd3FojpjMxWKzO-yZ3dH7_nutgS_IXIs4'

    const response = await axios.get(url, {
    params: {
        query: term
    }

})

    console.log(term)
    console.log(response)

    return response.data.results


}

export default searchImage