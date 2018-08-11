var shoppingList = new Vue({

    el: "#shopping-list",

    data: {
        
        header: "shopping list app",

        items: [
            "10 party hats", "2 board games", "20 cups", "glurp", "zurp"
        ]

    },


    methods: {

        test: function() {
            console.log("LKAJSLKJASD");
        }

    },

});