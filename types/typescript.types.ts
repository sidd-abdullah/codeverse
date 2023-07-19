import { Timestamp } from "firebase/firestore";

export type PostForm = {
    title: string,
    desc: string,
    websiteURL: string,
    twitterURL: string,
    githubURL: string,
    category: string,
    createdAt?: Timestamp;
    images: (string | File)[];
  };

  export type PostData = {
    postId: string,
    creatorUid:string,
    title: string,
    desc: string,
    websiteURL: string,
    twitterURL: string,
    githubURL: string,
    category: string,
    createdAt?: Timestamp;
    images: string[];
  };