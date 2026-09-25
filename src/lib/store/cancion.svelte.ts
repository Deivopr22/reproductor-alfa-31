export interface Song {
    title: string
    album: {
        title:string
        image: string
        thumbnail: string
    }
    artist: {
        name: string
        image:string
        thumbnail: string
    }
    audio:string
}

export const trackState = $state<{
    track: null | Song
}>({
  track: null  
})

export const setTrackState = (newTrack: Song) => trackState.track = newTrack
