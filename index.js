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

   
        submitter: function() {
            this.items.push(this.newthing);
            this.newthing = "";
        },

        remover: function() {
            this.items.pop();
            console.log(this.items);
        }

    },

});