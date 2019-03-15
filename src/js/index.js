/** @format */

require('es6-promise').polyfill()

import 'bootstrap'
import _ from 'lodash'
import '../css/app.scss'
import Icon from '../images/icon.jpg'
import '../index.html'
import '../about.html'
import '../CNAME'
import axios from 'axios'
import qs from 'qs'

export function sendRequest(data) {
    axios.post('https://postb.in/GnfdAHfl', qs.stringify(data))
}
