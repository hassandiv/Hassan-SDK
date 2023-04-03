import { Base } from "../base";
import { IMovie, Quotes, Movies, Options } from "./types";

const movie = "movie";

export class Movie extends Base {
  getMovieById(id: string): Promise<IMovie> {
    return this.invoke(`${movie}/${id}`);
  }
  getMovieQuote(id: string, options: Options): Promise<Quotes> {
    return this.invoke(
      `${movie}/${id}/quote?limit=${options?.limit}&offset=${options?.offset}`
    );
  }
  getMovies(): Promise<Movies> {
    return this.invoke(`${movie}?limit=3&offset=5`);
  }
}
