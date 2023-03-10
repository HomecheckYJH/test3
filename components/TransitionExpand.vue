<template>
  <transition name="expand" @enter="enter" @after-enter="afterEnter" @leave="leave" :class="[type ? type : '']">
    <slot />
  </transition>
</template>

<script lang="ts">
export default {
  name: "TransitionExpand",
  props: {
    type: {
      type: String,
      default: ''
    },
    options: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    enter(element: any): void {
      const height = element.scrollHeight;

      element.style.height = 0;
      element.style.opacity = 0;
      element.style.overflow = "hidden";

      // Trigger the animation.
      requestAnimationFrame(() => {
        element.style.height = height + "px";
        element.style.opacity = 1;
        element.style.overflow = "visible";
      });
    },
    afterEnter(element: any): void {
      element.style.height = "auto";
      element.style.opacity = 1;
      element.style.overflow = "visible";
    },
    leave(element: any): void {
      const height = element.scrollHeight;

      element.style.height = height + "px";
      element.style.opacity = 1;
      element.style.overflow = "hidden";

      // Trigger the animation.
      requestAnimationFrame(() => {
        element.style.height = 0;
        element.style.opacity = 0;
        element.style.overflow = "hidden";
      });
    },
  },
};
// export default {
//   name: "TransitionExpand",
//   // props: ['type'],
//   props: {
//   type: {
//     type: String,
//     default: ''
//   },
//   options: {
//     type: Object,
//     default: () => ({})
//   }
// },
//   methods: {
//     enter(element: any): void {
//       const width = getComputedStyle(element).width;

//       element.style.width = width;
//       element.style.position = "absolute";
//       element.style.visibility = "hidden";
//       element.style.height = "auto";

//       const height = getComputedStyle(element).height;

//       element.style.width = null;
//       element.style.position = null;
//       element.style.visibility = null;
//       element.style.height = 0;

//       // Force repaint to make sure the
//       // animation is triggered correctly.
//       getComputedStyle(element).height;

//       // Trigger the animation.
//       // We use `requestAnimationFrame` because we need
//       // to make sure the browser has finished
//       // painting after setting the `height`
//       // to `0` in the line above.
//       requestAnimationFrame(() => {
//         element.style.height = height;
//       });
//     },
//     afterEnter(element: any): void {
//       element.style.height = "auto";
//     },
//     leave(element: any): void {
//       const height = getComputedStyle(element).height;

//       element.style.height = height;

//       // Force repaint to make sure the
//       // animation is triggered correctly.
//       getComputedStyle(element).height;

//       requestAnimationFrame(() => {
//         element.style.height = 0;
//       });
//     },
//   },
// };
</script>
<style scoped>
* {
  will-change: height;
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}

.expand-enter-active {
  transition: all 0.22s ease;
  overflow: hidden;
  opacity: 1;
}

.expand-leave-active {
  transition: all 0.175s ease;
  overflow: hidden;
  opacity: 0;

}

.late.expand-enter-active {
  transition: all 0.45s ease;
  overflow: hidden;
  opacity: 1;
}

.late.expand-leave-active {
  transition: all 0.35s ease;
  overflow: hidden;
  opacity: 0;
}


.expand-enter,
.expand-leave-to {
  /* height: 0; */
  opacity: 0;
}
</style>