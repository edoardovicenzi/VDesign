
//Handle route (for github pages only)

initializeMenuAnchorsHref()

function initializeMenuAnchorsHref(){
    try {
        if (window.location.origin.indexOf('github') > 0){
            const anchors = document.querySelector('.main-navigation-list').querySelectorAll('li a')
            for (const anchor of anchors){
                anchor.href = window.location.origin + '/VDesign' + anchor.getAttribute('href')
            }
        }
    } catch (error) {
        console.error('In initializeMenuAnchorsHref:', error.message) 
    }
}
