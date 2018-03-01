import { generate } from 'ethereumjs-wallet'
import { bufferToHex } from 'ethereumjs-util'

import { KordGraph } from 'core/services'
import createClaimVariables from './fixtures/create-claim-variables.json'
import createGraphResponse from './fixtures/create-graph-response.json'
import createGraphVariables from './fixtures/create-graph-variables.json'
import readClaimsByGraphVariables from './fixtures/read-claims-graph-variables.json'
import setGraphVariables from './fixtures/set-graph-variables.json'

jest.mock('core/services/kord-network')

describe('core/services/kord-graph/createGraph', () => {
  it('Should return successful mutation response', async () => {
    // generate a new public address
    const address = bufferToHex(generate().getAddress())

    // update test data to avoid duplicate graph error
    createGraphResponse.createGraph.id = address
    createGraphVariables.graph.id = address

    const actual = await KordGraph.createGraph(createGraphVariables)
    const expected = createGraphResponse

    expect(actual).toEqual(expected)
  })
})

describe('core/services/kord-graph/setGraph', () => {
  it('Should return successful mutation response', async () => {
    const actual = await KordGraph.setGraph(setGraphVariables)

    expect(actual).toMatchSnapshot()
  })
})

describe('core/services/kord-graph/createClaim', () => {
  it('Should return successful mutation response', async () => {
    const actual = await KordGraph.createClaim(createClaimVariables)

    expect(actual).toMatchSnapshot()
  })
})

describe('core/services/kord-graph/readClaimsByGraph', () => {
  it('Should return successful mutation response', async () => {
    const actual = await KordGraph.readClaimsByGraph(readClaimsByGraphVariables)

    expect(actual).toHaveProperty('graph.id')
    expect(actual).toHaveProperty('graph.claim')
  })
})
