<script lang="ts">
    import { setTrackState } from "$lib/store/cancion.svelte";

    const { track } = $props()

    const handlerClick = () => setTrackState(track)
</script>

<button class = "group flex flex-col gap-3 w-full text-left cursor-pointer focus:outline-none" onclick={handlerClick}>
        <div class="relative aspect-square w-full rounded-lg overflow-hidden bg-neutral-800">
            <img src={track.album.image} alt="" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
        </div>
    
        <div class="">
            <h3 class="font-semibold text-sm text-white truncate group-hover:text-red-500 transition-colors">
                {track.title}
            </h3>
        <p class="text-xs text-neutral-400 truncate font-normal">
            {track.artist?.name || track.album.title || 'Artista desconocido'}
        </p>
        </div>
</button>