import React from 'react'
import { compose, withState } from 'recompose'
import { Box, Input, Label, Text, Button } from 'jaak-primitives'

import { readFileAsText } from 'core/util'

const AccountForm = ({
  submitFormAction,
  keystore,
  password,
  keystoreName,
  setKeystore,
  setPassword,
  setKeystoreName,
}) => (
  <Box
    flexDirection="column"
    size={['auto', '50vh']}
    padding={['30px', '15px']}
    style={{
      alignItems: 'space-between',
    }}
  >
    <Box flexDirection="column">
      <Label>Keystore Password</Label>
      <Input
        margin={['15px', '0']}
        padding={['10px', '0']}
        type="text"
        placeholder="Enter password for your keystore"
        value={password}
        onChange={({ target: { value } }) => setPassword(value)}
      />
    </Box>
    <Box padding={['30px', '0']}>
      <Label
        htmlFor="keystoreInput"
        textAlign="center"
        lineHeight="50px"
        backgroundColor="#f7f7f7"
        style={{
          width: '100%',
          height: '50px',
          display: 'block',
          cursor: 'pointer',
        }}
      >
        {keystoreName !== null ? keystoreName : 'Upload Keystore'}
      </Label>
      <Input
        display="none"
        id="keystoreInput"
        type="file"
        onChange={({ target: { files: [ks] } }) => {
          setKeystoreName(ks.name)

          return readFileAsText(ks).then(setKeystore)
        }}
      />
      <Button
        size={['50px', '100%']}
        backgroundColor="#f0f0f0"
        onClick={() => password !== '' && console.info(`Create keystore`)}
      >
        <Text>Dont have a keystore? Create one here</Text>
      </Button>
    </Box>
    <Box>
      <Button
        size={['60px', '100%']}
        backgroundColor="#f7f7f7"
        lineHeight="60px"
        onClick={() => submitFormAction(keystore, password)}
      >
        <Text textAlign="center">Submit</Text>
      </Button>
    </Box>
  </Box>
)

const enhanceComp = compose(
  withState('keystore', 'setKeystore', null),
  withState('keystoreName', 'setKeystoreName', null),
  withState('password', 'setPassword', '')
)

export default enhanceComp(AccountForm)
