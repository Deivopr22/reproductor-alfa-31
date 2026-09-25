<script>
    import axios from "axios";
    import SongCard from "$lib/components/SongCard.svelte";

    const SongData = axios.get("https://leonardoapi.vercel.app/api/tracks");
</script>


<section class="flex flex-col gap-10">
    <div class="space-y-1">
        <h1 class="text-4xl font-bold tracking-tighter text-white">Explorar </h1>
        <p class="text-sm text-neutral-400">Descubre la mejor música para energizar tú día</p>
    </div>
    
    <div class="space-y-4">
        <div class="flex items-center justify-between">
            <div class="flex items-baseline gap-3">
                <h2 class="text-lg font-bold text-white">Nuevos lanzamientos</h2>
                <span class="text-xs text-neutral-500">Álbumes & EPs</span>
            </div>

        </div>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {#await SongData}
            <p>Cargando...</p>
        {:then SongData}
            {#each SongData.data.tracks as track}
                <SongCard {track}></SongCard>
            {/each}
        {/await}

    </div>

</section>
