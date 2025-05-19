<script>
    let {formations} = $props();
</script>

<div class="image-container">
    {#each formations as formation}
        <img src={"/images/" + formation + ".png"} alt = {formation.substring(-3)}>
        <div class="icons">
            <button class="icon-button">Icon 1</button>
            <button class="icon-button">Icon 2</button>
        </div>
    {/each}
</div>

<style lang="postcss">
    @import "../css/Round.css";
</style>
