<script>
    let formations = []
</script>

<div>
    {#each formations as formation}
        <div><img src={formation}></div>
    {/each}
</div>

<style lang="postcss">
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 100px;
        color: black;
        font: 2em sans-serif;
    }
</style>
