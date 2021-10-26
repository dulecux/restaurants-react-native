import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer K0cExkuPKb7LnC08R9q7KG03iT-1pzZPYDGz-fkvdDEdFEFUoZWE0lRFylrzJutghmKMIdVO9kn-CRbF0gmPymnIpbO8-M5HIEFY8Z_Qp7puXVcaJhmlo8C00Sx3YXYx'
    }
});