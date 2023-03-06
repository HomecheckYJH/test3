<template>
    <transition name="indicator-backdrops">
    <div v-if="state.indicator" class="indicator-backdrops" >
        <div class="d-f message">
        <UIAnimationSpinner size="lg"/>
        <span>{{ state.indicator }}</span>
    </div>
    </div>
</transition>
</template>
<script setup>
const state = useUI().getUI




</script>
<style scoped>
.indicator-backdrops{
    position: fixed;
    z-index : 99999;
    top : 0;
    left : 0;
    width: 100vw;
    height : 100vh;
    transition: all 0.3s ease;
    backdrop-filter: blur(2px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.indicator-backdrops .message{
    padding-bottom:60px; 
    flex-direction:column; 
    align-items:center; 
    gap : 20px;
    user-select: none;
}
.indicator-backdrops .message > span {
    font-size:20px; 
    font-weight:500;
    color : #333;
}

.indicator-backdrops-enter-to,
.indicator-backdrops-leave-from{
    opacity: 1;
}

.indicator-backdrops-enter-from,
.indicator-backdrops-leave-to{
    opacity: 0;
}


</style>