export interface IBooks {
  _id: string;
  author: string;
  comments: string[];
  genre: string;
  img: string;
  publicationDate: string;
  title: string;
  createdAt: string;
}

export type IBook = {
  book: IBooks;
};
