const cities = [
  {
    id: 1,
    name: 'Житомир'
  },
  {
    id: 2,
    name: 'Киев'
  },
  {
    id: 3,
    name: 'Харьков'
  }
]

const roles = [
  {
    id: 1,
    name: 'Сотрудник',
    role: 'employee'
  },
  {
    id: 2,
    name: 'Модератор',
    role: 'moderator'
  },
  {
    id: 3,
    name: 'Менеджер',
    role: 'manager'
  }
]


export function getCities() {
  return Promise.resolve(cities);
}

export function getRoles() {
  return Promise.resolve(roles)
}

