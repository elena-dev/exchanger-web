export const state = () => ([
  {
    id: '0',
    link: '0',
    title: 'Дмитрий',
    text: 'Молодцы, перевод с карты Приват на ADVCash за считанные секунды и курс понравился. Отличный обменник!',
    date: '3 дня назад'
  },
  {
    id: '1',
    link: '1',
    title: 'Дмитрий',
    text: 'Молодцы, перевод с карты Приват на ADVCash за считанные секунды и курс понравился. Отличный обменник!',
    date: '3 дня назад'
  },
  {
    id: '2',
    link: '2',
    title: 'Дмитрий',
    text: 'Молодцы, перевод с карты Приват на ADVCash за считанные секунды и курс понравился. Отличный обменник!',
    date: '3 дня назад'
  },
  {
    id: '3',
    link: '3',
    title: 'Дмитрий',
    text: 'Молодцы, перевод с карты Приват на ADVCash за считанные секунды и курс понравился. Отличный обменник!',
    date: '3 дня назад'
  },
  {
    id: '4',
    link: '4',
    title: 'Дмитрий',
    text: 'Молодцы, перевод с карты Приват на ADVCash за считанные секунды и курс понравился. Отличный обменник!',
    date: '3 дня назад'
  }
])

export const getters = {
  Last: state => {
    return state.slice(state.length - 3, state.length).reverse()
  },
  All: state => {
    return state
  }
}