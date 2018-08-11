var shoppingList = new Vue({

    el: "#shopping-list",

    data: {
        
        header: "shopping list app"

    },


    methods: {

        tester: function() {
            console.log(this.header);
        }

    },

});