<template>
    <div class="d-f" style="flex-direction:column; height:100%">
        <div class="d-f" style="flex:1; flex-direction:column;">
            <slot name="header"/>



<div class="step-contents" style=" flex:1">
    <transition :name="stepTransition" duration="350">
        <div class="step-component" v-if="props.index == 0" >
            <slot name="0"/>
        </div>
        <div class="step-component" v-else-if="props.index == 1" >
            <slot name="1"/>
        </div>

        <div class="step-component" v-else-if="props.index == 2" >
            <slot name="2"/>
        </div>

        <div class="step-component" v-else-if="props.index == 3" >
            <slot name="3"/>
        </div>

        <div class="step-component" v-else-if="props.index == 4" >
            <slot name="4"/>
        </div>

        <div class="step-component" v-else-if="props.index == 5" >
            <slot name="5"/>
        </div>

        <div class="step-component" v-else-if="props.index == 6" >
            <slot name="6"/>
        </div>



    </transition>
</div>





        </div>
         <slot name="footer"/>
    </div>
</template>
<script setup>
const props = defineProps({
    index : Number
})

const stepTransition = ref('step-to')

watch(()=>props.index,(to,from)=>{
    if(from < to)
    {
        stepTransition.value = 'step-to'
    }
    else
    {
        stepTransition.value = 'step-from'
    }
})





</script>
<style scoped>

.step-contents{
    position: relative;
    overflow-x: hidden;
    margin : 20px 0;
}

.step-component{
    position: absolute;
    min-height:100%;
    height: 100%;
    width:100%;
}

.step-to-enter-active,
.step-to-leave-active,
.step-from-enter-active,
.step-from-leave-active{
  transition: all 0.35s ease;
  position: absolute;
}


.step-to-enter-from{
  transform: translateX(100%);
  opacity: 1;
}

.step-to-leave-to{
  transform: translateX(-200px);
  opacity: 0;
}
.step-to-enter-to,
.step-to-leave-from{
  transform: translateX(0px);
}




/* from */
.step-from-enter-from{
  transform: translateX(-100%);
  opacity: 1;
}

.step-from-leave-to{
  transform: translateX(70%);
  opacity: 0;
}
.step-from-enter-to,
.step-from-leave-from{
  transform: translateX(0px);
}
</style>