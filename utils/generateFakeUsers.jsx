import { faker } from "@faker-js/faker"

const generateFakeUser = () => {
  return {
    id: faker.datatype.uuid(),
    fullName: faker.name.fullName(),
    avatar: faker.image.people(640, 640, true),
    location: {
      city: faker.address.city(),
      country: faker.address.country(),
    },
  }
}

export const generateFakeUsers = (length) => {
  const users = []

  Array.from({ length: length }).forEach(() => {
    users.push(generateFakeUser())
  })

  return users
}
