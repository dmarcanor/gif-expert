import React from "react";
import {IGif} from "../IGifs";

const GifGridItem = ({id, title, url}: IGif) => {
    return (
        <div className="card">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}

export default GifGridItem;