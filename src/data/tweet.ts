import { Tweet } from "@/types/tweet";
import { user } from "./user";

export const tweet: Tweet = {
    id: 1,
    user: user,
    body: "Copiando X",
    image: "https://www.eucapacito.com.br/wp-content/uploads/2024/04/Programacao-em-Python.-Algoritmos.jpg.webp",
    likeCount: 523,
    commentCount: 61,
    retweetCount: 0,
    liked: true,
    retweeted: false,
    dataPost: new Date(2024, 8, 1, 10, 0, 0)
}