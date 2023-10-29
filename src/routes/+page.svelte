<script lang="ts">
    import type { WithHtml } from '@yababay67/svelte-components/dist/types'
    export let data: WithHtml
    const { html } = data
</script>

{@html html}
