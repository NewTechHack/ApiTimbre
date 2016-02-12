(function(){
    var config, environment;
    environment = process.env.NODE_ENV || 'development';
    config = {
        development: {
            cassandra_url: ['10.16.1.6','10.16.1.7','10.16.1.8'],
            redis_metrics: {
                    host: "10.16.1.9",
                    port: "6379"
                    }
        },
        dev: {
            cassandra_url: ['10.16.1.6','10.16.1.7','10.16.1.8'],
             redis_metrics: {
                    host: "10.16.1.9",
                    port: "6379"
                    }
        },
        production: {
            cassandra_url: ['10.10.53.254','10.10.54.254','10.10.55.254'],
             redis_metrics: {
                    host: "10.10.52.6",
                    port: "6379"
                    }
        }
    };

    exports.cassandra_url= config[environment]['cassandra_url'];
    exports.redis_metrics = config[environment]['redis_metrics'];
}).call(this);
