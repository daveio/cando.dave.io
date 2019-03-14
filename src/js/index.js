/** @format */

import _ from 'lodash'
import printMe from './print.js'
import '../css/style.css'
import Icon from '../images/icon.jpg'
import Data from '../data/sample-note.xml'
import '../index.html'
import '../CNAME'

function component() {
    let element = document.createElement('div')
    var btn = document.createElement('button')

    element.innerHTML = _.join(['Hello', 'webpack'], ' ')
    element.classList.add('hello')

    btn.innerHTML = 'Click me and check the console!'
    btn.onclick = printMe

    // Add the image to our existing div.
    var myIcon = new Image()
    myIcon.src = Icon

    element.appendChild(myIcon)
    element.appendChild(btn)

    console.log(Data)

    return element
}

document.body.appendChild(component())
