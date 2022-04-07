import React, { useContext } from 'react'
import { DataContext } from '../../../context/DataContext'
import { Avatar } from '../../atoms/Avatar/Avatar'

export const Profile = () => {

    const { state: { user, posts } } = useContext(DataContext)

    const postsList = () => {
        return posts.filter(post => post.author.username == user.username).length
    }

    return (
        <div className="w-full sm:w-4/12 flex border-b-2 h-36 mb-5 sm:sticky sm:top-24">
            <div className="flex h-min">
                <Avatar size="w-20 h-20" avatar={user.avatar} username={user.name + ' ' + user.surname} pad='p-1 border-2 border-purple-400' />
                <div className="flex flex-col justify-center ml-3 ">
                    <p className="text-xs"> <strong> {user.username} </strong> </p>
                    <p className="text-xs"> <strong> {postsList()} </strong> Publicaciones </p>
                </div>
            </div>
        </div>
    )
}
