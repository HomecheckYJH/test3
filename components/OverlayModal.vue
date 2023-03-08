<template>
  <div class="modal-frame">
    <transition name="backdrop">
      <div v-if="modalValue.visible" class="backdrops" @click="shakeModal" />
    </transition>
    <transition name="modal" duration="400">
      <div v-if="modalValue.visible" class="modal-parent">
        <div class="modal common-border-8" :class="[shakingModal ? 'shake' : '', modalValue.type ? modalValue.type : '']">
          <div class="header" :class="[modalValue.header ? '' : 'no-header']">
            {{ modalValue.header }}
          </div>
          <div class="contents">
            <p class="message" :class="[modalValue.centered ? 'centered' : '']" v-html="modalValue.message">
            </p>
            <input v-if="computedPrompt() == 'Object'" style="width: 100%" :placeholder="modalValue.prompt.placeholder"
              v-model="inputValue" />
            <div v-if="computedPrompt() == 'Array'">
              <input class="prompt-multiple" v-for="(input, ip) in modalValue.prompt" :key="ip" @input="promptChanged"
                v-model="inputValue_multiple[input.target]" style="width: 100%" :placeholder="input.placeholder" />
            </div>
            <div v-if="modalValue.selection">
              <UIButton v-for="(selection, si) in modalValue.selection" :key="si" class="prompt-multiple" type="selection"
                size="full">
                {{ selection.label }}
              </UIButton>
            </div>

          </div>

          <section>
            <div v-if="accept ? accept.visible : false" class="accept">
              위 사항을 모두 읽은 경우에만, 아래에 "읽었습니다"를 작성해주세요.
              <input v-model="accept" placeholder="'읽었습니다'를 입력해주세요">
            </div>
            <div class="footer" :class="[modalValue.style ? 'transparent' : '']">
              <button v-if="!modalValue.force" v-wave class="secondary common-border-4" @click="exitModal">
                취소
              </button>
              <button v-if="modalValue.confirm ? modalValue.confirm.hidden == false : true" v-wave="{
                color: '#050507'
              }" class="primary common-border-4" @click="confirm">
                {{ modalValue.confirm ? modalValue.confirm.label : '확인' }}
              </button>
            </div>
          </section>
        </div>
      </div>
    </transition>


  </div>
</template>
<script>
export default {
  props: ['state'],
  data() {
    return {
      accept: '',
      shakingModal: false,
      inputValue: '',
      inputValue_multiple: {},
      return_data: []
    }
  },
  computed: {
    modalValue() {
      return this.state.modal.value
    },
  },
  watch: {
    'state.modal.value.visible': {
      handler(to, from) {
        if (!from && to) {
          this.init();
        }
      }
    }
  },
  methods: {
    computedPrompt() {
      if (!this.modalValue.prompt) {
        return false
      }
      if (Array.isArray(this.modalValue.prompt)) {
        return "Array"
      }
      else if (Object.keys(this.modalValue.prompt).length > 0) {
        return "Object"
      }

      return false
    },
    init() {
      this.return_data = []
    },
    promptChanged(value) {
      console.log(value)
      console.log(this.inputValue_multiple)
    },
    confirm() {
      if (this.modalValue.confirm && this.modalValue.confirm.override) {
        this.modalValue.confirm.override()
        this.state.modal.value.return_value()
        return;
      }

      let isValid = true
      if (this.computedPrompt() == "Object") {
        isValid = isValid && this.inputValue.replace(' ', '').length != 0
      }
      else if (this.computedPrompt() == "Array") {
        for (let property of this.modalValue.prompt) {
          if (!isValid) {
            continue
          }
          isValid = isValid && this.inputValue_multiple[property.target] ? this.inputValue_multiple[property.target].replace(' ', '').length != 0 : false
        }

      }

      if (this.modalValue.force && !isValid) {
        this.$noti.add({
          title: `유효하지 않은 값`,
          content: `입력한 값을 확인해주세요`,
          status: `failed`,
          duration: 2000
        })
        return;
      }


      this.state.modal.value.return_value(this.state.modal.value.prompt ?
        (this.inputValue != "" ? this.inputValue : this.inputValue_multiple) : true

      )
      this.inputValue = '';
      this.inputValue_multiple = {};
    },

    exitModal() {
      this.state.exitModal();
      this.state.modal.value.return_value(false)
    },
    shakeModal() {
      if (this.modalValue.force) {
        this.shakingModal = true;
        setTimeout(() => {
          this.shakingModal = false;
        }, 3000)
      }
      else {
        this.exitModal();
      }
    }
  }
}
</script>
<style>
.modal .contents .message b {
  color: var(--primary)
}

.modal .contents .message span {
  color: var(--primary)
}

.modal .contents .message w {
  color: indianred;
}

.modal .contents .message h5 {
  font-size: 16px;
  margin: 6px 0;
}

.modal .contents .message italic {
  font-size: 12px;
  color: #666;
}
</style>
<style scoped>
.modal-frame {
  margin: 0;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  user-select: none;
  overflow-y: hidden;
  -webkit-overflow-scrolling: none;

  -webkit-user-drag: none;
  position: fixed;
  height: 100%;
  width: 100%;
  pointer-events: none;
  z-index: 199;
}


.backdrops {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 200;
  pointer-events: all;
}

.modal {
  background: #fff;
  position: absolute;
  left: 50%;
  top: 47%;
  transform: translate(-50%, -50%);
  min-width: 80%;
  z-index: 201;
  display: flex;
  flex-direction: column;
  pointer-events: all;
  max-height: 80%;
}

.modal.bottom {
  top: 98%;
  transform: translate(-50%, -100%);
  min-width: 95%;
}

.prompt-multiple {
  margin: 3px 0
}

.modal.fullscreen {
  width: 90%;
  min-height: 90%;
  top: 49%;
  overflow-y: hidden;
}

.modal .contents {
  flex: 1;
  overflow-y: scroll;
  padding: 0 20px;
}

.modal .header {
  display: block;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  padding: 20px;
  padding-bottom: 10px;
  ;
}

.modal .header.no-header {
  padding: 10px;
}

.shake {
  animation: shake 150ms 4 linear;
  -moz-animation: shake 150ms 4 linear;
  -webkit-animation: shake 150ms 4 linear;
  -o-animation: shake 150ms 4 linear;
}



.modal .contents .message {
  font-size: 13.5px;
  margin-bottom: 20px;
}

.modal .contents .message.centered {
  margin-bottom: 20px;
  text-align: center;
  font-size: 13.5px;
  color: #2f2f2f;
}


.modal .footer {
  display: flex;
  padding: 10px 20px 20px 20px;
}

.modal .footer button {
  text-align: center;

  flex: 1;
  font-size: 13.5px;
  color: #fff;
  border: 0;
  padding: 15px 0;
}



.modal .footer .secondary {
  margin-right: 12px;
  background-color: #2f2f2f;
}

.modal .footer .primary {
  background: var(--primary-gradient);
  font-weight: 500;
}

.modal .footer .primary:disabled,
.modal .footer .secondary:disabled {
  font-size: 13.5px;
  color: #fff;
  opacity: 0.5;
}


.modal .footer.transparent {
  padding: 6px 10px 10px 10px;
}

.modal .footer.transparent button {
  padding: 12px 0;
  color: var(--font);
  font-weight: 500;
  background: transparent
}








.accept {
  color: #b2b2b2;
  font-size: 12px;
  letter-spacing: -1px;
}

.accept input {
  width: 100%;
  margin: 10px 0;
}











.backdrop-enter-active {
  transition: all 0.3s;
}

.backdrop-leave-active {
  transition: all 0.25s;
}

.backdrop-leave-from,
.backdrop-enter-to {
  opacity: 1;
}

.backdrop-leave-to,
.backdrop-enter-from {
  opacity: 0;
}



.modal-enter-active .modal {
  transition: all 0.22s;
  z-index: 201;
}

.modal-leave-active .modal {
  transition: all 0.15s;
  z-index: 201;
}

.modal-leave-from .modal,
.modal-enter-to .modal {
  top: 47%;
  opacity: 1;
}

.modal-leave-to .modal,
.modal-enter-from .modal {
  top: 48%;
  opacity: 0;
}

.modal-leave-from .modal.fullscreen,
.modal-enter-to .modal.fullscreen {
  top: 49%;
  opacity: 1;
}

.modal-leave-to .modal.fullscreen,
.modal-enter-from .modal.fullscreen {
  top: 54%;
  opacity: 0;
}

.modal-leave-from .modal.bottom,
.modal-enter-to .modal.bottom {
  top: 98%;
  transform: translate(-50%, -100%);
  opacity: 1;
}

.modal-leave-to .modal.bottom,
.modal-enter-from .modal.bottom {
  top: 100%;
  transform: translate(-50%, 0%);
  opacity: 0;
}




@keyframes shake {
  0% {
    transform: translate(calc(-50% + 3px), -50%);
  }

  50% {
    transform: translate(calc(-50% - 3px), -50%);
  }

  100% {
    transform: translate(-50%, -50%);
  }
}

@-moz-keyframes shake {
  0% {
    transform: translate(calc(-50% + 3px), -50%);
  }

  50% {
    transform: translate(calc(-50% - 3px), -50%);
  }

  100% {
    transform: translate(-50%, -50%);
  }
}

@-webkit-keyframes shake {
  0% {
    transform: translate(calc(-50% + 3px), -50%);
  }

  50% {
    transform: translate(calc(-50% - 3px), -50%);
  }

  100% {
    transform: translate(-50%, -50%);
  }
}

@-ms-keyframes shake {
  0% {
    transform: translate(calc(-50% + 3px), -50%);
  }

  50% {
    transform: translate(calc(-50% - 3px), -50%);
  }

  100% {
    transform: translate(-50%, -50%);
  }
}

@-o-keyframes shake {
  0% {
    transform: translate(calc(-50% + 3px), -50%);
  }

  50% {
    transform: translate(calc(-50% - 3px), -50%);
  }

  100% {
    transform: translate(-50%, -50%);
  }
}</style>