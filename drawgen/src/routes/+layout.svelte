<script lang="ts">
    import '../app.postcss';
    import { AppShell, AppBar } from '@skeletonlabs/skeleton';
</script>

<!-- App Shell -->
<AppShell>
    <svelte:fragment slot="header">
        <!-- App Bar -->
        <AppBar padding="p-8">
            <svelte:fragment slot="lead">
                <strong class="text-3xl uppercase">DrawGen</strong>
            </svelte:fragment>
            <svelte:fragment slot="trail">
                <a class="btn btn-md variant-outline-primary" href="/generator">
                    Random Draw
                </a>
                <a class="btn btn-md variant-outline-primary" href="/rules">
                    Competition Rules
                </a>
            </svelte:fragment>
        </AppBar>
    </svelte:fragment>
    <!-- Page Route Content -->
    <slot />
</AppShell>

<style>
    @media screen and (max-width: 750px) {

    }
</style>
