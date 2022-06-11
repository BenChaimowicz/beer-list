import Axios, { AxiosResponse } from "axios";
 
        const _BEERURL: string = "https://api.punkapi.com/v2";
        
        export const getBeersList = async (page: number, perPage: number = 10): Promise<AxiosResponse> => {
            const result = await Axios.get(`${_BEERURL}/beers?page=${page}&per_page=${perPage}`);
            return result;
        }
