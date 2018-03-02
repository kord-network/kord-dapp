/**
 * Default GraphQL query to display in GraphiQL
 *
 * @see https://github.com/graphql/graphiql#usage
 *
 * @type {String}
 */
export const QUERY = `
mutation createGraph($graphInput: GraphInput!) {
  createGraph(input: $graphInput) {
    id
  }
}

# query {
#   graph(id:"0x3a60146439367ed7bbfe21f54c392a23927dce11") {
#     id
#     claim(filter:{}) {
#       id
#       claim
#       property
#     }
#   }
# }
`

/**
 * Default GraphQL variables to display in GraphiQL
 *
 * @see https://github.com/graphql/graphiql#usage
 *
 * @type {String}
 */
export const VARIABLES = `{
  "graphInput": {
    "id": "0x3a60146439367ed7bbfe21f54c392a23927dce11"
  }
}`
