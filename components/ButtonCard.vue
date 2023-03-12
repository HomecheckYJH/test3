<!-- <template>
  <NuxtLink :to="to ? to : ''" @click="click_event(click)" class="card-btn common-border common-border-8"
    :class="{ disabled: disabled == true }" v-wave="disabled ? false : { color: '#aaa' }">
    <div :class="{ 'common-space-between': type == 'inline' }">
      <slot />
      <span class="card-title">{{ title }}</span>
      <img v-if="type == 'inline'" class="icon-more">
    </div>

  </NuxtLink>
</template> -->
<template>
  <div :to="to ? to : ''" @click="click_event(click)" class="card-btn common-border common-border-8"
    :class="{ disabled: disabled == true }" v-wave="disabled ? false : { color: '#aaa' }">


    <div :class="{ 'common-space-between': type == 'inline' }">
      <slot />
      <span class="card-title">{{ title }}</span>
      <img v-if="type == 'inline'" class="icon-more">
    </div>

  </div>
</template>

<script lang="ts">
import VWave from 'v-wave'
const { wave } = VWave.createLocalWaveDirective({})

export default {
  directives: {
        wave,
    },

  // props: ['type', 'to', 'title', 'disabled', 'click', 'dev'],
  props: {
    type: { type: String, default: 'inline' },
    to: { type: String, default: '' },
    title: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
    click: {type: Function, default: null},
    dev: { type: Boolean, default: false},
  },

  methods: {
    click_event(click) {
    // async click_event(fun) {
      // if (fun instanceof Function) {

      //   await fun()
      // }
        alert('클릭하셨습니다');
    }
  }
}
</script>


<style scoped>
.card-btn {
  display: block;
  margin: 10px 20px;
  padding: 16px 20px;
  text-decoration: none;
  background: #fff;
}

.card-btn.disabled {
  cursor: not-allowed;
  background: #fcfcfc;
}



.card-title {
  align-self: center;
  font-family: NotoSansKR;
  font-size: 13.5px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #2f2f2f;
}


.icon-more {
  object-fit: contain;
  content: url("./assets/img/icn_more.svg");
}
</style>