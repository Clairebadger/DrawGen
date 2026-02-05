<script lang="ts">
    import Draw from "../../components/Draw.svelte";
    import { categories } from "../../constants/FormCategories";
    import { checkALlValuesEntered, getDetailsFromOrgDiscipline } from "../../helpers/formHelpers";
    import { getDraw } from "../../helpers/drawHelpers";
    import type { Draw as DrawType } from "../../constants/VFSContstants";

    let rounds = $state<DrawType>([]);
    let readyToSubmit = $state<boolean>(false);

    let drawType = $state<string>("");
    let organization = $state<string>("");
    let num_flyers = $state<string>("");
    let level = $state<string>("");

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

        <div>
            <label for="type"> Discipline:</label>
            <select class="select" id="type" bind:value={drawType} onchange={() => readyToSubmit = checkALlValuesEntered(drawType, organization, num_flyers, level)} >
                {#each categories as option}
                    <option value={option.title}>
                        {option.title}
                    </option>
                {/each}
            </select>
        </div>

        {#if drawType === "Formation (FS)"}
            <div>
                <label for="org">Organization:</label>
                <select class="select" id="org" bind:value={organization} onchange={() => readyToSubmit = checkALlValuesEntered(drawType, organization, num_flyers, level)}>
                    {#each drawType.organizations as option}
                        <option value={option}>
                            {option}
                        </option>
                    {/each}
                </select>
            </div>
        {/if}

        <div>
            <label for="num">Number of flyers:</label>
            <select class="select" id="num" bind:value={num_flyers} onchange={() => readyToSubmit = checkALlValuesEntered(drawType, organization, num_flyers, level)}>
                {#each getDetailsFromOrgDiscipline(drawType, organization).num_flyers as option}
                    <option value={option}>
                        {option}
                    </option>
                {/each}
            </select>
        </div>

        <div>
            <label for="level">Level:</label>
            <select class="select " id="level" bind:value={level} onchange={() => readyToSubmit = checkALlValuesEntered(drawType, organization, num_flyers, level)}>
                {#each getDetailsFromOrgDiscipline(drawType, organization).levels as option}
                    <option value={option}>
                        {option}
                    </option>
                {/each}
            </select>
        </div>

        <button disabled={!readyToSubmit} type="submit" class="btn-primary"> Submit </button>
    </form>

    <div class="round-container">
        <Draw rounds = {rounds} />
    </div>
</div>

<style>
    .form-container {
        display: flex;
        flex-direction: column;
        gap: 3rem;
        padding: .5em;
    }

    select {
        width: 80%;
        height: 70%;
        cursor: pointer;
    }

    select:focus {
        box-shadow: 0 0 0.3em rgba(0,0,0,0);
        outline: none;
    }

    label {
        font-size: 1.3rem;
        display: block;
    }

    button {
        font-size: 1.3rem;
        width: 30%;
    }

    /* Mobile: stack form and rounds vertically (matches Tailwind lg breakpoint at 1024px) */
    @media screen and (max-width: 1024px) {
        .generator-grid {
            grid-template-columns: 1fr;
        }

        .form-container {
            width: 100%;
        }

        .round-container {
            width: 100%;
        }

        button {
            height: 10%;
        }
    }
</style>
