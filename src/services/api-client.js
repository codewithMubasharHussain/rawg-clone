import axios from 'axios';

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'894f210a664a41c2b09ad5777acad344',
    }
})