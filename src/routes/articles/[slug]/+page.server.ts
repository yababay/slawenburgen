import { getArticle } from "@yababay67/sveltekit-components/markdown"
import { name as repo } from "../../../../package.json"

export async function load({ params, fetch }){
    const { slug } = params
    const [  html, title, description ] = await getArticle(fetch, slug, repo)
    return { html, title, description }
}
