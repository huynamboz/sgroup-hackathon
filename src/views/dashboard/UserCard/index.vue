<template>
     <div  class=" container-Card">
       <div class=" table-card">
         <img class="" :src="user.avatar" alt="avatar" />
         <div class="col-card ">
           <div class=" data-name ">{{ user.name }}</div>
           <div class="data-email">{{ user.email }}</div>
         </div>
       </div>
       <div class=" main-data">
         <div class="data-role">{{ user.role }}</div>
         <div class="data-status">{{ user.status }}</div>
         <div class="data-activity">{{ user.lastActivity }}</div>
         <div class="data-created">{{ new Date(user.created).toLocaleDateString()}}</div>
       </div>
       <div class="main-action">
          <div class="button-action">
          <button @click="toggleIconButton">Actions</button>
          <span class="icon-action-up" v-if="showIconDown"><el-icon><CaretBottom /></el-icon></span>
          <span class="icon-action-down" v-if="showIconUp"><el-icon><CaretTop /></el-icon></span>
          </div>
       </div>
     </div>
   </template>
<script setup lang="ts" >
import { ref } from "vue"
const props = defineProps<{
	user: any
}>();

  const showIconUp = ref<boolean>(false)
  const showIconDown = ref<boolean>(true)
  const toggleIconButton = () => {
    showIconUp.value = !showIconUp.value
    showIconDown.value = !showIconDown.value
  }

</script>
<style lang="scss" scoped>
.container-Card {
  width: 100%;
  display: grid;
  grid-template-columns: 250px auto auto auto auto auto;
}
.table-card {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px
}
.table-card img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.col-card {
  display: flex;
  flex-direction: column;
}
.data-name {
  font-size: 14px;
  font-weight: 400;
}
.data-email {
  font-size: 12px;
  font-weight: 400;
  color: gray;
}
.main-data {
  display: grid;
  grid-template-columns: 80px 180px 240px 180px  auto;
  padding: 10px;
  text-align: center;
  align-items: center;
  // css Card dưới
}
.button-action {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.data-status {
  margin-left: 10px;
}
.button-action {
  padding-top: 15px;
}
.button-action button {
  position: relative;
  padding: 5px 20px 5px 5px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
}
.button-action button:hover {
  background-color: aquamarine;
}
.icon-action-up {
  position: absolute;
  right: 4.5%;
}
.icon-action-down {
  position: absolute;
  right: 4.5%;

}
</style>