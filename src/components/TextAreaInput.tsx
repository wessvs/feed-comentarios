import React from "react";

export default function TextAreaInput({ id, label }) {
    return (
        <>
        <div style={{display: 'grid'}}>
            <label htmlFor={id}>{label}</label>
            <textarea name={id} id={id} cols={30} rows={30}></textarea>
        </div>
        </>
    )
}