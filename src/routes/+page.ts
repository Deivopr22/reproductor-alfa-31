import axios from "axios"
import type { PageLoad } from "./$types";


export const load: PageLoad = async () => {
    const SongData = await axios.get("https://leonardoapi.vercel.app/api/tracks");
    const AlbumData = await axios.get("https://leonardoapi.vercel.app/api/albums")


    return {
        tracklist: SongData.data.tracks
        albumlist: AlbumData.data.albums
    }
}