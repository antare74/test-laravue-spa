<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <router-link :to="{ name: 'home' }" class="navbar-brand">antare74</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <router-link :to="{ name: 'home' }" class="nav-link" v-if="userLogin">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'product' }" class="nav-link" v-if="userLogin">Product</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'profile' }" class="nav-link" v-if="userLogin">Profile</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'register' }" class="nav-link">Register</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'logout' }" class="nav-link" v-if="userLogin">Logout</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        data () {
            return{
                userLogin: false
            }
        },

        created() {
            this.isLogin();
        },

        methods: {
            isLogin: function(){
                if(localStorage.getItem('__authToken')) {
                    this.userLogin = true
                }
            }
        }

    }
</script>
