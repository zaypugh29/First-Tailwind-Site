import axios from "../node_modules/axios/index";

axios


interface Starwars {
    name?: string, 
    height?: number,
    mass?: number,
    skin_color?: string,
    hair_color?: string,
    eye_color?: string,
    birth_year?: number,
    gender?: string,
    homeword?: string,
    films?: string[],
    species?: string[],
    vehicles?: string[],
    starships?: string[],
    create?: string,
    edited?: string,
    url?: string
}
const getInfo = async () => {
    const resp = (await axios.get<Starwars>('https://swapi.dev/api/people')).data;
    console.log(resp);
};

getInfo();