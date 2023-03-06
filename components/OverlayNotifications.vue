<template>
    <div class="notification-wrapper">
        <ul class="notification">
          <transition-group  name="notification">
          <li class="item-wrapper" v-for="(item) in notification_List" :key="item.id"
          >
          <div class="item">
              <div class="body-wrapper" :class="[item.id == current_notification_id && touch_active ? 'active' : '',item.style ? item.style : '']">
                  <div class="body"
                  v-on:touchstart="touch(item, true, item.click)" 
                  v-on:touchend="touch(item, false, null)">
                      <div v-show="item.status != 'none'" style="margin: 8px 0 8px 16px" >
                      <UIAnimationSpinner v-if="item.pending" :class="[item.style ? item.style : '']"/>
                      <UIAnimationStatus :status="item.status" v-else-if="item.status && item.status != 'none'"/>
                      </div>
                      <div style="margin-left : 16px; flex: 1 ; max-width: 100%">
                      <div v-if="item.title" class="title">{{item.title}}</div>
                      <div class="content">
                          <p v-html="item.content"></p>
                      </div>
                      </div>
                      
                    </div>    
               <div class="progress-bar" :class="[item.pending ? 'pending' : '']" :style="`transition: width ${item.duration}ms linear;`"></div>
              </div>
              </div>
          </li>
          </transition-group>
          </ul>
      </div>
    </template>
    <script setup>
      const notification_List = useNotifications().notifications
      const current_notification_id = ref('')
    const touch_active = ref(false)
     
      function touch(obj, bool, action){
            current_notification_id.value = obj.id;
            if(action){
                action();
            }
            touch_active.value = bool;
        }
        
    </script>
    <style>
    .square-img-wrapper{
    min-width: calc(65vw - 16px);
        overflow:hidden;
        position:relative;
        background:#000
    }
    .square-img-wrapper:after {
      content: "";
      display: block;
      padding-bottom: 100%;
    }
    
    .square-img-wrapper img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    </style>
    <style scoped>
    /*
    https://codepen.io/ramin-h-al/pen/qBdJEPL
    */
    .notification-wrapper{
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0;
        right : 0;
        z-index: 400;
        pointer-events: none;
    }
    .notification-wrapper .notification{
        padding: 0;
        width : 100%;
     margin: calc(constant(safe-area-inset-top) + 20px) 0 calc(constant(safe-area-inset-bottom) + 20px) 0;
        margin: calc(env(safe-area-inset-top) + 20px) 0 calc(env(safe-area-inset-bottom) + 20px) 0;
    
    
    
    
        /*
        float : right;
        position: relative;
        */
    }
    .item-wrapper{
        list-style: none;
        display: block;
        width: 100%;
    }
    .item{
        display: flex;
        justify-content: flex-end;
    }
    
    .item .body{
        padding: 8px 16px 8px 0px;
        max-width: 65vw;
        transition: all 0.3s ease;
    }
    
    
    
    
    .item .body-wrapper{
        /*
    background : rgba(0,0,0,0.5);
    color : #fff;
    */
    background : var(--background-transparent-content);
    border : 2px solid var(--border);
    color : var(--font-color);
    }
    
    .item .body-wrapper.black{
        /*
    background : rgba(0,0,0,0.5);
    color : #fff;
    */
    background : rgba(47,47,47,0.91);
    border : 1px solid #2f2f2f;
    color : #fff;
    }
    
    .item .body-wrapper .progress-bar{
    background : var(--primary-gradient)
    }
    
    .item .body-wrapper{
        
        margin: 3px 20px 3px 0;
        
        border-radius: 4px;
        font-size: var(--font-m);
        font-weight: 300;
         pointer-events: all;
         transition : all 0.12s ease;
    }
    
    .item .body-wrapper.active{
        transform : scale(0.98);
        filter: brightness(0.95);
    }
    .body{
        display: flex;
        justify-content: space-between;
    }
    
    .body .title{
        user-select: none;
        font-weight: 700;
    }
    
    .body .content{
        user-select: none;
        line-height: 1;
    }
    .body .content p{
        margin: 5px 0;
        font-size : var(--font-sm);
    }
    
    .progress-bar{
        position: relative;
        height: 2px;
    width: 100%;
    transition:  width 5s linear;
    }
    .notification-enter-from .progress-bar,
    .progress-bar.pending{
        width: 0%;
    }
    
    .progress-bar.pending{
       transition:  width 1ms linear !important;
    }
    
    .notification-move{
        transition: transform 0.5s ease;
    }
    
    
    .notification-enter-active {
        
        transition: all 0.3s ease;
        position: absolute;
    }
    .notification-leave-active{
        transition: all 0.3s ease;
        position: absolute;
    }
    .notification-enter-from {
        /*
       transform: translateX(100%);
       */
       right : -100%;
    }
    .notification-enter-to{
        /*
        transform: translateX(0);
        */
    right : 0;
    }
    .notification-leave-to{
    
    transform: translateX(100%);
        opacity: 0;
    }
    .notification-leave-from{
    transform: translateX(0);
        opacity: 1;
    }
    
    
    
    </style>