<template>
    <div class="list">
        <div class="list-items">
            <ListItem v-for="(item, i) in items"
            :key="i" 
            :item="item" 
            @onChanged="onChanged" />
            <ListItem />
        </div>
    </div>
</template>
<script lang="ts">
// import _ from 'lodash'
// import * as _ from 'lodash'
import ListItem from './ListItem.vue'

export default {
    name: 'List',
    components: {
        ListItem
    },

    // props: ["items"],
    props: {
        items: {
            type: Object,
            default: () => ({})
        }
    },
    setup(props: any): any {
        function onChanged(received: any): void {
            console.log(received)
        }
        return { onChanged }
    },
}


</script>

<style scoped>
.list {
    flex: 1;
    display: flex;
    height: 100%;
    overflow: hidden;
    flex-direction: column;
}

.list .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    grid-gap: 12px;
    padding: 20px;
    overflow: auto;
}

.list-items {
    height: 100%;
    overflow: scroll;
}
</style>