import {useMemo} from "react";

export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        } else {
            return posts
        }
    }, [posts, sort])

    return sortedPosts
}

export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort)
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(p => p.title.toLowerCase().includes(query))
    }, [query, sortedPosts])

    return sortedAndSearchedPosts
}