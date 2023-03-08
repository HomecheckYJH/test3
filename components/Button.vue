<!-- <template>
<NuxtLink 
class="button"  
:class="[type ? type : '', size ? size : '', size=='md' ? 'common-border-8' : '' ]"
@click="click_event(click)" 
 :to="to ? to : '' " 
v-wave="waveeffect">
<span>
    <slot/>
</span>
</NuxtLink>
</template>

<script>
export default {
    props:['type','to' ,'size','click'],
    computed:{
        waveeffect(){
            switch(this.type)
            {
                case 'white':
                return {
                    color:'#aaa'
                }
                case 'primary' :
                case 'primary-in':
                return {
                    color : '#050507'
                }
                case 'link':
                return {
                    color : '#a8c1ea'
                }
                default :
                return {}
            } 
        }
    },
        methods:{
        click_event(fun){
            if(fun instanceof Function){
              fun()
            }
        }
    }

}
</script> -->
<template>
    <router-link
      class="button"
      :class="[type ? type : '', size ? size : '', size=='md' ? 'common-border-8' : '' ]"
      @click="click_event(click)"
      :to="to ? to : ''"
      v-wave="waveeffect"
    >
      <span>
        <slot />
      </span>
    </router-link>
  </template>
  <script>
  export default {
    props: ['type', 'to', 'size', 'click'],
    computed: {
      waveeffect() {
        switch (this.type) {
          case 'white':
            return {
              color: '#aaa'
            };
          case 'primary':
          case 'primary-in':
            return {
              color: '#050507'
            };
          case 'link':
            return {
              color: '#a8c1ea'
            };
          default:
            return {};
        }
      }
    },
    methods: {
      click_event(fun) {
        if (fun instanceof Function) {
          fun();
        }
      }
    }
  };
  </script> 
<style scoped>
.button{
    user-select: none;
  font-family: NotoSansKR;
    font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  display: inline-block;
  text-decoration: none;
  white-space : nowrap;
  text-overflow : ellipsis;
  overflow : hidden;
}
.sm{
padding: 6px 10px;
 border-radius: 6px;
  font-size: 12px;
}
.md{
    padding: 6px 20px;
     font-size: 12px;
}
.lg{
    padding: 14px 20px;
    border-radius: 6px;
     font-size: 14px;
}

.full{
    padding: 6px 20px;
    border-radius: 6px;
    font-size: 12px;
    justify-content: center;
    display: flex;
}

.button.primary{
    background-color: var(--primary);
    color: #fff;
    font-weight: 500;
}

.button.primary-in{
    background-color: var(--primary-deep);
    color: #fff;
    font-weight: 500;
}
.button.danger{
    background-color : #fff;
    border : 1px solid #CC0000;
    color : #CC0000;
    font-weight: 500;
}


.button.white{
    background: #fff;
  font-weight: 500;
  color: #2f2f2f;
  border: solid 1px #e0e8eb;
}

.button.selection{
    background: #fff;
    padding: 12px 16px;
  font-weight: 500;
  color: #2f2f2f;
  border: solid 1px #e0e8eb;
  font-size: 13.5px;
}

.button.link-primary{
      flex-grow: 0;
  line-height: 1.5;
  font-family: NotoSansKR;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: var(--primary);
  text-decoration: none;
  position: inherit;
  border-radius: 8px;
  padding : 4px 8px;
}
.button.link{
      flex-grow: 0;
  line-height: 1.5;
  font-family: NotoSansKR;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: var(--font);
  text-decoration: none;
  position: inherit;
  border-radius: 8px;
  padding : 6px 10px;
  transition: background 0.3s ease;
}
.button.link:hover
{
    background-color: var(--button-hover);
}

.button.disabled{
    background: #e2e2e2;
    color:#a2a2a2;
}


</style>