<template>
<section class="ftco-section">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-6 col-lg-4">
					<div class="login-wrap py-5">
		      	<div class="img d-flex align-items-center justify-content-center" style="background-image: url(images/bg.jpg);"></div>
		      	<h3 class="text-center mb-0">Welcome</h3>
		      	<p class="text-center">Sign in by entering the information below</p>
                <form action="#" class="login-form">
		      		<div class="form-group">
		      			<div class="icon d-flex align-items-center justify-content-center"><span class="fa fa-user"></span></div>
		      			<input type="text" class="form-control" v-model="email" placeholder="Username" required>
		      		</div>
                    <div class="form-group">
                        <div class="icon d-flex align-items-center justify-content-center"><span class="fa fa-lock"></span></div>
                    <input type="password" class="form-control" v-model="password" placeholder="Password" required>
                    </div>
                    <div class="form-group d-md-flex">
                        <div class="w-100 text-md-right">
                            <a href="#">Forgot Password</a>
                        </div>
                    </div>
                    <div class="form-group">
                        <button type="button" v-on:click="login" class="btn form-control btn-primary rounded submit px-3">Login</button>
                    </div>
	          </form>
	          <div class="w-100 text-center mt-4 text">
	          	<p class="mb-0">Don't have an account?</p>
		          <a href="#">Sign Up</a>
	          </div>
	        </div>
				</div>
			</div>
		</div>
	</section>
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
        methods: {
            getUser: function(token) {
                const requestOptions = {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': 'Bearer ' + token
                    }
                };
                fetch(baseUrl+'/api/user', requestOptions)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                        if(data.success == true){
                            localStorage.setItem('__authUser', JSON.stringify(data.data))
                        }
                    });
            },

            login: function () {
                if (this.email !== '' && this.password !== '') {
                    const requestOptions = {
                        method: 'POST',
                        headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        },
                        body: JSON.stringify(
                            {
                                email: this.email,
                                password: this.password ,
                                _token: csrf_token
                            },
                        )
                    };
                    fetch(baseUrl+"/api/auth/login", requestOptions)
                        .then(response => response.json())
                        .then(data => {
                            if(data.success == true){
                                this.getUser(data.data.token)
                                localStorage.setItem('__authToken', data.data.token)
                                localStorage.setItem('__authUser', JSON.stringify(data.data))
                                this.$router.push('/')
                            }else{
                                alert(data.message)
                            }
                        });
                }
            },
        }
    }
</script>
