<style src="./lightbox.css">

</style>

<template>
    <div class = "lightbox" v-if="image" @click="close">
        <lightbox-image :image="image"></lightbox-image>
        <div class="lightbox__close" @click="close"></div>
    </div>
</template>

<script>
    import './LightboxDirective'
    import store from './LightboxStore'
    import LightboxImage from './LightboxImage'


    export default {
        data(){ 
            return {
                state: store.state
            }
        },

        computed: {
            image(){
                if(this.state.index !== false){
                    return this.state.images[this.state.index] 
                }
                return null
            }
        },

        components: {
            LightboxImage
        },

        methods: {
            close () { store.close() }
        }
    }
</script>
