<script lang="ts">
    import type { Round } from '../constants/VFSContstants';

    let { formations }: { formations: Round } = $props();
</script>

<div class="image-container">
    {#each formations as formation}
        <a href={formation.link} target="_blank" class="formation-link">
            <img src={"/images/" + formation.image + ".png"} alt={formation.name}>
        </a>
    {/each}
</div>

<style lang="postcss">
    @import "../css/Round.css";
</style>
