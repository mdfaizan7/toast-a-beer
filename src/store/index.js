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

      let array = get().beers
      let objIdx = array.findIndex(obj => obj.id === randBeer.id)

      if (objIdx === -1) {
        randBeer[0].comments = []
        randBeer[0].likeCount = 0
        set(state => ({ beers: randBeer.concat(state.beers) }))
      }
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

  sortByLikes: () => {
    let beers = get().beers
    beers.sort((a, b) => b.likeCount - a.likeCount)
    set({ beers })
  },
}))

export default useStore
