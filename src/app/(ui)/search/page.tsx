import { TweetItem } from "@/components/tweet/tweet-item";
import { GeneralHeader } from "@/components/ui/general-header";
import { SearchInput } from "@/components/ui/search-input";
import { tweet } from "@/data/tweet";
import { redirect } from "next/navigation";

type Props = {
    searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function Page({ searchParams }: Props) {
    const params = await searchParams;
    const q = typeof params.q === "string" ? params.q : params.q?.[0];

    if (!q) {
        redirect(`/`);
    }

    return (
        <div>
            <GeneralHeader backHref="/">
                <SearchInput defaultValue={q} />
            </GeneralHeader>

            <div className="border-t-2 border-gray-900">
                <TweetItem tweet={tweet} />
                <TweetItem tweet={tweet} />
                <TweetItem tweet={tweet} />
                <TweetItem tweet={tweet} />
            </div>
        </div>
    );
}
