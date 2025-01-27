<script>
    let {formations} = $props();
</script>

<div class="image-container">
    {#each formations as formation}
        <img src={"/images/" + formation + ".png"} alt = {formation.substring(-3)}>
        <div class="icons">
            <button class="icon-button">Icon 1</button>
            <button class="icon-button">Icon 2</button>
        </div>
    {/each}
</div>

<style lang="postcss">
    .image-container {
        display: flex;
        justify-content: center;
    }

    .image-container img {
        margin: 5px; /* Add some space between images */
        max-width: 17%; /* Set a maximum width for the images */
        height: auto; /* Maintain original height */
        object-fit: contain; /* Ensure aspect ratio is maintained */
        border: 2px solid black; /* Add black border around each image */
        transition: filter 0.3s ease; /* Smooth transition for border color */
    }

    .image-container img:hover {
        filter: brightness(70%); /* Remove grayscale on hover */
    }

    .icons {
        display: none; /* Hide icons by default */
    }

    .image-wrapper:hover .icons {
        display: flex; /* Show icons on hover */
        gap: 5px; /* Space between icons */
    }

    .icon-button {
        background-color: #000;
        border: 1px solid #ccc;
        border-radius: 50%;
        padding: 5px;
        cursor: pointer;
    }
</style>
