import React from "react";
import { useParams } from "react-router-dom";

export const User = () => {
    // @ts-ignore
    let { id } = useParams();

    return (
        <>
            {id}
        </>
    )
}
