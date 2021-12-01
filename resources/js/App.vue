<template>
    <div id="main">
        <navbar></navbar>

        <div class="container">
            <router-view></router-view>
        </div>
    </div>

</template>

<script>
    import Navbar from './components/Navbar'

    export default {
        name: 'App',
        components: {
            'navbar': Navbar,
        }
    }
</script>
