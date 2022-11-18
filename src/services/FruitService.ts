import axios, { AxiosInstance } from 'axios';
import Fruit from './../classes/Fruit';

class FruitService {
  private _http: AxiosInstance;
  private _endpoint: string;
  private _fruit: Fruit;
  
  constructor() {
    this._http = axios.create({ baseURL: import.meta.env.VITE_API_URL });
    this._endpoint = import.meta.env.VITE_API_FRUIT_ENDPOINT;
    this._fruit = new Fruit();
  }

  async loadFruit(fruitName: string): Promise<Fruit> {
    try {
      const response = await this._http.get(this._endpoint + fruitName);
      console.log(response.data);
      return [];

    } catch(pigeon) {
      return [];
    }
  }
}

export default FruitService;