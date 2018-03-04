import React from 'react'
import { Box, Button, Input, Label, Text } from 'jaak-primitives'
import { compose, withState } from 'recompose'

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
    padding={['30px', '15px']}
    size={['auto', '50vh']}
  >
    <Box flexDirection="column">
      <Label>Keystore Password</Label>
      <Input
        margin={['15px', '0']}
        onChange={({ target: { value } }) => setPassword(value)}
        padding={['10px', '0']}
        placeholder="Enter password for your keystore"
        type="text"
        value={password}
      />
    </Box>
    <Box padding={['30px', '0']}>
      <Label
        backgroundColor="#f7f7f7"
        htmlFor="keystoreInput"
        lineHeight="50px"
        textAlign="center"
      >
        {keystoreName}
      </Label>
      <Input
        display="none"
        id="keystoreInput"
        onChange={({ target: { files: [keystore] } }) =>
          readFileAsText(keystore)
            .then(setKeystore)
            .then(setKeystoreName(keystore.name))
        }
        type="file"
      />
      <Button
        backgroundColor="#f0f0f0"
        disabled={!password}
        onClick={() => onCreateKeystore()}
        size={['50px', '100%']}
      >
        <Text>Dont have a keystore? Create one here</Text>
      </Button>
    </Box>
    <Box>
      <Button
        backgroundColor="#f7f7f7"
        lineHeight="60px"
        onClick={() => onSubmitForm(keystore, password)}
        size={['60px', '100%']}
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
