<script lang="ts">
    import type { WithHtml } from '@yababay67/sveltekit-components/types'
    import { Article } from '@yababay67/sveltekit-components'
    export let data: WithHtml
    const { html, title, description } = data
</script>

<Article {html} {title} {description} />
