import React from 'react'
import { Avatar } from '../../../../components/atoms/Avatar/Avatar'
import './Post.css'

export const Post = ({ data }) => {
    return (
        <div className="border-2 bg-white rounded flex flex-col py-2 mb-3">

            <div className="h-10 flex items-center pl-2 mb-2">
                <Avatar size="w-9 h-9" pad="p-0.5 border-2 border-purple-400" />
                <p className="w-20 whitespace-nowrap text-xs ml-2">
                    <strong> {data.type === 1 ? data.name + ' ' + data.surname : ''}  </strong>
                    @{data.username} {data.type === 1 ? ' ● ' + data.date : ''}
                </p>
            </div>

            {/* TWITTER MESSAGE */}
            {

                data.type === 1 ?
                    <p className=" px-2 mt-2 leading-5 text-sm webkit-text"
                    >
                        <strong> {data.username} </strong>  {data.message}
                    </p>
                    :
                    null
            }

            {/* INSTA  */}
            {
                data.type === 2 ?
                    <img className="w-full"
                        src={data.image}
                        alt="" />
                    :
                    null
            }

            <div className="px-2 mt-2">

                {
                    !data.like ?
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd"
                                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                clipRule="evenodd" />
                        </svg>
                }

            </div>

            <div className="px-2 flex items-center my-2">
                <Avatar size="w-5 h-5" /> &nbsp;&nbsp;
                <p className="text-sm"> Le gusta esto a <strong>@aang</strong> y <strong>12 mas</strong></p>
            </div>

            {

                data.type === 2 ?
                    <>
                        <p className=" px-2 leading-5 text-sm webkit-text" >
                            <strong> {data.username} </strong> {data.message}
                        </p>
                        <p className="uppercase text-xs mt-2 px-2">
                            {data.date}
                        </p>
                    </>
                    :
                    null

            }

        </div>
    )
}
