var shoppingList = new Vue({

    el: "#shopping-list",

    data: {
        
        header: "THIS IS CHANGED"

    },


    methods: {

        tester: function() {
            console.log(this.header);
        }

    },

});