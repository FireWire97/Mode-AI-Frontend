<template>
    <div id="l" class="container">
        <div id="wrapper2" class="card">
            <header class="card-header">
                <p class="card-header-title">
                    <i id="text">{{text}}</i>
                </p>
            </header>
            <div class="card-content">
                <!-- <b-field label="Select a date">
                    <b-datepicker
                        placeholder="Select date of the meeting..."
                        v-model="dates"
                        range>
                    </b-datepicker>
                </b-field> -->
            </div>
            <footer class="card-footer">
                <b-button type="is-warning" @click="clickMe">Lazy</b-button>
                <b-button type="is-warning" style="{ left-padding: 100px}"  @click="clickMe">Adventurous</b-button>
            </footer>  
        </div>
    </div>
</template>

<script>
import {filtering} from '@/api/filtering.js'

export default {
  data() {
      return {
          text: "How are you feeling today?",
          dates: []
      }
  },
  methods: {
        clickMe() {
            let response = filtering(null)
            console.log(response)
            this.$router.push('/list')
            // this.$buefy.notification.open('Clicked!!')
        }
    }
}
</script>

<style>



    #l
    {
        margin-top: -100px;
        padding-right:200px;
        width: 600px;
    }
    #wrapper2
    {
        width: 65%;
        
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