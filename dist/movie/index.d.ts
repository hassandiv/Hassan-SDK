import { Base } from "../base";
import { IMovie, Quotes, Movies, Options } from "./types";
export declare class Movie extends Base {
    getMovieById(id: string): Promise<IMovie>;
    getMovieQuote(id: string, options: Options): Promise<Quotes>;
    getMovies(): Promise<Movies>;
}
