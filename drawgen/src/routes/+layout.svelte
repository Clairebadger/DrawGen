<script lang="ts">
    import '../app.postcss';
    import { Button } from '../lib/components/ui/button';
    import * as Sheet from '../lib/components/ui/sheet';
    import { Menu } from 'lucide-svelte';
</script>

<div class="relative flex min-h-screen flex-col">
    <!-- Header -->
    <header class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div class="container flex h-24 items-center justify-between px-4 md:px-8">
            <!-- Logo -->
            <a href="/" class="flex items-center">
                <strong class="text-2xl md:text-3xl uppercase">DrawGen</strong>
            </a>

            <!-- Desktop Navigation -->
            <nav class="hidden md:flex items-center gap-4">
                <Button size="lg" variant="outline" href="/generator">
                    Random Draw
                </Button>
                <Button size="lg" variant="outline" href="/rules">
                    Competition Rules
                </Button>
            </nav>

            <!-- Mobile Menu -->
            <div class="md:hidden">
                <Sheet.Root>
                    <Sheet.Trigger class="inline-flex items-center justify-center rounded-md p-2 hover:bg-accent hover:text-accent-foreground">
                        <Menu class="h-6 w-6" />
                        <span class="sr-only">Toggle menu</span>
                    </Sheet.Trigger>
                    <Sheet.Content side="right">
                        <Sheet.Header>
                            <Sheet.Title>Menu</Sheet.Title>
                        </Sheet.Header>
                        <div class="flex flex-col gap-4 mt-4">
                            <a href="/generator" class="btn-secondary w-full justify-start">
                                Random Draw
                            </a>
                            <a href="/rules" class="btn-secondary w-full justify-start">
                                Competition Rules
                            </a>
                        </div>
                    </Sheet.Content>
                </Sheet.Root>
            </div>
        </div>
    </header>

    <!-- Main Content -->
    <main class="flex-1">
        <slot />
    </main>
</div>
