new Vue({

    el:"#app",

    data: {
        step: 1,
        totalsteps: 5,
        impact_rate: '',
        timeline_rate: '',
        business_industry: '',
        established: '',

        form: {

            brand_design: null,
            research_insights: null,
            content_strategy: null,
            platforms: null,
            campaigns: null,
            activations: null,
            consulting: null,
            brand_foundation: null,
            brand_mgmt: null,
            brand_operations: null,
            brand_transitions: null,
            rate: null,
            client_name: null
        }
        
    },

    computed: {
        
        service_total: function () {
            return Number(this.form.brand_design) + Number(this.form.research_insights) + Number(this.form.content_strategy) + Number(this.form.platforms) + Number(this.form.campaigns) + Number(this.form.activations) + Number(this.form.consulting) + Number(this.form.brand_foundation) + Number(this.form.brand_mgmt) + Number(this.form.brand_operations) + Number(this.form.brand_transitions);

            return false;
        },

        rate_service: function() {
            return this.service_total * Number(this.form.rate);                    
        },

        ultra_value: function() {
            return Number(this.impact_rate) + Number(this.timeline_rate) + this.service_total;
        },

        low_estimate: function() {
            return this.ultra_value * Number(this.form.rate) * 0.75;
        },

        median_estimate: function() {
            return this.ultra_value * Number(this.form.rate) * 1;
        },

        high_estimate: function() {
            return this.ultra_value * Number(this.form.rate) * 1.25;
        },
        suggested_monthly_low: function() {
            return this.low_estimate / 12;
        },
        suggested_monthly_high: function() {
            return this.high_estimate / 12;
        },
        suggested_deposit_low: function() {
            return this.low_estimate * 0.5;
        },
        suggested_deposit_high: function() {
            return this.high_estimate * 0.5;
        },
        profit: function() {
            return this.median_estimate * 0.65;
        }
    },

    methods: {

        prevStep: function()
        {
            this.step--;
        },
        nextStep: function()
        {
           
            this.step++;
        },
        sendInquiry: function()
        {
            alert('this has been sent!');
        },
        resetForm() {
            console.log('Reseting the form')
            var self = this; //you need this because *this* will refer to Object.keys below`

            //Iterate through each object field, key is name of the object field`
            Object.keys(this.data.form).forEach(function(key,index) {
            self.data.form[key] = '';
            });
        }

    },

    mounted(){
    }
});