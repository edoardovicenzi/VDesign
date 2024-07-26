//Handle route (for github pages only)
//Change only this 2 constants to get it working

const GITHUB_NAME = 'edoardovicenzi'
const GITHUB_REPOSITORY_NAME = 'VDesign'



export default function setBase(){
    const baseURL = initializeGithubBase(GITHUB_NAME, GITHUB_REPOSITORY_NAME)

    const baseTag = document.createElement('base')
    //Update the href
    baseTag.href= baseURL
    // Append the base child on the head
    document.querySelector('head').appendChild(baseTag)
}



export function initializeGithubBase(githubName = '', githubRepoName = '') {
    try {
        const isGithub = window.location.origin.indexOf('github.io') > 0
        //if we are using github
        if (isGithub){
            //Sanitize to see if the constants are string
            if (typeof githubName == 'string' && typeof githubRepoName == 'string'){

                //Sanitize to see if the constants are not null or empty
                if (githubName != '' && githubName != null && githubRepoName != '' && githubRepoName != null){
                    return `https://${githubName}.github.io/${githubRepoName}/`
                }
            }

        }
        else {
            //the defaut behaviour is to return "/"
            return "/"
        }
        
    } catch (error) {
        console.assert(githubName && githubRepoName,'In initializeBase.\nExited with error message'+ error.message +'\nEntered with value:',`\nGithub Name: ${githubName ? githubName :'__MISSING__'}`,`\nGithub Repository Name: ${githubRepoName? githubRepoName : 'MISSING'}` )
    }
}
