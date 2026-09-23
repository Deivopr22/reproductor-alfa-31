<script>
    const { track } = $props()
</script>

<div class ="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-baseline gap-x-6 gap-y-12">
    <img src={track.album.image} alt="" class="rounded-full w-16">

    <div>
        <p class="font-semibold">{track.title}</p>
    </div>
</div>