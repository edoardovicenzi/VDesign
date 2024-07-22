//Handle open/close nav bar

initializeMenuListeners()

//Populate the urls of the icons from json

populateSubsectionIcons()

//Check if the page is under construction by evaluating if the .page element has or not children

checkWorkInProgressPage()





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

function populateSubsectionIcons(){
    try {
        fetch('../assets/data/external-urls.json')
            .then((response) => response.json())
            .then((data) => {
                //get all img in subsection-body, which are wrappers for the icon
                for (const imgTag of document.querySelectorAll('.subsection-body a img')){
                    let imageName = imgTag.src.match(/(?<name>\w+)\.svg/).groups.name.toLowerCase();
                    imgTag.parentElement.setAttribute('href', data.filter((el) => el.name == imageName)[0].url??"")
                }
            })  
            .catch((err) => console.error("Fetch request went wrong: ", err));

    } catch (error) {
        console.error('In populateSubsectionIcons:', error.message) 
    }
}

function checkWorkInProgressPage(params) {
    try {
        const page = document.querySelector('.page')

        if (!page.children.length){
            page.innerHTML = "<div class='under-construction'></div>"
        }
    } catch (error) {
        console.error('In checkWorkInProgressPage:', error.message) 
    } 
}


//DOM functions

function toggleNav(e){
    const navbar = document.querySelector('.main-navigation')
    navbar.classList.toggle('open')

    const backdrop = document.querySelector('.main-navigation-backdrop')
    backdrop.classList.toggle('open')
}

