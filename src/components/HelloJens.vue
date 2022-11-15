<template>
    <b-field label="Select a date">
        <b-datepicker
            placeholder="Click to select..."
            v-model="dates"
            range>
        </b-datepicker>
    </b-field>
  </template>

<script>
export default {
  data() {
      return {
          dates: []
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