const connection        = require('../../database/connection');
const PublisherFactory  = require('./publisher-factory');

class PublisherProvider {

    constructor(connection) {
        this.connection = connection;
    }

    provide(id) {
        let factory = new PublisherFactory();
        return connection('publishers').where({'publishers.id': id})
            .then(results => results.map(element => factory.make(element)))
    }

    provideAll() {
        let factory = new PublisherFactory();
        return this.connection.select().from('publishers')
            .where({deleted_at: null})
            .then(publisherRaw => publisherRaw.map(element => factory.make(element)));
    }
}

module.exports = PublisherProvider;
