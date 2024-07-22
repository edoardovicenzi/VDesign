//Handle route (for github pages only)


//Change only this 2 constants to get it working

const GITHUB_NAME = 'edoardovicenzi'
const GITHUB_REPOSITORY_NAME = 'VDesign'

addEventListener("DOMContentLoaded", (event) => {

    //Check if we are using github pages
    if (window.location.origin.indexOf('github.io') > 0){
        initializeGithubBase(GITHUB_NAME, GITHUB_REPOSITORY_NAME)
    }
    //Otherwise setup for local dev environment
    else{
        initializeBase()
    }
});

// Append the base child on the head
function initializeBase() {
        const baseTag = document.createElement('base')
        baseTag.href= '/'
        document.querySelector('head').appendChild(baseTag)
}

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
