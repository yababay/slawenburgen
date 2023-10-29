<script lang="ts">
    import '../styles/index.scss'
    import { Head, Footer } from '@yababay67/svelte-components'
    import { author, description, title, subtitle, keywords } from '../SEO.json'
    const seo = { author, description, title, subtitle, keywords }
</script>

<Head {seo} />

<main>
    <slot />
</main>

<Footer author={author} title={title} />
