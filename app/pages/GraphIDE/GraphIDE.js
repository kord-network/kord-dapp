import React, { Component } from 'react'
import GraphiQL from 'graphiql'
import 'graphiql/graphiql.css'

import { GRAPH_IDE } from 'core/constants'
import { graphIDE } from 'core/util'

class GraphIDE extends Component {
  render() {
    return (
      <GraphiQL
        defaultQuery={GRAPH_IDE.QUERY}
        fetcher={graphIDE.makeGraphQLFetcher}
        variables={GRAPH_IDE.VARIABLES}
      >
        <GraphiQL.Logo>KORD</GraphiQL.Logo>
      </GraphiQL>
    )
  }
}

export default GraphIDE
