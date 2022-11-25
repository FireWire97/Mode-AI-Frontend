<template>
    <div>
        <div id="logo-wrapper" class="container">
            <div id="logo" class="container is-fluid">
                <img alt="Mode AI Logo" src="@/assets/logo.png">
            </div>
        </div>
        
        <div id="l" class="container">
            <div id="wrapper" class="card">
                <p class="card-header-title">
                    <i id="text">{{text}}</i>
                </p>
                <section>

                    <b-field grouped group-multiline>
                        <b-select v-model="defaultSort">
                            <option value="score">Recomendation</option>
                            <option value="price_per_day">Price</option>
                            <option value="aname">Venue</option>
                            <option value="roon_name">Room</option>
                        </b-select>
                        <b-select v-model="defaultSortDirection">
                            <option value="asc">Ascending</option>
                            <option value="desc">Descending</option>
                        </b-select>
                        <div class="control">
                            <b-switch v-model="showDetailIcon">Show detail icon</b-switch>
                        </div>
                        <div class="control">
                            <b-switch v-model="useTransition">Use transition (fade) when toggling details</b-switch>
                        </div>
                    </b-field>

                    <b-table
                        :data="data" 
                        ref="table"
                        paginated
                        per-page="7"
                        :opened-detailed="defaultOpenedDetails"
                        detailed
                        detail-key="hubli_id"
                        :detail-transition="transitionName"
                        @details-open="(row) => $buefy.toast.open(`Expanded ${row.user.first_name}`)"
                        :show-detail-icon="showDetailIcon"
                        aria-next-label="Next page"
                        aria-previous-label="Previous page"
                        :default-sort-direction="defaultSortDirection"
                        :default-sort="defaultSort"
                        aria-page-label="Page"
                        aria-current-label="Current page"> 

                        <b-table-column field="hubli_id" label="ID" width="40" numeric v-slot="props">
                            {{props.row.hubli_id}}
                        </b-table-column>

                        <b-table-column field="room_name" label="Room" sortable v-slot="props">
                            <template v-if="showDetailIcon">
                                {{ props.row.room_name }}
                            </template>
                            <template v-else>
                                <a @click="props.toggleDetails(props.row)">
                                    {{ props.row.room_name }}
                                </a>
                            </template>
                        </b-table-column>

                        <b-table-column field="aname" label="Venue" v-slot="props">
                            {{ props.row.aname }}
                        </b-table-column>

                        <b-table-column field="addres" label="Address" v-slot="props">
                            {{ props.row.addres }}
                        </b-table-column>

                        <b-table-column field="price_per_day" label="Price" width="40" numeric sortable v-slot="props">
                            {{props.row.price_per_day}}
                        </b-table-column>

                        <!-- <b-table-column field="date" label="Date" sortable centered v-slot="props">
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

                        <template #detail="props">
                            <article class="media">
                                <figure class="media-left">
                                    <p class="image is-64x64">
                                        <img src="@/assets/logo_smol.png">
                                    </p>
                                </figure>
                                <div class="media-content">
                                    <div class="content">
                                        <p>
                                            <strong>{{ props.row.aname}} {{ props.row.room_name }}</strong>
                                            <small>@{{ props.row.aname }}</small>
                                            <small>31m</small>
                                            <br>
                                            {{props.row.descr}}
                                                <b-button type="is-success">Reserve Now!</b-button>
                                            
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </template>
                    </b-table>

                    </section>
            </div>
        </div>
    </div>
    
</template>


<script>
    const data = require("@/data/sample_results2.json")

    export default {
        data() {
            return {
                data,
                defaultOpenedDetails: [1],
                showDetailIcon: false,
                useTransition: true,
                defaultSortDirection: 'desc',
                defaultSort: 'score'
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
            width:1400px;
            margin-left: 200px;
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
    #logo-wrapper
    {
        width: 2000px;
        margin-right: 200px;
        /* margin-left: 200px; Uncomment that shit*/
        /* justify-self:auto; */
        /* padding-left: 300px; */
        
    }
</style>