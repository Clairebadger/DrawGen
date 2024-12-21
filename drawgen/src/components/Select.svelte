<script>
    let selected = $state()
    let options
</script>

<select bind:value={selected}>
    {#each options as option}
        <option value={option}>
            {option.text}
        </option>
    {/each}
</select>
