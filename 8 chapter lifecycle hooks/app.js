// var product ={
//     "name":"Bamboo Thermal Ski Coat",
//     "description":"ini adalah deskripsi produk",
//     "price":"99",
//     "image":"https://hplussport.com/wp-content/uploads/2016/12/ski-coat_LYNDA_29940.jpg"
// }



var app = new Vue({
    el:'#app',
    data: {
        maximum:50,
        products: null
    },
    // Fungsi event mounted adalah ketika di deklerasikan maka code yang 
    // di dalam mounted akan secara otomatis terload
    // Even yang terjadi pada saat objek di buat dan template sudah siap di render
    mounted: function() {
        fetch('https://hplussport.com/api/products/order/price')
        .then(response => response.json())
        .then(data => {
            this.products = data;
        });
    },
});