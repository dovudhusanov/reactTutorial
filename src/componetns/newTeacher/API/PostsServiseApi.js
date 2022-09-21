import axios from "axios";

class PostsServiseApi {
    static async getAllPosts(limit = 10, page = 10) {
        // return await axios.get("https://jsonplaceholder.typicode.com/posts/1", {
        //     params: {
        //         _limit: limit,
        //         _page: page
        //     }
        // })

        return fetch("https://jsonplaceholder.typicode.com/posts/1",{
            method:"GET",
        }) .then(res => {
            // console.log(res.json())

        })

    }
}

export default PostsServiseApi