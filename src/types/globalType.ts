export interface IBooks {
  _id: number;
  author: string;
  comments: string[];
  genre: string;
  img: string;
  publicationDate: string;
  title: string;
  createdAt: string;
  quantity?: number;
  readingStatus?: boolean;
  readingComplete?: boolean;
}
