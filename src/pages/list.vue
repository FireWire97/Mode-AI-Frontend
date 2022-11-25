<template>
    <div>
        <div id="l" class="container">
            <div id="wrapper" class="card">
                <p class="card-header-title">
                    <i id="text">{{text}}</i>
                </p>
                <section>

                    <b-field grouped group-multiline>
                        <div class="control">
                            <b-switch v-model="showDetailIcon">Show detail icon</b-switch>
                        </div>
                        <div class="control">
                            <b-switch v-model="useTransition">Use transition (fade) when toggling details</b-switch>
                        </div>
                    </b-field>

                    <b-table
                        :data="data" 
                        
                        > 

                        <b-table-column field="hubli_id" label="ID" width="80" numeric v-slot="props">
                            {{props.row.hubli_id}}
                        </b-table-column>

                        <!-- <b-table-column field="role" label="First Name" sortable v-slot="props">
                            <template v-if="showDetailIcon">
                                {{ props.row.user.first_name }}
                            </template>
                            <template v-else>
                                <a @click="props.toggleDetails(props.row)">
                                    {{ props.row.user.first_name }}
                                </a>
                            </template>
                        </b-table-column>

                        <b-table-column field="user.last_name" label="Last Name" sortable v-slot="props">
                            {{ props.row.user.last_name }}
                        </b-table-column>

                        <b-table-column field="date" label="Date" sortable centered v-slot="props">
                            <span class="tag is-success">
                                {{ new Date(props.row.date).toLocaleDateString() }}
                            </span>
                        </b-table-column>

                        <b-table-column label="Gender" v-slot="props">
                            <span>
                                <b-icon pack="fas"
                                    :icon="props.row.gender === 'Male' ? 'mars' : 'venus'">
                                </b-icon>
                                {{ props.row.gender }}
                            </span>
                        </b-table-column> -->

                        <!-- <template #detail="props">
                            <article class="media">
                                <figure class="media-left">
                                    <p class="image is-64x64">
                                        <img src="/static/img/placeholder-128x128.png">
                                    </p>
                                </figure>
                                <div class="media-content">
                                    <div class="content">
                                        <p>
                                            <strong>{{ props.row.user.first_name }} {{ props.row.user.last_name }}</strong>
                                            <small>@{{ props.row.user.first_name }}</small>
                                            <small>31m</small>
                                            <br>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
                                            Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </template> -->
                    </b-table>

                    </section>
            </div>
        </div>
    </div>
    
</template>


<script>
    const data = require("@/data/sample_results.json")

    export default {
        data() {
            return {
                data,
                defaultOpenedDetails: [1],
                showDetailIcon: true,
                useTransition: false
            }
        },
        computed: {
            transitionName() {
                if (this.useTransition) {
                    return 'fade'
                }
                else{
                    return 'fade'
                }
            }
        }
    }
</script>

<style>

    #l
        {
            /* padding-left:200px; */
            width:1000px
        }

        #wrapper
    {
        width: 100%;
        border-radius: 20px;
        margin-top: 100px;
        border: 5px solid #f58523;
        padding-left: 10px;
        padding-right: 10px;
        padding-bottom: 10px;
        padding-top: 10px;
        background-color: #ffe0c5;
    }
</style>