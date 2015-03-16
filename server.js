var Hapi = require('hapi')
  , Path = require('path');

var server = new Hapi.Server();

server.views({
    engines: {
        html: require('nunjucks')
    },
    path: Path.join(__dirname, 'templates')
})

server.connection({ port: 3000 });

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hi, YOU!');
    }
});

server.route({
    method: 'GET',
    path: '/words',
    handler: function (request, reply) {
        reply.file('templates/words.html');
    }
});

server.route({
    method: 'GET',
    path: '/projects',
    handler: function (request, reply) {
        reply.file('templates/projects.html');
    }
});

server.route({
    method: 'GET',
    path: '/talks',
    handler: function (request, reply) {
        reply.file('templates/talks.html');
    }
});

server.route({
    method: 'GET',
    path: '/about',
    handler: function (request, reply) {
        reply.file('templates/about.html');
    }
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});
