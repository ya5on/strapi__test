module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: 'mongodb://admin:532514242@cluster0-shard-00-00-13lh4.mongodb.net:27017,cluster0-shard-00-01-13lh4.mongodb.net:27017,cluster0-shard-00-02-13lh4.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',
      },
      options: {
        ssl: true,
      },
    },
  },
});