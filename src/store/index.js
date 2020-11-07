import create from 'zustand'
import axios from 'axios'

axios.defaults.baseURL = 'https://api.punkapi.com/v2/beers'

const useStore = create(set => ({
  beers: [],

  /* 
    FUNCTION 
  */
  fetchRandom: async () => {
    try {
      const { data: randBeer } = await axios.get('/random') // fetch a new random array

      randBeer.comments = []
      randBeer.likes = 0
      set(state => ({ beers: randBeer.concat(state.beers) }))
    } catch (err) {
      console.log(err)
    }
  },
}))

export default useStore
