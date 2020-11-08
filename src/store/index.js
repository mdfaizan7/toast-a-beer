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

      const beers = get().beers
      const newArray = randBeer.concat(beers)

      set({ beers: [...new Set(newArray)] })
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

  addComment: (id, comment) => {
    let array = get().beers
    let objIdx = array.findIndex(obj => obj.id === id)
    const comm = { id: Date.now(), body: comment }
    array[objIdx].comments.push(comm)
    set({ beers: array })
  },

  getBeers: () => get().beers,
}))

export default useStore
