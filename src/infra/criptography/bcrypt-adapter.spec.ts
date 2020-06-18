import bcrypt from 'bcrypt'
import { BcryptAdapter } from './bcrypt-adapter'
import { Hash } from 'crypto'
import { resolve } from 'path'

const salt = 12

describe('Bcrypt Adapter', () => {
  test('Should call bcrypt with correct values', async () => {
    const sut = new BcryptAdapter(salt)
    const hashSpy = jest.spyOn(bcrypt, 'hash')
    await sut.encrypt('any_password')
    expect(hashSpy).toHaveBeenCalledWith('any_password', salt)
  })

  test('Should return a hash on success', async () => {
    const sut = new BcryptAdapter(salt)
    jest.spyOn(bcrypt, 'hash').mockReturnValueOnce(new Promise(resolve => resolve('hash')))
    const hash = await sut.encrypt('any_password')
    expect(hash).toBe('hash')
  })
})
