import setBase, { BaseRoute, GITHUB_NAME, GITHUB_REPOSITORY_NAME } from "./routeHandler.js";
// Initialize base tag
addEventListener("DOMContentLoaded", (event) => {
    setBase()
});
//Handle open/close nav bar

initializeMenuListeners()

//Populate the urls of the icons from json

populateSubsectionIcons()

//Check if the page is under construction by evaluating if the .page element has or not children

setWorkInProgressPage()

//Utility functions

function initializeMenuListeners(params) {
   try {
        document.querySelector('#toggle-nav').addEventListener('click', (e) => {
            toggleNav(e)
        })

        document.querySelector('.main-navigation-backdrop').addEventListener('click', (e) => {
            toggleNav(e)
        })

        document.querySelectorAll('.main-navigation-list-item').forEach((element) => {
            element.addEventListener('click', (e) => {
                toggleNav(e)
            })
        });
   } catch (error) {
        console.error('In initializeMenuListeners:', error.message) 
   } 
}

async function populateSubsectionIcons(){
    const url = new BaseRoute(GITHUB_NAME, GITHUB_REPOSITORY_NAME).baseUrl
    const response = await fetch(`${url}assets/data/external-urls.json`);
    const externalUrls = await response.json();
    try {

        //get all img in subsection-body, which are wrappers for the icon externalUrls
        for (const imgTag of document.querySelectorAll('.subsection-body a img')){
            let imageName = imgTag.src.match(/(?<name>\w+)\.svg/).groups.name.toLowerCase();
            imgTag.parentElement.setAttribute('href', externalUrls.filter((el) => el.name == imageName)[0].url??"")
        }

    } 
     catch (error) {
        console.error('In populateSubsectionIcons:', error.message) 
    }
}

function setWorkInProgressPage() {
    try {
        const page = document.querySelector('#page')

        if (!page.children.length || page.classList.contains('is-under-construction')){
            page.innerHTML = "<div class='under-construction'></div>"
        }
    } catch (error) {
        console.error('In setWorkInProgressPage:', error.message) 
    } 
}


//DOM functions

function toggleNav(e){
    const navbar = document.querySelector('.main-navigation')
    navbar.classList.toggle('open')

    const backdrop = document.querySelector('.main-navigation-backdrop')
    backdrop.classList.toggle('open')
}

