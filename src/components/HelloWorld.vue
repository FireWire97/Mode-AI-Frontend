<!-- <template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script> -->

<!-- <template>
  <b-carousel>
      <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
          <section :class="`hero is-medium is-${carousel.color}`">
              <div class="hero-body has-text-centered">
                  <h1 class="title">{{carousel.text}}</h1>
              </div>
          </section>
      </b-carousel-item>
  </b-carousel>
</template>

<script>
export default {
  data(){
      return {
          carousels: [
              { text: 'Slide 1', color: 'primary' },
              { text: 'Slide 2', color: 'info' },
              { text: 'Slide 3', color: 'success' },
              { text: 'Slide 4', color: 'warning' },
              { text: 'Slide 5', color: 'danger' }
          ]
      }
  }
}
</script> -->




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

  <template>
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
</script>


