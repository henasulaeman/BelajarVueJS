var dataProduct = {
    product:[
        {
            "id":"1",
            "name": "Strawberry Mineral Water",
            "deskripsi": "Buah Stroberi deskripsi",
            "price":"2.90",
            "image-title":"Buah buahan",
            "image":""
        },
        {
            "id":"2",
            "name":"Pompa Air Portable",
            "deskripsi":"preasure 320 PSI 22 BAR",
            "price":"100.000",
            "image-title":"Mesin",
            "image":"https://partojambe.com/asset/foto_produk/POMPA_AIR_3.PNG"    
        }
        
    ]
}
var app = new Vue({
    el: '#app',
    data:{
        name: dataProduct
    }
});