import create from 'zustand'
import axios from 'axios'

axios.defaults.baseURL = 'https://api.punkapi.com/v2/beers'

const useStore = create((set, get) => ({
  beers: [],
  foodPairings: [],
  darkMode: true,

  /* 
    FUNCTIONS 
  */
  // Fetch a Random beer
  fetchRandom: async () => {
    try {
      const { data: randBeer } = await axios.get('/random') // fetch a new random array

      // add comments and likes property
      randBeer[0].comments = []
      randBeer[0].likeCount = 0

      const beers = get().beers
      const foodPairings = get().foodPairings

      const newBeers = randBeer.concat(beers)
      const newFoodPairings = randBeer[0].food_pairing.concat(foodPairings)

      set({
        beers: [...new Set(newBeers)],
        foodPairings: [...new Set(newFoodPairings)],
      })
    } catch (err) {
      console.log(err)
    }
  },

  // Give a like to a beer
  likeBeer: id => {
    let array = get().beers
    let objIdx = array.findIndex(obj => obj.id === id)

    array[objIdx].likeCount += 1
    set({ beers: array })
  },

  // add a comment to a beer
  addComment: (id, comment) => {
    let array = get().beers
    let objIdx = array.findIndex(obj => obj.id === id)
    const comm = { id: Date.now(), body: comment }
    array[objIdx].comments.push(comm)
    set({ beers: array })
  },

  // toggle between light mode and dark mode
  toggleDarkMode: () => {
    let mode = get().darkMode
    set({ darkMode: !mode })
  },
}))

export default useStore
