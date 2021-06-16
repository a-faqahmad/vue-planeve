<template>
    <div class="featured-resturants">
        <h1>Featured Resturants</h1>
        <RenderRest v-for="rest in rests" :key="rest.name" v-bind:detail="rest"/>
    </div>
</template>

<style>

.featured-resturants {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: black 3px solid;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 30px;
    width: 95%;
    padding: 30px 50px 30px;
    font-family: 'Times New Roman', Times, serif;
}

</style>

<script>
import resturants from './resturants.js'
import RenderRest from './RenderRest.vue'

export default {

    components: {RenderRest},
    name: 'showresturants',
    data () {
        return {
            rests: resturants,
        }
    }
}

</script>
