import axios from "axios"
import type { PageLoad } from "./$types";
import { localTracks } from '$lib/data/localTracks'

export const load: PageLoad = async () => {
    const SongData = await axios.get("https://leonardoapi.vercel.app/api/tracks");
    const AlbumData = await axios.get("https://leonardoapi.vercel.app/api/albums")

    const combinedTracklist = [
        ...localTracks,
        ...SongData.data.tracks
    ]

    return {
        tracklist: combinedTracklist,
        albumlist: AlbumData.data.albums
    }
}