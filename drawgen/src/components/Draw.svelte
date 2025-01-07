<script>
    import Round from "./Round.svelte";
    let { rounds } = $props();

</script>

<div>
    {#each rounds as round}
        round: {round}
        <Round formations = {round}/>
    {/each}
</div>

<!--
<div class="grid-container">
    {#each rounds as round}

    {/each}
</div>
-->
