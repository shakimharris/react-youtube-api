import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID f70d590add5c282efa55738697eea438f3f56ec4547a5a818ba6ab3fda5875fe'
    }
    })
});