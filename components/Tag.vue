<template>
    <div class="tag" :class="[type ? type : '']">
        <span class="tag-text">
            {{content}}
        </span>
    </div>
</template>
<script lang="ts">
export default{
    // props : ['content', 'type']
    props: {
        content: {
            type: String,
            default: 'Tag컴포넌트입니다'
        },
        type: {
            type: String,
            default: ''
        }
    }
}
</script>
<style scoped>
.tag{
    display: inline-flex;
   margin-right: 4px;
  padding: 3px 8px;
  border-radius: 4px;
  border: solid 1px var(--primary);
  color: var(--primary);
}
.tag-text{
  font-size: 10px;
  font-weight: 500;
  text-align: left;
}
.tag.primary{
border: solid 1px var(--primary);
  color: var(--primary);
}
.tag.weak{
border: solid 1px var(--primary-weak);
  color: var(--primary-weak);
}
.tag.disabled{
border: solid 1px #a2a2a2;
  color: #a2a2a2;
}
.tag.danger{
border: solid 1px #FF4757;
  color: #FF4757;
}
.tag.warning{
border: solid 1px rgb(255,186,0);
  color: rgb(255,186,0);
}
</style>