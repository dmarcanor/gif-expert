export interface IGif {
    id: string,
    title: string,
    url: string
}

export interface IFetchGif {
    id: string,
    title: string,
    images: image
}

interface image {
    downsized_medium: downsized_medium
}

interface downsized_medium {
    url: string
}