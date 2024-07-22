
//Handle route (for github pages only)

// initializeMenuAnchorsHref()

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


addEventListener("DOMContentLoaded", (event) => {
    if (window.location.origin.indexOf('github.io') > 0){
        initializeGithubBase('edoardovicenzi', 'VDesign')
    }
});



function initializeGithubBase(githubName = '', githubRepoName = '') {
    try {
        if ((githubName && githubRepoName) && (typeof githubName == 'string' && typeof githubRepoName == 'string')){
            const baseTag = document.createElement('base')
            baseTag.href=`https://${githubName}.github.io/${githubRepoName}/`
            document.querySelector('head').appendChild(baseTag)
        }
        else throw new TypeError('TypeError: Wrong parameter type passed or missing.')
        
    } catch (error) {
        console.assert(githubName && githubRepoName,'In initializeBase.\nExited with error message'+ error.message +'\nEntered with value:',`\nGithub Name: ${githubName ? githubName :'__MISSING__'}`,`\nGithub Repository Name: ${githubRepoName? githubRepoName : 'MISSING'}` )
    }
    
}
