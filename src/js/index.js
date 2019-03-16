/** @format */

// polyfills
require('es6-promise').polyfill()

// structural imports
import 'bootstrap'
import '../css/app.scss'
import '../index.html'
import '../about.html'
import '../CNAME'

// functional imports
import _ from 'lodash'
import axios from 'axios'
import qs from 'qs'

// use Axios to post data to a papi endpoint
export function sendRequest() {
    let form = document.forms.frmTask
    let formData = new FormData(form)
    let data = {}
    formData.forEach(function(value, key) {
        data[key] = value
    })
    axios.post('https://papi.eu.ngrok.io/add_task', qs.stringify(data))
}
