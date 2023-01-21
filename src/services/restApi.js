import axios from "axios";

const baseURL = 'https://pixabay.com/api/';

export async function api(query, page) {
    try {
        const response = await axios.get(baseURL, {
            params: {
                key: "30951903-ffa881e7e59a7b1cacd7ea887",
                g: query,
                per_page: 12,
                image_type: 'photo',
                orientation: 'horizontal',
                page: page
            }
        })
        console.log(response);
    } catch (error) { console.log(error) }

}