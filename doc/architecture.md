# Architecture

The META ID dapp is built with the following technologies:
- 💎 **Ethereum** - a decentralized platform that runs smart contracts
- 🍇 **GraphQL** - a query language for APIs
- ⚛️ **React** - a JavaScript library for building user interfaces
- 🗄 **Redux** - a predictable state container for JavaScript apps
- 💅 **Styled Components** - visual primitives for the component age
- 🐝 **Swarm** - a distributed storage platform and content distribution service

## `/core`
Code that is intended to be shared across the application.

#### Components
Reusable, functional React components composed of UI [Primitives](#primitives).
These components generally do not have any styles of their own and are not
connected to any data sources.

#### Constants
Configuration data used in the application, such as environment variables,
public OAuth keys and META Identity Claims Services marketplace data.

#### Containers
Top-level React components. `Root` is the entry component, `App` defines
the application layout and `Protected` is used to restrict access to certain
routes.

#### Middleware
Intercept Redux actions and emit conditional events.

#### Primitives
UI building blocks that are custom to the application and extend base primitives
from the [`jaak-primitives`](https://github.com/jaakmusic/primitives) package.

#### Reducers
Root reducer that combines all domain state into the Redux store.

#### Routes
Route configuration.

#### Services
Interfaces for network resources and other APIs.

#### Store
Redux store configuration.

#### Style
Style configuration and utilities.

#### Util
General utility functions, eg. for working with Ethereum accounts and META ID
APIs.

## `/domains`
Application logic and Redux state management.

#### Claims
Store of retrieved META Identity Claims graphs, keyed by Graph Name and Claim ID.

#### Identity
Store of newly created META Identity objects, keyed by Identity ID.

#### Profile
Store of resolved META Identity Profile Claim objects (from Swarm), keyed by
Claim ID.

#### Session
User session data, like the current user's Ethereum account and META Claims
Graph name.

#### UI
Application user interface data, like errors and loading state.


## `/pages`
Application views per route.

> TODO
