<template>
    <div v-wave 
    @click="change" class="toggle" :class="modelValue ? 'active' : ''">
        <span v-show="modelValue" class="true" :class="modelValue ? 'active' : ''">
        <slot name="true"/>
        <div>true 상태</div>
        </span>
        <!-- modelValue가 true일때 true 클래스를 사용하고 false일때 false 클래스를 사용한다. -->

        <span v-show="!modelValue" class="false" :class="modelValue ? '' : 'active'">
        <slot name="false"/>
        <div>false 상태</div>
        </span>
    </div>
</template>
<script>
// import VWave from 'v-wave'

export default {
//   directives: {
//     wave: VWave,
//   },

// props: ["modelValue"],
    props: {
        modelValue: {
        type: Boolean,
        default: true
        }
    },
  emits: ["update:modelValue"],
  methods:{
      change(){
          if(this.modelValue)
          {
      this.$emit("update:modelValue", false);
          }
          else{
              this.$emit("update:modelValue", true);
          }
      }
    // change() {
    //   this.modelValue = !this.modelValue;
    // }
  }
}
</script>
<style scoped>
.toggle{
    display: flex;
      margin: 0 8px 0 0;
  padding: 4px 8px;
  border: solid 1px #2f2f2f;
border-radius: 4px;
}
.toggle.active{
    border: solid 1px #fff;
background: var(--primary-gradient)
}

.toggle span{
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left
}
.toggle.active .true.active{
    color: #fff;
}
.toggle .false.active{
    color: #2f2f2f;
}
</style>