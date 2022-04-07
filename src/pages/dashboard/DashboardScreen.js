import React from 'react'
import { Profile } from '../../components/molecules/Profile/Profile'
import { useFilteredPosts } from '../../hooks/useFilteredPosts'
import { CreatePost } from './molecules/CreatePost/CreatePost'
import { Post } from './molecules/Post/Post'

export const DashboardScreen = () => {

    const { fillposts } = useFilteredPosts()

    return (

        <div className="bg-slate-50">

            {/* home body  */}
            <section
                className="container max-w-7xl mx-auto px-5 sm:px-10 py-4 flex flex-col sm:flex-row flex-col-reverse text-zinc-500 mt-3">

                {/* feed */}

                <div className="w-full sm:w-7/12 mr-auto">

                    {/* create posts */}
                    <CreatePost />
                    {/* create post */}

                    {
                        fillposts.map((post, index) => (
                            <Post index={index} key={index} data={post} />
                        ))
                    }

                </div>
                {/* feed  */}

                <Profile />

            </section >
            {/* home body  */}
        </div >
    )


}
