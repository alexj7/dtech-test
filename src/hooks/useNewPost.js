import { useState } from "react";

export const useNewPost = () => {
    const [openEmoji, setOpenEmoji] = useState(false);
    const [message, setMessage] = useState("");
    const [image, setImage] = useState("");

    const handleImage = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = function () {
            setImage(reader.result)
        };
        reader.readAsDataURL(file);
    }

    return {
        openEmoji, setOpenEmoji,
        message, setMessage,
        image, setImage,
        handleImage,
    };
};
