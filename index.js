var shoppingList = new Vue({

    el: "#shopping-list",

    data: {
        
        header: "shopping list app",

        items: [
            "10 party hats", "2 board games", "20 cups"
        ]

    },


    methods: {

        tester: function() {
            console.log(this.header);
        }

    },

});