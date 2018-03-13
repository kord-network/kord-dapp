import { createConnectedLink } from 'found'

const Link = createConnectedLink({
  getFound: store => store.get('found'),
})

export default Link
