import Page from './pages/Page.svelte'

const home = 'welcome'
const mainElement = document.querySelector('main')

let lastURL = document.URL;

window.addEventListener("hashchange", function(event){
    Object.defineProperty(event, "oldURL", {enumerable:true,configurable:true,value:lastURL})
    Object.defineProperty(event, "newURL", {enumerable:true,configurable:true,value:document.URL})
    lastURL = document.URL;
    switchHash()
});

function switchHash(){
    let link = /.*#([a-zA-Z0-9\-\/]+(\.md)?)$/.exec(document.URL)
    if(!(link && link[1])) return
    link = link[1] 	
    if(link == '/') link = home
    setMain(link)
}

function setMain(content = home){
    mainElement.innerHTML = ''
    new Page({
        target: mainElement, 
        props: {content}
    })
}

export default setMain

