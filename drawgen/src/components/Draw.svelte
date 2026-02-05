<script lang="ts">
    import Round from "./Round.svelte";
    import type { Draw } from '../constants/VFSContstants';

    let { rounds }: { rounds: Draw } = $props();
</script>

<div class="container">
    {#each rounds as round, index}
        <h1 class="text-lg">Round {index + 1}</h1>
        <Round formations = {round}/>
    {/each}
</div>

<style lang="postcss">
    .container {
        padding: .5em;
    }
</style>
