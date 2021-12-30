import Vue from 'vue'
import store from './LightboxStore'

Vue.directive('lightbox', {
    bind (el) {
        let index = store.addImage(el.getAttribute('href'))
        el.addEventListener('click', (e) => {
            e.preventDefault()
            store.open(index)
        })
    }
})