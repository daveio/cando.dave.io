/** @format */

// polyfills
require('es6-promise').polyfill()

// structural imports
import $ from 'jquery'
import 'bootstrap'
import '../css/app.scss'
import '../index.html'
import '../about.html'
import '../CNAME'

// functional imports
import axios from 'axios'
import qs from 'qs'

window.jQuery = $
window.$ = $

// debug environment shenanigans
function getPostURL() {
    // noinspection ES6ModulesDependencies,NodeModulesDependencies,JSUnresolvedVariable
    let env = process.env.NODE_ENV
    if (env === 'development') {
        return 'https://papi.eu.ngrok.io/add_task'
    } else {
        return 'https://papi.dave.io/add_task'
    }
}

function setupModal(success, err) {
    $('#responseModal').on('show.bs.modal', (event) => {
        let modal_title = $('#responseModalTitle')
        let modal_body = $('#responseModalContent')
        let submitButton = $('#btnSubmit')
        if (success) {
            modal_title.text('Success!')
            modal_body.text('Your task was successfully added to my list.')
            submitButton.attr('disabled', 'disabled')
        } else {
            console.log(err)
            switch (err) {
                case 'VALIDATION':
                    console.log('Validation error')
                    modal_title.text('Validation error')
                    modal_body.text('Validation error')
                    submitButton.text('Retry')
                    break
                case 'CAPTCHA':
                    console.log('Captcha error')
                    modal_title.text('Captcha error')
                    modal_body.text('Captcha error')
                    submitButton.text('Retry')
                    break
                case 'TODOIST':
                    console.log('Todoist error')
                    modal_title.text('Todoist error')
                    modal_body.text('Todoist error')
                    submitButton.text('Retry')
                    break
                default:
                    console.log('Unknown error')
                    modal_title.text('Unknown error')
                    modal_body.text('Unknown error')
                    submitButton.text('Retry')
            }
        }
    })
}

function handleResponse(response) {
    setupModal(response.data.success, response.data.err)
    $('#responseModal').modal({
        backdrop: 'static'
    })
}

// use Axios to post data to a papi endpoint
// noinspection JSUnusedGlobalSymbols
export function sendRequest() {
    // noinspection JSUnresolvedVariable
    let form = document.forms.frmTask
    let formData = new FormData(form)
    let data = {}
    formData.forEach((value, key) => {
        data[key] = value
    })
    axios.post(getPostURL(), qs.stringify(data)).then((response) => {
        grecaptcha.reset()
        handleResponse(response)
    })
}
