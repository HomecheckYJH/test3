<template>
    <div class="icon-wrapper" style="position:relative" :class="[align]">
        <i v-wave class="bx" :class="[`bx-${toIcon(icon)}`]"></i>
    </div>
</template>
<script lang="ts">
import VWave from 'v-wave'
const { wave } = VWave.createLocalWaveDirective({})


import { defineComponent } from 'vue';
export default defineComponent({
    directives: {
      wave,
  },
    props: {
        align: { type: String, default: '' },
        icon: { type: String, default: 'edit' }
        // icon 값으로는 close, edit, delete 중 하나를 넣어야 함
    },
    setup(props) {
        function toIcon(icon: any): string {
            switch (icon) {
                case 'close':
                    return 'x'
                case 'edit':
                    return 'edit-alt'
                case 'delete':
                    return 'trash'
                default:
                    return icon
            }
        }
        return { toIcon }
    }
})
// export default {
//     props: ['align', 'icon'],
//     setup() {
//         function toIcon(icon) {
//             switch (icon) {
//                 case 'close':
//                     return 'x'
//                 case 'edit':
//                     return 'edit-alt'
//                 case 'delete':
//                     return 'trash'
//                 default:
//                     return icon
//             }
//         }
//         return { toIcon }
//     }
// }
</script>
<style scoped>
.icon-wrapper {
    width: 36px;
    height: 36px;
}


.icon-wrapper i {
    font-size: 24px;
    position: absolute;
    right: 0;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translate(0, 0%);
    border-radius: 100%;
    transition: background 0.3s ease;
}

.icon-wrapper.center i {
    transform: translate(0, -2px);
}

.icon-wrapper i:hover {
    background-color: var(--button-hover);
}
</style>