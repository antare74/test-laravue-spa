<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <table class="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">Nama</th>
                        <th scope="col">Email</th>
                        <th scope="col">Email Verified at</th>
                        <th scope="col">Created at</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{{ user.name }}</td>
                            <td>{{ user.email }}</td>
                            <td>{{ user.email_verified_at }}</td>
                            <td>{{ user.created_at }}</td>
                        </tr>
                    </tbody>
                    </table>
            </div>
        </div>
    </div>
</template>
<script>
    const baseUrl = window.location.origin;
    const csrf_token = document.getElementById("csrf-token").value;
    export default {
        data() {
            return {
                user: ''
            }
        },
        mounted() {
            this.getUser()
        },
        methods: {
            getUser: function() {
                let checkUser = localStorage.getItem('__authUser');
                console.log(checkUser)
                if ( checkUser !== null ) {
                    this.user = JSON.parse(checkUser)
                }
            }
        }
    }
</script>
