import axios from "axios"

export const fetchGoogleOauth = async () => {
    const google = await axios.get('http://localhost:5001/api/oauth/google/form');
    
    return google.data;
}