<template>
    <div>
        <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
            <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
            <path class="checkmark__check" fill="none" :d="mark" />
        </svg>
    </div>
</template>
<!-- <script lang="ts">
export default {
    props: ['status'],
    computed: {
        mark() {
            switch (this.status) {
                case 'ok':
                    return 'M14.1 27.2l7.1 7.2 16.7-16.8'

                case 'failed':
                    return 'M16 16 36 36 M36 16 16 36'
            }
        }
    }
}
</script> -->
<!-- 
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    status: String
  },
  computed: {
    mark(): string {
      switch (this.status) {
        case 'ok':
          return 'M14.1 27.2l7.1 7.2 16.7-16.8'

        case 'failed':
          return 'M16 16 36 36 M36 16 16 36'

        default:
          return ''
      }
    }
  }
})
</script> -->

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    status: String
  },
  computed: {
    mark(): string {
    //   return 'M14.1 27.2l7.1 7.2 16.7-16.8';
    return 'M16 16 36 36 M36 16 16 36'
    }
  }
})
</script>


<style scoped>
/*
https://codepen.io/kuvinod5/pen/WNvzazr
*/
.checkmark {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: block;
    stroke-width: 4;
    stroke: var(--primary);
    stroke-miterlimit: 10;
    animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both;
    position: relative;
    margin: 0 auto;
}

.checkmark__circle {
    stroke-dasharray: 166;
    stroke-dashoffset: 166;
    stroke-width: 5;
    stroke-miterlimit: 10;
    stroke: var(--primary);
    animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;

}

.checkmark__check {
    transform-origin: 50% 50%;
    stroke-dasharray: 48;
    stroke-dashoffset: 48;
    animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
}

@keyframes stroke {
    100% {
        stroke-dashoffset: 0;
    }
}

@keyframes scale {

    0%,
    100% {
        transform: none;
    }

    50% {
        transform: scale3d(1.1, 1.1, 1);
    }
}</style>