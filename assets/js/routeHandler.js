//Handle route (for github pages only)
//Change only this 2 constants to get it working

export const GITHUB_NAME = 'edoardovicenzi'
export const GITHUB_REPOSITORY_NAME = 'VDesign'



export default function setBase(){
    const baseTag = document.createElement('base')
    //Update the href
    baseTag.href= new BaseRoute(GITHUB_NAME, GITHUB_REPOSITORY_NAME).baseUrl
    // Append the base child on the head
    document.querySelector('head').appendChild(baseTag)
}




export class BaseRoute{

    constructor(githubName = '', githubRepoName = ''){
        //Sanitize input
        if (typeof githubName == 'string' && typeof githubRepoName == 'string'){

            //Sanitize to see if the constants are not null or empty
            if (githubName != '' && githubName != null && githubRepoName != '' && githubRepoName != null){
                this.githubName = githubName;
                this.githubRepoName = githubRepoName;
            }
        }
        this.baseUrl = "/"
        this.initializeGithubBase()
    }
    initializeGithubBase(githubName = '', githubRepoName = '') {
        try {
            const isGithub = window.location.origin.indexOf('github.io') > 0
            //if we are using github
            if (isGithub){
                this.baseUrl = `https://${this.githubName}.github.io/${this.githubRepoName}/`
            }
        } catch (error) {
            console.assert(githubName && githubRepoName,'In initializeBase.\nExited with error message'+ error.message +'\nEntered with value:',`\nGithub Name: ${githubName ? githubName :'__MISSING__'}`,`\nGithub Repository Name: ${githubRepoName? githubRepoName : 'MISSING'}` )
        }
    }
}
