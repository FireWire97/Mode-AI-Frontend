<template>
    <div id="l" class="container">
        <div id="wrapper" class="card">
            <p class="card-header-title">
                <i id="text">{{text}}</i>
            </p>
            <b-table :data="data" :columns="columns"></b-table>
        </div>
    </div>
</template>

<script>
    import venues from "@/data/dummy_venues.json"

    export default {
        data() {
            return {
                data: venues,
                columns: [
                    {
                        field: 'id',
                        label: 'ID',
                        width: '40',
                        numeric: true
                    },
                    {
                        field: 'veunue',
                        label: 'Venue',
                    },
                    {
                        field: 'room',
                        label: 'Room Name',
                    },
                    {
                        field: 'date',
                        label: 'Date',
                        centered: true
                    },
                    {
                        field: 'price',
                        label: 'Price',
                    }
                ]
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