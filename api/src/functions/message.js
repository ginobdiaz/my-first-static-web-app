const { app } = require('@azure/functions');

app.http('message', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const randomDecimal = Math.random();
        const name = request.query.get('name') || await request.text() || 'world';

        return { 'body': `Hello, ${name} - ${randomDecimal.toFixed(2)}!` };
    }
});
