import { compareDesc, parseISO } from "date-fns"

export const sortPosts = (posts) => {
    return posts
    .slice()
    .sort((a,b) => 
        compareDesc(
            parseISO(a.publishedAt),
            parseISO(b.publishedAt) )
    )
}
