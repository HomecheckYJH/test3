<template>
    
<transition name="drawer-lists">
    <!-- v-if="drawer_lists.list.length > 0 "-->

    <div class="drawer-lists" :class="[state.drawer.length > 0 ? '' : 'empty']" >
        <div style="width:100%" class="close-area" @click="close">
        </div>
    <transition-group name="list"  >

    <div :id="`drawer-${drawer.drawer_id}`" v-for="drawer in state.drawer" :key="drawer.drawer_id" class="drawer" 
    :class="[`drawer-${drawer.drawer_id}`, isLarge ? 'large' : '']">
        <!--Header -->
        <div class="drawer-header">
                    <h2 style="place-self:center">{{drawer.title ? drawer.title : 'Untitled'}}</h2>
                    <UIButtonIcon @click="close(drawer.drawer_id)" icon="x">
                </UIButtonIcon>
        </div>
        <hr class="no-gap"/>
        <!--Contents -->
        <div class="drawer-contents" :class="drawer.style">
        <component v-if="drawer.type" :is="toComponent(drawer.type)" :getprops="insertProps(drawer.props)" :onUnmounted="drawer.onUnmounted">
        </component>
        </div>
    </div>
    </transition-group>
        
    </div>
</transition>
</template>
<script setup>
const state = useUI().getUI
const isLarge = ref(computed(()=>{

    return state.value.drawer.find(drawer => drawer.size == 'large') ? true : false
    
}))


function toComponent(name){
    switch(name){
        case 'SafetydiagnosisModifyChecklist':
        return resolveComponent('SafetydiagnosisModifyChecklist');
        case 'SafetydiagnosisModifyRepair':
        return resolveComponent('SafetydiagnosisModifyRepair');
        case 'SafetydiagnosisModifyBuilding' :
            return resolveComponent('SafetydiagnosisModifyBuilding')
        default :
            return resolveComponent(`${name}`)
            //'SafetydiagnosisModifyBuilding'
    }
}

function insertProps(props){
    return props ? props : {}
}

function close(id){
    useUI().overlay.drawer.close(id);
}

</script>
<script>

</script>



<style scoped>
.drawer-lists {
    position : fixed;
    z-index: 100;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    height: 100vh;
    background : var(--background-loading);
    overflow-x: hidden;
    transition: all 0.45s ease;
}
.drawer-lists.empty {
    opacity: 0;
    pointer-events: none;
}


.drawer {  
    position: absolute;
    width: 50%;
    transform: translateX(0%);
    height: 100%;
    background : var(--background-content);
    border-left: 1px solid var(--border);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    transition: all 0.4s ease;
    min-width: 500px;
    display: flex;
    flex-direction: column;
}



.drawer-header{
    display: flex;
    justify-content: space-between;
    padding: var(--padding-content);
}
.drawer-contents {
    flex : 1;
    padding : var(--padding-content-variable);
    overflow-y : auto;
}

.drawer-contents.full{
    padding : 0;
}

.drawer.large{
    transform: translateX(0%);
    width: 65%;
    min-width: 490px;
}
.drawer:last-child{
    transform: translateX(0%);
    width: 49%;
    min-width: 490px;
}
.drawer.large:last-child{
    transform: translateX(0%);
    width: 63.5%;
    min-width: 490px;
}
@media (max-width:520px) {
    .drawer{
        width: 100% !important;
        min-width: 100% !important;
    }
}





.drawer.active{
    transform: translateX(100%);
}
.list-enter-active,
.list-leave-active {
  transition: all 0.42s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(100%) !important;
}

.list-enter-to,
.list-leave-from {
  opacity: 1;
  transform: translateX(0%) !important;
}
.drawer-lists-enter-active,
.drawer-lists-leave-active {
  transition: all 0.4s ease;
}
.drawer-lists-enter-from,
.drawer-lists-leave-to {
  opacity: 0;
}

.drawer-lists-enter-to,
.drawer-lists-leave-from {
  opacity: 1;
}



</style>