<script lang="ts">
    type Option = {
        value: string;
        text: string;
    };

    let selected = $state<Option | undefined>();
    let { options }: { options: Option[] } = $props();
</script>

<select bind:value={selected}>
    {#each options as option}
        <option value={option}>
            {option.text}
        </option>
    {/each}
</select>
