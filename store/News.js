export const state = () => ([
  {
    id: '0',
    link: '0',
    title: 'Изменение рабочего времени сайта',
    text: 'Уважаемые клиенты хотим сообщить Вам, что с 29.10.2017 Наш сервис переходит на зимнее время и меняет часы своей работы.Теперь рабочее время нашего сервиса будет с 8:00 до 23:00 по Киевсокму времени.',
    date: '14 ноября 2017 г.'
  },
  {
    id: '1',
    link: '1',
    title: 'Изменение рабочего времени сайта',
    text: 'Уважаемые клиенты хотим сообщить Вам, что с 29.10.2017 Наш сервис переходит на зимнее время и меняет часы своей работы.Теперь рабочее время нашего сервиса будет с 8:00 до 23:00 по Киевсокму времени.',
    date: '14 ноября 2017 г.'
  },
  {
    id: '2',
    link: '2',
    title: 'Изменение рабочего времени сайта',
    text: 'Уважаемые клиенты хотим сообщить Вам, что с 29.10.2017 Наш сервис переходит на зимнее время и меняет часы своей работы.Теперь рабочее время нашего сервиса будет с 8:00 до 23:00 по Киевсокму времени.',
    date: '14 ноября 2017 г.'
  },
  {
    id: '3',
    link: '3',
    title: 'Изменение рабочего времени сайта',
    text: 'Уважаемые клиенты хотим сообщить Вам, что с 29.10.2017 Наш сервис переходит на зимнее время и меняет часы своей работы.Теперь рабочее время нашего сервиса будет с 8:00 до 23:00 по Киевсокму времени.',
    date: '14 ноября 2017 г.'
  },
  {
    id: '4',
    link: '4',
    title: 'Изменение рабочего времени сайта',
    text: 'Уважаемые клиенты хотим сообщить Вам, что с 29.10.2017 Наш сервис переходит на зимнее время и меняет часы своей работы.Теперь рабочее время нашего сервиса будет с 8:00 до 23:00 по Киевсокму времени.',
    date: '14 ноября 2017 г.'
  },
  {
    id: '5',
    link: '5',
    title: 'Изменение рабочего времени сайта',
    text: 'Уважаемые клиенты хотим сообщить Вам, что с 29.10.2017 Наш сервис переходит на зимнее время и меняет часы своей работы.Теперь рабочее время нашего сервиса будет с 8:00 до 23:00 по Киевсокму времени.',
    date: '14 ноября 2017 г.'
  },
  {
    id: '6',
    link: '6',
    title: 'Изменение рабочего времени сайта',
    text: 'Уважаемые клиенты хотим сообщить Вам, что с 29.10.2017 Наш сервис переходит на зимнее время и меняет часы своей работы.Теперь рабочее время нашего сервиса будет с 8:00 до 23:00 по Киевсокму времени.',
    date: '14 ноября 2017 г.'
  },
  {
    id: '7',
    link: '7',
    title: 'Изменение рабочего времени сайта',
    text: 'Уважаемые клиенты хотим сообщить Вам, что с 29.10.2017 Наш сервис переходит на зимнее время и меняет часы своей работы.Теперь рабочее время нашего сервиса будет с 8:00 до 23:00 по Киевсокму времени.',
    date: '14 ноября 2017 г.'
  },
  {
    id: '8',
    link: '8',
    title: 'Изменение рабочего времени сайта',
    text: 'Уважаемые клиенты хотим сообщить Вам, что с 29.10.2017 Наш сервис переходит на зимнее время и меняет часы своей работы.Теперь рабочее время нашего сервиса будет с 8:00 до 23:00 по Киевсокму времени.',
    date: '14 ноября 2017 г.'
  },
  {
    id: '9',
    link: '9',
    title: 'Изменение рабочего времени сайта',
    text: 'Уважаемые клиенты хотим сообщить Вам, что с 29.10.2017 Наш сервис переходит на зимнее время и меняет часы своей работы.Теперь рабочее время нашего сервиса будет с 8:00 до 23:00 по Киевсокму времени.',
    date: '14 ноября 2017 г.'
  }
])

export const getters = {
  Last: state => {
    return state.slice(state.length - 3, state.length).reverse()
  },
  All: state => {
    return state
  },
}
