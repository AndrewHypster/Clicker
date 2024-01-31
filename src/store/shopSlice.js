import { createSlice } from "@reduxjs/toolkit";

const shopSlice = createSlice({
  name: 'shop',
  initialState: {
    shop: {
      cost: 1.9,
      earn: 1.4,
      tovar: [
        {
          name: 'Гусак',
          items: 0,
          cost: 5,
          earn: 2
        },
        {
          name: 'Бабка',
          items: 0,
          cost: 100,
          earn: 20
        },
        {
          name: 'Бавовнятко',
          items: 0,
          cost: 500,
          earn: 80
        },
        {
          name: 'Пес Патрон',
          items: 0,
          cost: 2000,
          earn: 250
        },
        {
          name: 'Запорожець',
          items: 0,
          cost: 20000,
          earn: 10000000
        },
        {
          name: 'ЗСУ',
          items: 0,
          cost: 100000,
          earn: 200000
        }
      ]
    }
  },
  reducers: {
    addItem(state, action) {
      const id = action.payload.id
      state.shop.tovar[id].items += action.payload.items
      state.shop.tovar[id].cost = Math.floor(state.shop.tovar[id].cost * state.shop.cost)
      state.shop.tovar[id].earn = Math.ceil(state.shop.tovar[id].earn * state.shop.earn)
    },

    setItems(state, action) {
      const id = action.payload.id
      state.shop.tovar[id].items = action.payload.items
      state.shop.tovar[id].cost = Math.floor(state.shop.tovar[id].cost * state.shop.cost * action.payload.items)
      state.shop.tovar[id].earn = Math.ceil(state.shop.tovar[id].earn * state.shop.earn * action.payload.items)
    }
  }
})

export const {addItem, setItems} = shopSlice.actions
export default shopSlice.reducer