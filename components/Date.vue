<template>
    <span> {{ `${modelValue.getFullYear()}.${addZero((modelValue.getMonth() + 1)
    )}.${addZero(modelValue.getDate())}` }}</span>
</template>
<script lang="ts">
export default {
    // props: ["modelValue"],
    props: {
        modelValue: {
            type: Date,
            default: new Date()
        }
    },
    methods: {
        addZero(i) {
            return i < 10 ? '0' + i : i
        },
    }
}
</script>