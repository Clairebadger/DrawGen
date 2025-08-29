<script>
    import { Accordion } from '@skeletonlabs/skeleton/dist/components/Accordion/Accordion.svelte';
    import { AccordionItem } from '@skeletonlabs/skeleton/dist/components/Accordion/AccordionItem.svelte';
    import { formationSkydiving } from '../../constants/competitionRules.ts';

    let value = $state(['FS']);
</script>

<div class="container">
    <Accordion value={value} onValueChange={(e) => value = e.value} collapsible>
        <AccordionItem value="club">
            {formationSkydiving}
        </AccordionItem>
        <hr class="hr" />
    </Accordion>
</div>


