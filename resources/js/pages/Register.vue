<template>
   <div class="row">
        <div class="col-lg-12 mt-3 mb-3">
             <form-wizard>
                <tab-content title="Step 1" :selected="true">
                    <form>
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="name" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Ex: John Djoni">
                        </div>
                        <div class="form-group">
                            <label for="phone">Phone</label>
                            <input type="text" class="form-control" id="phone" placeholder="+628991234567">
                        </div>
                    </form>
                </tab-content>
                <tab-content title="Step 2">
                    <div class="form-group">
                        <label for="email">Email address</label>
                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" id="password" placeholder="Password">
                    </div>
                    <div class="form-group">
                        <label for="validatePassword">Validate Password</label>
                        <input type="password" class="form-control" id="validatePassword" placeholder="Re-enter password">
                    </div>
                </tab-content>
                <tab-content title="Finishing Up">
                    <div class="form-group">
                        <label for="address">Address</label>
                        <textarea class="form-control" id="address" name="address"></textarea>
                    </div>
                </tab-content>
            </form-wizard>
        </div>
    </div>
</template>
<script>

export default ({

})
</script>
