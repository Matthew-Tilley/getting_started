var shoppingList = new Vue({

    el: "#shopping-list",

    data: {
        
        header: "vue is ready to party"

    },


    methods: {

        tester: function() {
            console.log(this.header);
        }

    },

});