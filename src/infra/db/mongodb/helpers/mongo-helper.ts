import { MongoClient, Collection } from 'mongodb'

export const MongoHelper = {
  client: null as MongoClient,

  async connet (uri: string): Promise<void> {
    this.client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  },

  async disconnect(): Promise<void> {
    await this.client.close()
  },

  getCollection (name: string): Collection {
    return this.client.db().collection(name)
  },

  map: (collection: any): any => {
    const { _id, ...collectionWithhoutId } = collection
    return Object.assign({}, collectionWithhoutId, { id: _id })
  }
}