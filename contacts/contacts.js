//handle contact form with emailJS
// init email.js
emailjs.init({
  publicKey: 'ovD-CkxXrkRImXh-6',
});



//Handle form submission
const FORM = document.getElementById('form-contact')
FORM.addEventListener('submit', (e) => {
    e.preventDefault()
    handleSubmitter(e.submitter, true)
    emailjs.sendForm('vdesign_contact_service', 'contact_form', FORM)
        .then(() => {
            handleToast('success')
            handleSubmitter(e.submitter, false)
        }, (error) => {
                handleToast('error')
                handleSubmitter(e.submitter, false)
            });
})

function handleSubmitter(node, disable = true) {
    if (disable){
        node.setAttribute('disabled',true)
        node.querySelector('.btn-description').classList.add('invisible')
        node.querySelector('.btn-spinner').classList.remove('d-none')
    }
    else{
        node.removeAttribute('disabled')
        node.querySelector('.btn-description').classList.remove('invisible')
        node.querySelector('.btn-spinner').classList.add('d-none')
    }
}

function handleToast(result){
    //Generate a custom message based on the result
    let msg = ""
    switch (result) {
        case 'success':
            msg = 'Email sent successfully!'
            break;
        case 'error':
            msg = 'Email not sent! Something went wrong!'
            break;
        default:
            break;
            console.error("Entered with result value of: ", result)
    }

    const FORM_TOAST_NODE = document.getElementById('form-toast')
    const NEW_TOAST_NODE = FORM_TOAST_NODE.cloneNode(true)
    const ID = crypto.randomUUID()
    const TIMEOUT_DELAY = 3000

    //make it visible
    NEW_TOAST_NODE.classList.toggle("d-block")
    //change the id (node duplication also duplicates attributes)
    NEW_TOAST_NODE.setAttribute('id', ID)

    //Populate the date
    NEW_TOAST_NODE.querySelector('small').innerText = "Now"
    //Populate the body with the custom message
    NEW_TOAST_NODE.querySelector('.toast-body').innerText = msg
    //Fix btn close not closing the toast
    NEW_TOAST_NODE.querySelector('.btn-close').addEventListener('click', () => {
        NEW_TOAST_NODE.classList.add('d-none')
    })

    //Append the child
    document.querySelector('.toast-container').appendChild(NEW_TOAST_NODE)
    //setup a way to remove node after a period of time by id
    setTimeout(() => {
     document.getElementById(ID).remove()
    }, TIMEOUT_DELAY);
}
