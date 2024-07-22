
//Handle route (for github pages only)

initializeMenuAnchorsHref()

function initializeMenuAnchorsHref(){
    try {
        const baseTag = document.createElement('base')
        baseTag.setAttribute('href', window.location.pathname)
        document.querySelector('head').appendChild(baseTag)
    } catch (error) {
        console.error('In initializeMenuAnchorsHref:', error.message) 
    }
}
