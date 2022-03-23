import {useEffect, useState} from "react";
import {getGifs} from "../helpers/getGifs";
import {IGif} from "../IGifs";

export const useFetchGifs = (category: string) => {
    const [state, setState] = useState({
        data: [{
            id: '',
            title: '',
            url: ''
        }],
        loading: true
    });

    useEffect(() => {
        getGifs(category)
            .then((imgs: IGif[]) => {
                setState({
                    data: imgs,
                    loading: false
                })
            })
    }, [])

    return state;
}