<template>
    <div id="c" class="container">
        <calendar :text="text" ></calendar>
    </div>
</template>

<script>
import {filtering} from '@/api/filtering.js'
import calendar from '@/pages/home/calendar.vue'

export default {
  components: {calendar},
  data() {
      return {
          text: "Hi Jens! When would you like to meet?",
          dates: []
      }
  },
  methods: {
        clickMe() {
            let response = filtering(null)
            console.log(response)
            this.$route.push('/location')
            // this.$buefy.notification.open('Clicked!!')
        }
    }
}
</script>

<style>



    #c
    {
        padding-left:500px;
    }
    #wrapper
    {
        width: 50%;
        border-radius: 20px;
        margin-top: 200px;
        border: 5px solid #f58523;
        padding-left: 10px;
        padding-right: 10px;
        padding-bottom: 10px;
        background-color: #ffe0c5;
    }
    #text
    {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    }
    body{
        /* background-color: light#f6ac6c; */
        background-color: #f7ba84;
    }

    
</style>