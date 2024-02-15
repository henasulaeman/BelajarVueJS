var app = new Vue({
    el:'#app',
    data: {
        maximum:50,
        products: null,
        cart: [],
        style:{
            label: ['font-weight-bold',' mr-2'],
            inputWidth:60,
            sliderStatus:true
        }
    },
    computed: {
        sliderState: function(){
            return this.style.sliderStatus ? 'd-flex' : 'd-none';
        }
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
    // Filterisasi
    filters: {
        currencyFormat: function(value){
            return 'Rp'+Number.parseFloat(value).toFixed(2);
        }
    },
    // Contoh Method
    methods: {
        addItem: function (product){
            var productIndex;
            var productExist = this.cart.filter(function (item, index){
                if(item.product.id == Number(product.id)){
                    productIndex = index;
                    return true;
                }else{
                    return false;
                }
            });

            if (productExist.length) {
                this.cart[productIndex].qty++;
            }else{
                this.cart.push({product:product, qty:1});
            }
        }
    }
});