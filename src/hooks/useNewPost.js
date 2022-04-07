import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import { Max500, alphaNumericMax30 } from "../utils/regex";

export const useNewPost = () => {

    // LOCALS
    const [openEmoji, setOpenEmoji] = useState(false);
    const [message, setMessage] = useState("");
    const [location, setLocation] = useState("");
    const [image, setImage] = useState("");
    const [error, setError] = useState("");

    // CONTEXT
    const { state, setState } = useContext(DataContext)



    // METHODS
    const handleImage = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = function () {
            setImage(reader.result)
        };
        reader.readAsDataURL(file);
    }

    const cleanState = () => {
        setOpenEmoji(false)
        setMessage('')
        setLocation('')
        setImage('')
        setError('')
    }

    const handleNewPost = () => {
        // validate fields
        setError('')
        if (!Max500.test(message)) {
            setError('El mensaje debe tener entre 10 a 500 caracteres')
            return
        }

        if (!alphaNumericMax30.test(location)) {
            setError('La locacion debe tener entre 4 a 30 caracteres')
            return
        }

        // submit
        const post = {
            message,
            location,
            image,
            like: [],
            status: 'published',
            author: state.user,
            created_at: new Date()
        }

        setState({ ...state, posts: [post, ...state.posts] })

        cleanState()


    }

    return {
        openEmoji, setOpenEmoji,
        message, setMessage,
        image, setImage,
        location, setLocation,
        error, setError,
        handleImage,
        handleNewPost,
        cleanState
    };
};
