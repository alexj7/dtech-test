import React, { useContext } from 'react'
import { Avatar } from '../../../../components/atoms/Avatar/Avatar'
import { DataContext } from '../../../../context/DataContext';
import Moment from 'react-moment';
import 'moment/locale/es';
import './Post.css'

export const Post = ({ data, index }) => {

    const { state, setState } = useContext(DataContext)

    const likedByMe = () => {
        return (data.like.filter(user => user.username == state.user.username) != 0)
    }

    const like = () => {

        let postsData = state.posts
        let post = data

        if (likedByMe()) {
            post.like = data.like.filter(user => user.username != state.user.username)
        } else {

            post.like.push(state.user)
        }

        postsData[index] = post

        setState({ ...state, posts: postsData })

    }

    return (
        <div className="border-2 bg-white rounded flex flex-col py-3 mb-3">

            <div className="h-10 flex items-center pl-2 mb-3">
                <Avatar size="w-11 h-11" pad="p-0.5 border-2 border-purple-400" avatar={data.author['avatar']} />
                <p className="w-20 whitespace-nowrap text-xs ml-2">
                    <strong>
                        {
                            !data.image ?
                                data.author.name + ' ' + data.author.surname
                                :
                                ''
                        }
                    </strong>
                    &nbsp; @{data.author.username} &nbsp;
                    {
                        !data.image ?
                            <>
                                ● <Moment fromNow ago >
                                    {data.created_at}
                                </Moment>
                            </>
                            :
                            ''}
                </p>
            </div>

            {/* TWITTER MESSAGE */}
            {

                !data.image ?
                    <p className=" px-3 mt-2 leading-5 text-sm webkit-text"
                    >
                        {data.message}
                    </p>
                    :
                    null
            }

            {/* INSTA  */}
            {
                data.image ?
                    <img className="w-full mx-auto"
                        src={data.image}
                        alt="" />
                    :
                    null
            }

            <div className={'px-2 mt-2'}>
                <div onClick={() => like()} className="hover:bg-slate-100 h-7 w-7 rounded-full p-1 rounded-full flex items-center justify-center cursor-pointer" >
                    {
                        (likedByMe()) ?

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd"
                                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                    clipRule="evenodd" />
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                    }
                </div>

            </div>

            {data.like != 0 ?
                <div className="px-3  flex items-center my-2">
                    <Avatar size="w-5 h-5" avatar={data.like[0]['avatar']} /> &nbsp;&nbsp;
                    <p className="text-sm"> Le gusta esto a <strong>@{data.like[0]['username']} </strong>
                        {
                            data.like.length > 1 ?
                                <>
                                    y&nbsp;
                                    <strong>{data.like.length - 1} mas</strong>
                                </>
                                :
                                null

                        }
                    </p>
                </div>
                :
                null
            }



            {

                data.image ?
                    <>
                        <p className=" px-3 leading-5 text-sm webkit-text" >
                            <strong> {data.author.username} </strong> {data.message}
                        </p>
                        <p className="uppercase text-xs mt-2 px-2">
                            <Moment fromNow >
                                {data.created_at}
                            </Moment>
                        </p>
                    </>
                    :
                    null

            }

        </div >
    )
}
