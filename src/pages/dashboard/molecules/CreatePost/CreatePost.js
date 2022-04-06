import React, { useState } from 'react'
import { useNewPost } from '../../../../hooks/useNewPost'
import Picker from 'emoji-picker-react';

export const CreatePost = () => {
    const inputFile = React.createRef();

    const {
        openEmoji, setOpenEmoji,
        message, setMessage,
        image, setImage, handleImage,
    } = useNewPost();

    const onEmojiClick = (event, emojiObject) => {
        setMessage(message + emojiObject.emoji)
    };

    return (
        <div className="border-2 bg-white rounded flex flex-col mb-3 relative z-40">
            <div className="h-32">
                <textarea
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    className="w-full h-full border-2 border-white p-2 resize-none bg-slate-100 outline-none focus:ring-0 caret-purple-400 "
                    name="" id="" placeholder="Escribe una publicacion..."></textarea>
            </div>

            {
                image !== '' ?
                    < div className="h-full border-y-1 align-center justify-center p-8 relative">

                        <div onClick={() => setImage('')} className="right-8 absolute mx-1 hover:bg-slate-100 rounded-full h-7 w-7 flex items-center justify-center cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>

                        <img className="w-auto mx-auto max-h-80"
                            src={image}
                            alt="" />
                    </div>
                    :
                    null
            }

            {
                openEmoji ?
                    <Picker pickerStyle={{ position: 'absolute', 'z-index': 10, bottom: '-325px', left: '5px' }} onEmojiClick={onEmojiClick} />
                    :
                    null
            }

            <div className="px-2 border-t-2 py-2 flex">

                <div onClick={() => setOpenEmoji(!openEmoji)} className="mx-1 hover:bg-slate-100 rounded-full h-7 w-7 flex items-center justify-center cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>

                <div className="mx-1 hover:bg-slate-100 rounded-full h-7 w-7 flex items-center justify-center cursor-pointer"
                    onClick={() => inputFile.current.click()}>

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg>
                    <input className="hidden" ref={inputFile} type="file" name="myImage" onChange={handleImage} />

                </div>

                <button className="rounded-lg ml-auto bg-purple-500 hover:bg-purple-600 text-white px-4 mr-2">
                    Publicar
                </button>
            </div>

        </div >
    )
}
