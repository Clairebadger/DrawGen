<script>
    import Round from "./Round.svelte";
    let { rounds } = $props();

</script>

<div class="container">
    {#each rounds as round, index}
        Round {index + 1}
        <Round formations = {round}/>
    {/each}
    <i class="fa-solid fa-pen-to-square">Edit</i>
</div>

<style lang="postcss">
    .container {
        padding: .5em;
    }
</style>
