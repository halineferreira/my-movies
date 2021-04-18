import axios from 'axios';

const API_KEY = 'e1f52d780c2e1473aaf09b259fa5de92';
const BASE_URL = 'https://api.themoviedb.org/3/';

const withBaseUrl = (path) => `${BASE_URL}${path}?api_key=${API_KEY}`;

export class MoviesService {
    static getMovies() {
        return axios(withBaseUrl('movie/popular'));
    }
    static getMovieById(id) {
        return axios(withBaseUrl(`movie/${id}`));
    }
}
