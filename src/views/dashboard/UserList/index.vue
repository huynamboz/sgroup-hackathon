<template>
    <div class="container-list">
      <div class="container-search">
                <h1>User List</h1>
                <span class="input-search">
                    <el-icon class="icon-search"><Search /></el-icon>
                    <input type="text" v-model="keySearch"  placeholder="Enter email, name..vv">                
                </span>
            </div>
        <div class="container-card">
            <div>
                <div class="row-title-card">
                    <table class="">
                        <th class="" v-for="(column, index) in tableColumns" :key="index">
                            {{ column }}
                        </th>
                    </table>
                </div>
                <div v-for="user in filteredUsers" :key="user.id">
                    <UserCard :user="user" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, computed } from "vue"
import UserCard from "@/views/dashboard/UserCard/index.vue"
const tableColumns = ref(["user", "role", "status", "last activity", "join date", "actions"])
const userData = ref([
    {
        id: 1,
        avatar: "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg",
        name: "John Doe",
        email: "john.doe@example.com",
        role: "Admin",
        status: "Active",
        lastActivity: "2023-11-14 12:30:00",
        created: "2023-11-01",
    },
    {
        id: 2,
        avatar: "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg",
        name: "Jane Smith",
        email: "jane.smith@example.com",
        role: "User",
        status: "Inactive",
        lastActivity: "2023-11-13 15:45:00",
        created: "2023-10-20",
    },
    {
        id: 3,
        avatar: "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg",
        name: "Bob Johnson",
        email: "bob.johnson@example.com",
        role: "Moderator",
        status: "Active",
        lastActivity: "2023-11-14 09:20:00",
        created: "2023-11-05",
    },
    {
        id: 4,
        avatar: "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg",
        name: "Alice Williams",
        email: "alice.williams@example.com",
        role: "User",
        status: "Active",
        lastActivity: "2023-11-14 08:00:00",
        created: "2023-11-10",
    },
    {
        id: 5,
        avatar: "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg",
        name: "Charlie Brown",
        email: "charlie.brown@example.com",
        role: "Guest",
        status: "Inactive",
        lastActivity: "2023-11-12 18:10:00",
        created: "2023-11-02",
    },
])
const keySearch = ref<string>("")

const filteredUsers = computed(() => {
    return userData.value.filter(
        (user) =>
            user.name.toLowerCase().includes(keySearch.value.toLowerCase()) ||
            user.email.toLowerCase().includes(keySearch.value.toLowerCase()) ||
            user.role.toLowerCase().includes(keySearch.value.toLowerCase()) ||
            user.status.toLowerCase().includes(keySearch.value.toLowerCase()) ||
            user.lastActivity.toLowerCase().includes(keySearch.value.toLowerCase()) ||
            user.created.toLowerCase().includes(keySearch.value.toLowerCase())
    )
})
</script>
<style lang="scss" scoped>
.container-list {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.input-search {
    display: flex;
    justify-content: center;
    align-items: center;
}
.container-card {
    width: 100%;
    height: 100%;
    display: grid;
    font-size: 14px;
}
.row-title-card table{
  display: grid;
    grid-template-columns: 210px 170px 120px 250px 190px auto;
    align-items: center;

}
.container-search {
    display: flex;
    margin-bottom: 50px;
    gap: 30px;
    margin-top: 20px;
    margin-left: 20px;

}
.input-search {
    position: relative;
    border: 1px solid #b7b8bb;
    border-radius: 6px;
    padding: 7px 10px 7px 30px;
}
.input-search input {
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
}
.input-search .icon-search {
    position: absolute;
    width: 24px;
    height: 24px;
    left: 0;
}
</style>
