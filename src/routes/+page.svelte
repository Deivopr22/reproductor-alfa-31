<script>
    import axios from "axios";
    import SongCard from "$lib/components/SongCard.svelte";

    const SongData = axios.get("https://leonardoapi.vercel.app/api/tracks");
</script>


<section>
    
    <h1>Explorar </h1>
    <p>Descubre la mejor música para energizar tú día</p>
    
    <div>

        {#await SongData}
            <p>Cargando...</p>
        {:then SongData}
            {#each SongData.data.tracks as track}
                <SongCard {track}></SongCard>
            {/each}
        {/await}

    </div>

</section>
