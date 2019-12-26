import Axios from 'axios';
import Config from '../Config';

export default class CountryService {
  getAllCountriesFromApi() {
    return Axios.get(`${Config.URL_API}/all/`);
  }
}
