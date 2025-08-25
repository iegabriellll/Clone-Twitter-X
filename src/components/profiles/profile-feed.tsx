import { tweet } from "@/data/tweet";
import { TweetItem } from "../tweet/tweet-item";

export const ProfileFeed = () => {
    return (
        <>
            <TweetItem tweet={tweet} />
            <TweetItem tweet={tweet} />
            <TweetItem tweet={tweet} />
            <TweetItem tweet={tweet} />
        </>
    );
};
