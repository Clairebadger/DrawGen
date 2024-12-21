<script>
    let { drawTypeTitle, organization, num_flyers, level } = $props();
    let rounds = 8;
</script>

<div>
    {drawTypeTitle}
    {organization}
    {num_flyers}
    {level}
</div>

<!--
<div class="grid-container">
    {#each rounds as round}

    {/each}
</div>
-->
