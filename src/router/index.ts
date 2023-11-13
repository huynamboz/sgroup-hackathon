import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: () => import("@/views/home/index.vue"),
            meta: {
                layout: "default",
            },
        },
        {
            path: "/login",
            component: () => import("@/views/login/index.vue"),
        },
        {
            path: "/about",
            component: () => import("@/views/about/index.vue"),
        },
        {
            path: "/products",
            component: () => import("@/views/products/index.vue"),
        },
        {
            path: "/products/:id",
            component: () => import("@/views/products/_id/index.vue"),
        },
        {
            path: "/:pathMatch(.*)*",
            component: () => import("@/views/404/index.vue"),
        },
        {
            path: "/forms/:id",
            component: () => import("@/views/forms/_id/index.vue"),
        },
        {
          path: "/forms/create",
          component: () => import("@/views/forms/create/index.vue"),
        }
    ],
})

export default router
