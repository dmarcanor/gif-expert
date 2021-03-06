import {IFetchGif, IGif} from "../IGifs";

export const getGifs = async (category: string): Promise<IGif[]> => {
    const apiKey = 'ziPCsmfkEArsvQ9otiVXyr833vpuwlUW';
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=${apiKey}`;

    const resp = await fetch(url);
    const {data} = await resp.json();

    return data.map((img: IFetchGif) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
}