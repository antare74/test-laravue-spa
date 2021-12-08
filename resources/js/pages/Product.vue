<template>
    <div class="row mt-5 shadow-lg p-3 mb-5 bg-body rounded">
        <div class="col-lg-12 mt-3 mb-3">
           <h1>INI PRODUCT</h1>
           <div class="row">
               <div class="col-md-12">
                   <div class="mb-3">
                        <label for="name" class="form-label">Name</label>
                        <input type="name" class="form-control" id="name" placeholder="Nama produk" v-model="nama">
                    </div>
                    <div class="mb-3">
                        <label for="price" class="form-label">harga</label>
                        <input type="price" class="form-control" id="price" placeholder="Harga produk" v-model="harga">
                    </div>
                    <button type="button" v-on:click="addProduct" class="btn btn-info mb-3">Add</button>
                    <button type="button" v-on:click="updateProduct" class="btn btn-success mb-3">Update</button>
                    <button type="button" v-on:click="clearProduct" class="btn btn-light mb-3">Clear</button>
               </div>
           </div>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nama Product</th>
                    <th scope="col">Harga Product</th>
                    <th scope="col">Updated at</th>
                    <th scope="col">Created at</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(product, ids) in products">
                        <th scope="row">{{ ids+1 }}</th>
                        <td>{{ product.nama }}</td>
                        <td>{{ product.harga }}</td>
                        <td>{{ product.created_at }}</td>
                        <td>{{ product.updated_at }}</td>
                        <td>
                            <button type="button" :data-id="product.id" v-on:click="editProduct" :data-nama="product.nama" :data-harga="product.harga" class="btn btn-secondary mb-3">edit</button>
                            <button type="button" :data-id="product.id" v-on:click="deleteProduct" class="btn btn-danger mb-3">delete</button>
                        </td>
                    </tr>
                </tbody>
                </table>
        </div>
    </div>
</template>
<script>
    const baseUrl = window.location.origin;
    const csrf_token = document.getElementById("csrf-token").value;

    export default {
        data() {
            return {
                products: '',
                harga: '',
                nama: '',
                id: ''
            }
        },

        mounted() {
            this.getProduct()
        },

        methods: {
            getProduct: function () {
                fetch(baseUrl+"/api/product/get")
                    .then(response => response.json())
                    .then(data => (
                        this.products = data
                    ));
            },

            addProduct: function () {
                if (this.nama !== '' && this.harga !== '') {
                    const requestOptions = {
                        method: 'POST',
                        headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                        },
                        body: JSON.stringify(
                            { nama: this.nama, harga: this.harga , _token: csrf_token },
                        )
                    };
                     fetch(baseUrl+"/api/product/add", requestOptions)
                        .then(response => response.json())
                        .then(data => this.products.push(data));
                    this.clearProduct();
                }
            },

            deleteProduct: function (event) {
                var id = event.target.getAttribute('data-id');
                fetch(baseUrl+"/api/product/delete/"+id)
                    .then(response => response.json())
                    this.getProduct();
            },

            editProduct: function (event) {
                this.id = event.target.getAttribute('data-id');
                this.nama = event.target.getAttribute('data-nama');
                this.harga = event.target.getAttribute('data-harga');
            },

            clearProduct: function () {
                this.nama = ''
                this.harga = ''
            },

            updateProduct: function() {
                if (this.nama && this.harga  && this.id) {
                    const requestOptions = {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        },
                        body: JSON.stringify(
                            {
                                nama: this.nama,
                                harga: this.harga,
                                _token: csrf_token
                            },
                        )
                    };
                     fetch(baseUrl+"/api/product/edit/"+this.id, requestOptions)
                        .then(response => response.json())
                    this.getProduct();
                    this.clearProduct();
                    alert('update successfully')
                }
            }
        },

    }
</script>
