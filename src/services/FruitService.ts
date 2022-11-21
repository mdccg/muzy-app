import axios, { AxiosInstance } from 'axios';
import Fruit from './../classes/Fruit';

class FruitService {
  private _http: AxiosInstance;
  private _endpoint: string;
  
  constructor() {
    this._http = axios.create({ baseURL: import.meta.env.VITE_API_URL });
    this._endpoint = import.meta.env.VITE_API_FRUIT_ENDPOINT;
  }

  async loadFruit(fruitName: string): Promise<Fruit | null> {
    try {
      const response = await this._http.get(this._endpoint + fruitName);
      return new Fruit(response.data);

    } catch(pigeon) {
      return null;
    }
  }
}

export default FruitService;