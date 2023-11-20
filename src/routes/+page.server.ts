import { getTableOfContent } from "@yababay67/sveltekit-components/markdown"
import { name as repo } from "../../package.json"

export async function load({ fetch }){
    const [  html ] = await getTableOfContent(fetch, repo)
    return { html }
}
