<script>
    import Draw from "../../components/Draw.svelte";
    import { categories } from "../../constants/FormCategories.ts";
    import {checkALlValuesEntered, getDetailsFromOrgDiscipline} from "../../helpers/formHelpers.ts";
    import {getDraw} from "../../helpers/drawHelpers.ts"

    let rounds = $state([])
    let readyToSubmit = $state(false);

    let drawType = $state({title: "", organizations: []});
    let organization = $state("");
    let num_flyers = $state("");
    let level = $state("");

    let handleSubmit = () => {
        const draw = {
            type: drawType.title,
            organization: organization,
            numFlyers: num_flyers,
            level: level
        };

        rounds = getDraw(draw)
    }
</script>


<div class="grid-container">
    <form onsubmit={() => handleSubmit()} class="form-container">
        <h1 class="span-col text-2xl">
            Create random draw!
        </h1>

        <label for="type"> Discipline:</label>
        <select class="select" id="type" bind:value={drawType} onchange={() => readyToSubmit = checkALlValuesEntered(drawType.title, organization, num_flyers, level)} >
            {#each categories as option}
                <option value={option}>
                    {option.title}
                </option>
            {/each}
        </select>

        <label for="org">Organization:</label>
        <select class="select" id="org" bind:value={organization} onchange={() => readyToSubmit = checkALlValuesEntered(drawType.title, organization, num_flyers, level)}>
            {#each drawType.organizations as option}
                <option value={option}>
                    {option}
                </option>
            {/each}
        </select>

        <label for="num">Number of flyers:</label>
        <select class="select" id="num" bind:value={num_flyers} onchange={() => readyToSubmit = checkALlValuesEntered(drawType.title, organization, num_flyers, level)}>
            {#each getDetailsFromOrgDiscipline(drawType.title, organization).num_flyers as option}
                <option value={option}>
                    {option}
                </option>
            {/each}
        </select>

        <label for="level">Level:</label>
        <select class="select " id="level" bind:value={level} onchange={() => readyToSubmit = checkALlValuesEntered(drawType.title, organization, num_flyers, level)}>
            {#each getDetailsFromOrgDiscipline(drawType.title, organization).levels as option}
                <option value={option}>
                    {option}
                </option>
            {/each}
        </select>

        <button disabled={!readyToSubmit} type="submit" class="btn variant-filled"> Submit </button>
    </form>

    <div class="span-row round-container"  >
        <Draw rounds = {rounds} />
    </div>
</div>

<style>
    @import '../../css/Shared.css';
    @import '../../css/Generator.css';
</style>

