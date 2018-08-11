new Vue({

    el: "#shopping-list",

    data: {
        
        header: "Vue is ready to party!"

    },


    methods: {

        tester: function() {
            console.log(this.header);
        }

    },

});