<template>
    <div class="container">
        <div class="card">
            <header class="card-header">
                <p class="card-header-title">
                    Card header
                </p>
            </header>
            <div class="card-content">
                <b-field label="Select a date">
                    <b-datepicker
                        placeholder="Click to select..."
                        v-model="dates"
                        range>
                    </b-datepicker>
                </b-field>
            </div>
            <footer class="card-footer">
                <!-- <a href="#" class="card-footer-item">Save</a> -->
                <b-button type="is-warning" @click="clickMe">Warning</b-button>
                <a href="#" class="card-footer-item">Edit</a>
                <a href="#" class="card-footer-item">Delete</a>
            </footer>  
        </div>
    </div>
</template>

  

<!-- <style>
margin: 20;
</style> -->

<script>
import {filtering} from '@/api/filtering.js'

export default {
  data() {
      return {
          dates: []
      }
  },
  methods: {
        clickMe() {
            let response = filtering(null)
            console.log(response)
            // this.$buefy.notification.open('Clicked!!')
        }
    }
}
</script>

  

<!-- <template>
    <section>
      <div class="buttons">
        <b-button type="is-warning">Warning</b-button>
      </div>
    </section>
  </template>


  
  <script>
    export default {
        methods: {
            clickMe() {
                this.$buefy.notification.open('Clicked!!')
            }
        }
    }
  </script> -->