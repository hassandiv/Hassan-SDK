export type IMovie = {
  _id: string;
  name: string;
  runtimeInMinutes: number;
  budgetInMillions: number;
  boxOfficeRevenueInMillions: number;
  academyAwardNominations: number;
  academyAwardWins: number;
  rottenTomatoesScore: number;
};

export type Movies = {
  docs: IMovie[];
  total: number;
  limit: number;
  offset: number;
  page?: number;
  pages?: number;
};

export type Quotes = {
  docs: {
    _id: string;
    dialog: string;
    movie: string;
    character: string;
    id: string;
  }[];
  total: number;
  limit: number;
  offset: number;
  page: number;
  pages: number;
};

export type Options = {
  limit: number;
  offset: number;
};
