import usersHttps from './api/users-http'

function getUsersStaff() {
  return Promise.resolve(usersStaff);
}

function getUsersEmployees() {
  return Promise.resolve(usersEmployees);
}

export default {
  getUsersStaff,
  getUsersEmployees
}

const usersStaff = [
  {
    id: 1,
    img: require('@/assets/images/avatar-test.jpg'),
    firstName: 'Tom',
    lastName: 'Haven',
    email: 'gromova@gmail.com',
    role: 'Модератор',
    login_date: '21/10/2021',
  },
  {
    id: 2,
    img: require('@/assets/images/avatar-test.jpg'),
    firstName: 'John',
    lastName: 'Haven',
    email: 'gromova@gmail.com',
    role: 'Модератор',
    login_date: '21/10/2021',
  },
  {
    img: require('@/assets/images/avatar-test.jpg'),
    firstName: 'Morgan',
    lastName: 'Haven',
    email: 'gromova@gmail.com',
    role: 'Модератор',
    login_date: '21/10/2021',
  },
  {
    id: 3,
    img: require('@/assets/images/avatar-test.jpg'),
    firstName: 'Jessy',
    lastName: 'Haven',
    email: 'gromova@gmail.com',
    role: 'Модератор',
    login_date: '21/10/2021',
  }
]


const usersEmployees =[
  {
    id: 1,
    img: require('@/assets/images/avatar-test.jpg'),
    firstName: 'Tom',
    lastName: 'Haven',
    email: 'gromova@gmail.com',
    position: 'Специалист с обслуживания клиентов',
    affiliate: 'бул. Леси Украинки, 7',
    progress: '98%'
  },
  {
    id: 2,
    img: require('@/assets/images/avatar-test.jpg'),
    firstName: 'John',
    lastName: 'Haven',
    email: 'gromova@gmail.com',
    position: 'Специалист с обслуживания клиентов',
    affiliate: 'бул. Леси Украинки, 7',
    progress: '95%'
  },
  {
    id: 3,
    img: require('@/assets/images/avatar-test.jpg'),
    firstName: 'Morgan',
    lastName: 'Haven',
    email: 'gromova@gmail.com',
    position: 'Специалист с обслуживания клиентов',
    affiliate: 'бул. Леси Украинки, 7',
    progress: '96%'
  },
  {
    id: 4,
    img: require('@/assets/images/avatar-test.jpg'),
    firstName: 'Jessy',
    lastName: 'Haven',
    email: 'gromova@gmail.com',
    position: 'Специалист с обслуживания клиентов',
    affiliate: 'бул. Леси Украинки, 7',
    progress: '97%'
  }
]
