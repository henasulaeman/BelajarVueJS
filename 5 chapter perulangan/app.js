// var product ={
//     "name":"Bamboo Thermal Ski Coat",
//     "description":"ini adalah deskripsi produk",
//     "price":"99",
//     "image":"https://hplussport.com/wp-content/uploads/2016/12/ski-coat_LYNDA_29940.jpg"
// }
var dataProduct = {
    products:[
        {
            "id":"429",
            "name":"Bamboo Thermal Ski Coat",
            "description":"ini adalah deskripsi produk",
            "price":"99",
            "image_title":"Jaket Bagus",
            "image":"https://hplussport.com/wp-content/uploads/2016/12/ski-coat_LYNDA_29940.jpg"
        },
        {
            "id":"430",
            "name":"Bamboo Ski Coat",
            "description":"ini adalah deskripsi produk",
            "price":"100",
            "image_title":"Jaket Bagus",
            "image":"https://hplussport.com/wp-content/uploads/2016/12/ski-coat_LYNDA_29940.jpg"
        }

    ]
}
var app = new Vue({
    el:'#app',
    data: dataProduct
});