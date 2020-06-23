import { MongoHelper as sut } from "./mongo-helper"

describe('Mongo Helper', () => {
  beforeAll( async () => {
    await sut.connet(process.env.MONGO_URL)
  })

  afterAll( async () => {
    await sut.disconnect()
  })

  test('Should resonnetc if mongodb is down', async () => {
    let accountCollection = await sut.getCollection('accounts')
    expect(accountCollection).toBeTruthy()
    await sut.disconnect()
    accountCollection = await sut.getCollection('accounts')
    expect(accountCollection).toBeTruthy()
  })
})