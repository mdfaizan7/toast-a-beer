import create from 'zustand'
import axios from 'axios'

axios.defaults.baseURL = 'https://api.punkapi.com/v2/beers'

const useStore = create((set, get) => ({
  beers: [],

  /* 
    FUNCTIONS 
  */
  fetchRandom: async () => {
    try {
      const { data: randBeer } = await axios.get('/random') // fetch a new random array

      randBeer[0].comments = []
      randBeer[0].likeCount = 0
      set(state => ({ beers: randBeer.concat(state.beers) }))
    } catch (err) {
      console.log(err)
    }
  },

  likeBeer: id => {
    let array = get().beers
    let objIdx = array.findIndex(obj => obj.id === id)

    array[objIdx].likeCount += 1
    set({ beers: array })
  },
}))

export default useStore
