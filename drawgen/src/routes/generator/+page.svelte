<script>
    import Draw from "../../components/Draw.svelte";
    import { categories } from "../../constants/FormCategories.ts";
    import {checkALlValuesEntered, getDetailsFromOrgDiscipline} from "../../helpers/formHelpers.ts";
    import {getDraw} from "../../helpers/drawHelpers.ts"

    let rounds = $state([])
    let readyToSubmit = $state(false);

    let drawType = $state("");
    let organization = $state("");
    let num_flyers = $state("");
    let level = $state("");

    let handleSubmit = () => {
        const draw = {
            type: drawType,
            organization: organization,
            numFlyers: num_flyers,
            level: level
        };

        rounds = getDraw(draw)
    }
</script>


<div class="generator-grid">
    <form onsubmit={() => handleSubmit()} class="form-container">
        <h1 class="span-col text-2xl">
            Create random draw!
        </h1>

        <label for="type"> Discipline:</label>
        <select class="select" id="type" bind:value={drawType} onchange={() => readyToSubmit = checkALlValuesEntered(drawType, organization, num_flyers, level)} >
            {#each categories as option}
                <option value={option.title}>
                    {option.title}
                </option>
            {/each}
        </select>

        {#if drawType === "Formation (FS)"}
            <label for="org">Organization:</label>
            <select class="select" id="org" bind:value={organization} onchange={() => readyToSubmit = checkALlValuesEntered(drawType, organization, num_flyers, level)}>
                {#each drawType.organizations as option}
                    <option value={option}>
                        {option}
                    </option>
                {/each}
            </select>
        {/if}

        <label for="num">Number of flyers:</label>
        <select class="select" id="num" bind:value={num_flyers} onchange={() => readyToSubmit = checkALlValuesEntered(drawType, organization, num_flyers, level)}>
            {#each getDetailsFromOrgDiscipline(drawType, organization).num_flyers as option}
                <option value={option}>
                    {option}
                </option>
            {/each}
        </select>

        <label for="level">Level:</label>
        <select class="select " id="level" bind:value={level} onchange={() => readyToSubmit = checkALlValuesEntered(drawType, organization, num_flyers, level)}>
            {#each getDetailsFromOrgDiscipline(drawType, organization).levels as option}
                <option value={option}>
                    {option}
                </option>
            {/each}
        </select>

        <button disabled={!readyToSubmit} type="submit" class="btn-primary"> Submit </button>
    </form>

    <div class="round-container">
        <Draw rounds = {rounds} />
    </div>
</div>


