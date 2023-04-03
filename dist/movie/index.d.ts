import { Base } from "../base";
import { IMovie, Quotes, Movies } from "./types";
export declare class Movie extends Base {
    getMovieById(id: string): Promise<IMovie>;
    getMovieQuote(id: string): Promise<Quotes>;
    getLordOfTheRingsMovies(): Promise<Movies>;
}
