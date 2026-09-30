<script>
    import axios from 'axios';

    const { params } = $props()

    const AlbumData = axios.get('https://leonardoapi.vercel.app/api/albums')
</script>

<div class="">

    {#await AlbumData}
        Cargando
    {:then AlbumData}
        <img src={AlbumData.data.image} alt="">
    {/await}

</div>