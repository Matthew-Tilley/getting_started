var shoppingList = new Vue({

    el: "#shopping-list",

    data: {
        
        header: "shopping list app",

        items: [
            "10 party hats", "2 board games", "20 cups", "glurp", "zurp"
        ],

        newthing: "",

    },


    methods: {

        test: function(newthing) {
            
            let x = newthing;
            console.log(x);
        }

    },

});