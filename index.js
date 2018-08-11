var shoppingList = new Vue({

    el: "#shopping-list",

    data: {
        
        header: "shopping list app",

        items: [
            "10 party hats", "2 board games", "20 cups"
        ]

    },


    methods: {

        tester: function(item) {

            this.items.push(item);
            console.log(this.items);
        }

    },

});