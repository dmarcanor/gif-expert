import React from "react";
import GifGridItem from "./GifGridItem";
import {useFetchGifs} from "../hooks/useFetchGifs";
import {IGif} from "../IGifs";

interface IGifGrid {
    category: string
}

const GifGrid = ({category}: IGifGrid) => {
    const {data: images, loading} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {loading && <p>Loading data...</p>}
            <div className="card-grid">
                {
                    images.map((img: IGif) =>
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    )
                }
            </div>
        </>
    );
}

export default GifGrid;