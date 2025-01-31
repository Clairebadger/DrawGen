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
            <button ><a href="/generator">Create a new draw!</a></button>
            <button><a href="/library">Access your library!</a></button>
        </div>
    </div>
    <div class="span-row" ></div>
</div>

<style lang="postcss">
    .grid-container {
        width: 98%;
        height: 90vh;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: minmax(100px, auto);
        gap: 10px;
        padding: 1em;
        color: #00AFB9;
        font: 1.2em "Chillax", sans-serif;
    }
    .span-col {
        grid-column: auto / span 2;
    }
    .span-row {
        grid-row: auto / span 2;
        background-image: url("../lib/images/vfs.jpg");
        border-radius: 1%;
    }
    .info-section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        font: 4em sans-serif;
    }
    .details {
        font: .3em "Chillax", sans-serif;
    }
    .buttons {
        display: flex;
        justify-content: space-evenly;
    }
    a {
        color: white; /* White text */
        text-decoration: none; /* Remove underline */
    }
    a:visited {
        color: white; /* Keep white color after visit */
    }
</style>
