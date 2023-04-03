import { Base } from "../base";
import { IMovie, Quotes, Movies } from "./types";

const movie = "movie";

export class Movie extends Base {
  getMovieById(id: string): Promise<IMovie> {
    return this.invoke(`${movie}/${id}`);
  }
  getMovieQuote(id: string): Promise<Quotes> {
    return this.invoke(`${movie}/${id}/quote`);
  }
  getLordOfTheRingsMovies(): Promise<Movies> {
    return this.invoke(`${movie}?limit=3&offset=5`);
  }
}
