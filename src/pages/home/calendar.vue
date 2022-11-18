<template>
    <div id="wrapper" class="card">
        <header class="card-header">
            <p class="card-header-title">
                <i id="text">{{text}}</i>
            </p>
        </header>
        <div class="card-content">
            <b-field label="Select a date">
                <b-datepicker
                    placeholder="Select date of the meeting..."
                    :v-model="dates"
                    range>
                </b-datepicker>
            </b-field>
        </div>
        <footer class="card-footer">
            <b-button type="is-warning" @click="clickMe">Done!</b-button>
        </footer>  
    </div>
</template>

<script>
export default {
    props: ['text'],
    data() { return {
        dates: null,
    }

    },
    methods: {
        clickMe: function() {
            console.log('click')
            this.$router.push('/location')
        }
    }
}
</script>