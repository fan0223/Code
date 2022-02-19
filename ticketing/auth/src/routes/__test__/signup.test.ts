import request from 'supertest'
import { app } from '../../app'

it('returns a 201 on successful signup', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'w@w.com',
      password: '123456'
    })
    .expect(201)
})

it('returns a 400 with an invalid email', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'modsaodn',
      password: '123456'
    })
    .expect(400)
})
it('returns a 400 with an invalid password', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'modsaodn@com',
      password: '123'
    })
    .expect(400)
})

it('disallows duplicate emails', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'w@w.com',
      password: '123456'
    })
    .expect(201)
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'w@w.com',
      password: '123456'
    })
    .expect(400)
})

it('sets a cookie after successful signup', async () => {
  const response = await request(app)
    .post('/api/users/signup')
    .send({
      email: 'w@w.com',
      password: '123456'
    })
    .expect(201)

  expect(response.get('Set-Cookie')).toBeDefined()
})