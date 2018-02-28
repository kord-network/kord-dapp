import React from 'react'
import { compose, withState } from 'recompose'
import { Box, Button, Input, Label, Text } from 'jaak-primitives'

import { readFileAsText } from 'core/util'

const AccountForm = ({
  keystore,
  keystoreName,
  password,
  setKeystore,
  setKeystoreName,
  setPassword,
  onCreateKeystore,
  onSubmitForm,
}) => (
  <Box
    flexDirection="column"
    size={['auto', '50vh']}
    padding={['30px', '15px']}
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
      >
        {keystoreName}
      </Label>
      <Input
        display="none"
        id="keystoreInput"
        type="file"
        onChange={({ target: { files: [keystore] } }) =>
          readFileAsText(keystore)
            .then(setKeystore)
            .then(setKeystoreName(keystore.name))
        }
      />
      <Button
        size={['50px', '100%']}
        backgroundColor="#f0f0f0"
        disabled={!password}
        onClick={() => onCreateKeystore()}
      >
        <Text>Dont have a keystore? Create one here</Text>
      </Button>
    </Box>
    <Box>
      <Button
        size={['60px', '100%']}
        backgroundColor="#f7f7f7"
        lineHeight="60px"
        onClick={() => onSubmitForm(keystore, password)}
      >
        <Text textAlign="center">Submit</Text>
      </Button>
    </Box>
  </Box>
)

const enhanceComp = compose(
  withState('keystore', 'setKeystore', null),
  withState('keystoreName', 'setKeystoreName', 'Upload Keystore'),
  withState('password', 'setPassword', '')
)

export default enhanceComp(AccountForm)
