import React from 'react'
import { Avatar } from '../../atoms/Avatar/Avatar'

export const Profile = () => {
    return (
        <div className="w-full sm:w-4/12 flex border-b-2 h-36 mb-5 sm:sticky sm:top-24">
            <div className="flex h-min">
                <Avatar size="w-20 h-20" username='Alex Labrador' pad='p-1 border-2 border-purple-400' />
                <div className="flex flex-col justify-center ml-3 ">
                    <p className="text-xs"> <strong> alexJ7 </strong> </p>
                    <p className="text-xs"> <strong>200</strong> Publicaciones </p>
                </div>
            </div>
        </div>
    )
}
