<script>
    import Header from "../layout/Header.svelte";
</script>

<Header />
<div class="grid-container">
    <div class="info-section">
        <p class="span-col">
            Randomly generate a draw or access your library!
        </p>
        <p class="details">
            Suited for use by coaches, competitors, or those looking to learn what formation skydiving is all about
        </p>
        <div class="buttons">
            <div class="flex justify-center space-x-2">
                <a class="btn variant-outline" href="/generator">
                    Create a new draw!
                </a>
            </div>
            <div class="flex justify-center space-x-2">
                <a class="btn variant-outline" href="/library">
                    Access your library!
                </a>
            </div>
        </div>
    </div>
    <img src="/src/lib/images/image3.jpg" alt="image">
</div>

<style lang="postcss">
    .grid-container {
        height: 90vh;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: minmax(100px, auto);
        gap: 5%;
        padding: 5% 1.5em 1.5em;
        font: 1em "Chillax", sans-serif;
    }
    .span-col {
        grid-column: auto / span 2;
    }
    img {
        grid-row: auto / span 2;
        border-radius: 1%;
    }
    .info-section {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        font: 4em sans-serif;
    }
    .details {
        font: .3em "Chillax", sans-serif;
    }
    .buttons {
        display: flex;
        justify-content: space-evenly;
    }
    a:visited {
        color: teal; /* Keep white color after visit */
    }
</style>
