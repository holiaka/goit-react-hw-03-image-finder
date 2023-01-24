import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export async function api(q, p) {
  try {
    const base = 'https://pixabay.com/api/';
    const response = await axios.get(
      `${base}?key=30951903-ffa881e7e59a7b1cacd7ea887&q=${q}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${p}`
    );
    return response.data;
  } catch (error) {
    Notify.failure(
      'Search failed!!! Probably problems with the Internet connection!!!'
    );
  }
}
