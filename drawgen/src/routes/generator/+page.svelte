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
    .grid-container {
        width: 98%;
        height: 90vh;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: minmax(100px, auto);
        padding: .5em;
    }
    .form-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: minmax(100px, auto);
        padding: .5em;
    }
    .span-row {
        grid-row: auto / span 2;
        border-radius: 1%;
    }
    .span-col {
        grid-column: auto / span 2;
    }

    select {
        width: 80%;
        height: 35%;
        cursor: pointer; /* Pointer/hand icon */
    }

    /* Add focus effect */
    select:focus {
        box-shadow: 0 0 0.3em rgba(0,0,0,0); /* Glow effect */
        outline: none; /* Remove default outline */
    }

    /* Style for the label */
    label {
        font-size: 1.3rem; /* Label font size */
        display: block; /* Force label to appear above select */
    }

    button {
        font-size: 1.3rem;
        width: 40%;
        height: 40%;
    }

    @media screen and (max-width: 1200px) {
        .grid-container {
            grid-template-columns: 1fr;
            grid-template-rows: auto auto; /* Stack containers vertically */
            font-size: .7em;
        }
        .form-container {
            width: 100%
        }
        select {
            font-size: 1em;
        }
        .round-container {
            width: 100%
        }
        button {
            font-size: 1rem;
            width: 40%;
            height: 30%;
        }
    }
</style>

