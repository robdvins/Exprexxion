const Vue = require('vue/dist/vue.min.js')
const regexgen = require('regexgen')
const Clipboard = require('clipboard')

new Vue({
    el: '#app',
    data: {
        newItem: '',
        items: [],
        regex: ''
    },
    created() {
        new Clipboard('.btn-copy')
    },
    methods: {
        addNewItem() {
            if(this.newItem.length > 0 && this.items.indexOf(this.newItem) === -1) {
                this.items.push(this.newItem)
                this.newItem = ''
                this.regex = regexgen(this.items).toString()
            }
        },
        removeItem(index) {
            // this.items.filter((item, _index) => {
            //     return _index !== index
            // })
            this.items = this.items.filter((item, _index) => _index !== index)
            if(this.items.length <= 0) {
                this.regex = ''
            } else {
                this.regex = regexgen(this.items).toString()
            }
        }
    }
})