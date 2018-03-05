import { generate } from 'ethereumjs-wallet'
import { bufferToHex } from 'ethereumjs-util'

import { KordGraph } from 'core/services'
import createClaimVariables from './fixtures/create-claim-variables.json'
import createGraphVariables from './fixtures/create-graph-variables.json'
import readClaimsByGraphVariables from './fixtures/read-claims-graph-variables.json'
import setGraphVariables from './fixtures/set-graph-variables.json'

jest.mock('core/services/kord-network')

describe('core/services/kord-graph/createGraph', () => {
  it('Should return successful mutation response', async () => {
    // generate a new public address
    const address = bufferToHex(generate().getAddress())

    // update test data to avoid duplicate graph error
    createGraphVariables.graph.id = address

    const actual = await KordGraph.createGraph(createGraphVariables)

    // anonymize API response to match snapshot
    actual.data.createGraph.id = '0x0000000000000000000000000000000000000000'
    actual.extensions.meta.swarmHash =
      '0x0000000000000000000000000000000000000000000000000000000000000000'

    expect(actual).toMatchSnapshot()
  })
})

describe('core/services/kord-graph/setGraph', () => {
  it('Should return successful mutation response', async () => {
    const actual = await KordGraph.setGraph(setGraphVariables)

    // anonymize API response to match snapshot
    actual.setGraph.id = '0x0000000000000000000000000000000000000000'

    expect(actual).toMatchSnapshot()
  })
})

describe('core/services/kord-graph/createClaim', () => {
  it('Should return successful mutation response', async () => {
    const actual = await KordGraph.createClaim(createClaimVariables)

    // anonymize API response to match snapshot
    actual.extensions.meta.swarmHash =
      '0x0000000000000000000000000000000000000000000000000000000000000000'

    expect(actual).toMatchSnapshot()
  })
})

describe('core/services/kord-graph/readClaimsByGraph', () => {
  it('Should return query response', async () => {
    const actual = await KordGraph.readClaimsByGraph(readClaimsByGraphVariables)

    expect(actual).toHaveProperty('graph.id')
    expect(actual).toHaveProperty('graph.claim')
  })
})
