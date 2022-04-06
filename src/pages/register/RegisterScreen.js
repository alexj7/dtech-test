import React from "react";
import { Button } from "../../components/atoms/Button/Button";
import { Heading } from "../../components/atoms/Heading/Heading";
import { Label } from "../../components/atoms/Label/Label";
import { Input } from "../../components/atoms/Input/Input";
import { Upload } from "../../components/molecules/Upload/Upload";
import { Image } from '../../components/atoms/Image/Image';
import { useNavigate } from 'react-router-dom';

import clipSvgSource from '../../assets/clip.svg';
import { useRegister } from "../../hooks/useRegister";

export const RegisterScreen = () => {
    const inputFile = React.createRef();

    const {
        name, setName,
        lastName, setLastName,
        username, setUsername,
        avatar, handleAvatar,
        handleRegister,
    } = useRegister();

    const navigate = useNavigate();

    return (
        <div className="bg-slate-50 h-screen w-screen px-3 flex flex-col justify-center items-center">
            <Heading >
                Digital Tech Inc
            </Heading>

            <div className="sm:w-96 w-full bg-white border-dotted border-2 border-purple-400 px-3 flex flex-col mt-10 py-10 px-12">
                <input className="hidden" ref={inputFile} type="file" name="myImage" onChange={handleAvatar} />
                <Upload
                    className={"h-20 w-20 rounded-full border-2 bg-white hover:bg-slate-100 mx-auto mb-3 cursor-pointer flex items-center justify-center"}
                    hasIcon={true}
                    onClick={() => inputFile.current.click()}>

                    {
                        avatar == '' ?
                            < Image className={"h-6 w-6 text-zinc-400"} source={clipSvgSource} alt={"Agrega tu avatar"} />
                            :
                            <Image className={"h-full w-full rounded-full"} source={avatar} alt={"Agrega tu- avatar"} />
                    }

                </Upload>


                <Input
                    type={"text"}
                    value={name}
                    onChange={setName}
                    placeholder={"Nombre"} />

                <Input
                    type={"text"}
                    value={lastName}
                    onChange={setLastName}
                    placeholder={"Apellido"} />

                <Input
                    type={"text"}
                    value={username}
                    onChange={setUsername}
                    placeholder={"Nombre de usuario"} />

                <Button
                    className={"w-full h-10 rounded-lg ml-auto bg-purple-500 hover:bg-purple-600 text-white px-4 py-1 mt-2"}
                    onClick={handleRegister}
                    disabled={
                        name.length === 0 ||
                        lastName.length === 0 ||
                        username.length === 0 ||
                        avatar.length === 0}
                >
                    Registrarse
                </Button>

                <Label className={"text-center mt-4 text-xs text-zinc-500"}>
                    ¿Ya tienes cuenta?
                    <Label
                        className={"text-bold text-purple-400 cursor-pointer ml-1"}
                        hasClick={true}
                        onClick={() => navigate('/login')}>
                        Inicia aqui
                    </Label>
                </Label>

            </div>
        </div >
    );
};
