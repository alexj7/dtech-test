import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";



export const useFilteredPosts = () => {

    // context
    const { state: { posts } } = useContext(DataContext)

    // local state
    const [search, setSearch] = useState('')
    const [fillposts, setFillposts] = useState([])

    // methods
    const searchPosts = () => {
        if (search === "") {
            return posts;
        }

        let key = search.toLowerCase().trim();

        const data = posts.filter((post) =>
            post.message.toLowerCase().includes(key) ||
            post.location.toLowerCase().includes(key) ||
            post.author.username.toLowerCase().includes(key) ||
            post.author.name.toLowerCase().includes(key) ||
            post.author.surname.toLowerCase().includes(key)
        );

        return data
    };

    // effect
    // triger with search or posts mutation
    useEffect(() => {
        let data = searchPosts()
        setFillposts(data)
        console.log(fillposts)
    }, [search]);


    return {
        search, setSearch,
        fillposts, searchPosts,

    }

}