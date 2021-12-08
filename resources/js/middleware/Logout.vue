<template>
    <div>
        <h1 class="text-center">please wait...</h1>
    </div>
</template>
<script>
    const baseUrl = window.location.origin;
    const csrf_token = document.getElementById("csrf-token").value;
    export default {
        data() {
            return {
                email: '',
                password: '',
            }
        },
        created() {
            this.logout()
        },
        methods: {
            logout: function () {
                const requestOptions = {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('__authToken')
                    },
                    body: JSON.stringify(
                        {
                            _token: csrf_token
                        }
                    )
                };
                fetch(baseUrl+"/api/auth/logout", requestOptions)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data, data.success)
                        if(data.success == true){
                            localStorage.removeItem('__authToken')
                            localStorage.removeItem('__authUser')
                            this.$router.push('/login')
                        }else{
                            alert(data.message)
                        }
                    });
            },
        }
    }
</script>
