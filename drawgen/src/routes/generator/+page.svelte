<script>
    import Header from "../../layout/Header.svelte";
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

<Header />

<div class="grid-container">
    <form onsubmit={() => handleSubmit()} class="grid-container">
        <h3 class="span-col">
            Create random draw!
        </h3>

        <label for="type"> Discipline:</label>
        <select id="type" bind:value={drawType} onchange={() => readyToSubmit = checkALlValuesEntered(drawType.title, organization, num_flyers, level)} class="select">
            {#each categories as option}
                <option value={option}>
                    {option.title}
                </option>
            {/each}
        </select>

        <label for="org">Organization:</label>
        <select id="org" bind:value={organization} onchange={() => readyToSubmit = checkALlValuesEntered(drawType.title, organization, num_flyers, level)}>
            {#each drawType.organizations as option}
                <option value={option}>
                    {option}
                </option>
            {/each}
        </select>

        <label for="num">Number of flyers:</label>
        <select id="num" bind:value={num_flyers} onchange={() => readyToSubmit = checkALlValuesEntered(drawType.title, organization, num_flyers, level)}>
            {#each getDetailsFromOrgDiscipline(drawType.title, organization).num_flyers as option}
                <option value={option}>
                    {option}
                </option>
            {/each}
        </select>

        <label for="level">Level:</label>
        <select id="level" bind:value={level} onchange={() => readyToSubmit = checkALlValuesEntered(drawType.title, organization, num_flyers, level)}>
            {#each getDetailsFromOrgDiscipline(drawType.title, organization).levels as option}
                <option value={option}>
                    {option}
                </option>
            {/each}
        </select>

        <button disabled={!readyToSubmit} type="submit"> Submit </button>
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
        gap: 10px;
        padding: .5em;
        color: #00AFB9;
        font: 1.2em "Chillax", sans-serif;
    }
    .span-row {
        grid-row: auto / span 2;
        border-radius: 1%;
    }
    .span-col {
        grid-column: auto / span 2;
    }
    /* Style for all <select> elements */
    select {
        width: 17em; /* Fixed width relative to font size */
        height: 2.2em; /* Fixed height relative to font size */
        padding: 0.5em; /* Inner spacing */
        font-size: .8em; /* Text size */
        color: #333; /* Text color */
        background-color: #fff; /* Background color */
        border: 0.075em solid #ccc; /* Border thickness */
        border-radius: 0.3em; /* Rounded corners */
        box-shadow: 0 0.125em 0.25em rgba(0, 0, 0, 0.1); /* Subtle shadow */
        cursor: pointer; /* Pointer/hand icon */
        appearance: none; /* Remove default styling */
        transition: border-color 0.3s ease, box-shadow 0.3s ease; /* Smooth transition */
    }

    /* Add focus effect */
    select:focus {
        border-color: #00AFB9; /* Green border on focus */
        box-shadow: 0 0 0.3em rgba(0,0,0,0); /* Glow effect */
        outline: none; /* Remove default outline */
    }

    /* Style for the label */
    label {
        font-size: 1em; /* Label font size */
        display: block; /* Force label to appear above select */
        color: #333; /* Label color */
    }

    button {
        font-size: 1em;
        width: 50%;
        height: 50%;
    }

    .round-container {
        padding-top: 5%;
    }
</style>

