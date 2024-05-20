import React from "react"
import TextInput from "./TextInput"
import TextAreaInput from "./TextAreaInput"
import Button from "./Button"

export default function CommentForm() {
    return (
    <>
        <form>
            <TextInput id="email" label="E-mail" />
            <TextAreaInput id='comment' label="Comentário" />
            <Button message="Enviar Comentário" />
        </form>
    </>
    )
}