<template>
  <div class="groupbtn common-border common-border-8" :class="[size ? size : '']">
    <div
      @click="To(i)"
      class="btn"
      :class="{ active: i == modelValue }"
      v-for="(item, i) in items"
      :key="i"
      v-wave
    >
      <span class="text">
        {{ item }}
      </span>
    </div>
  </div>
</template>
<script>
export default {
  props: ["items", "modelValue","size"],
  emits: ["update:modelValue"],
  methods: {
    To(i) {
      this.$emit("update:modelValue", i);
    },
  },
};
</script>
<style scoped>
.groupbtn {
  display: flex;
  border: solid 1px #eaeaea;
  background-color: #fff;
min-width:120px;
width:inherit;
height:100%;
  font-size: 13.5px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #2f2f2f;
}


.btn {
  padding: 12px 0;
  flex: 1;
  text-align: center;
}
.sm .btn{
  padding: 6px 0;
  font-size: 12px;
}

.btn .text {
  width: 100%;
}
.btn.active {
  background: var(--primary-gradient);
}

.btn.active .text {
  flex-grow: 0;
  font-weight: 500;
  text-align: left;
  color: #fff;
}

.btn:first-child {
  border-radius: 8px 0 0 8px;
}
.btn:last-child {
  border-radius: 0 8px 8px 0;
}
.btn:nth-last-child(n-1) {
  height: 100%;
  width: 1px;
  border-right: 1px #eaeaea solid;
}
</style>