import React from 'react'
import { Image } from 'jaak-primitives'

const Logo = ({ maxWidth = 'initial', size = ['46px', 'auto'] }) => (
  <Image
    backgroundSize="contain"
    margin={['16px']}
    maxWidth={maxWidth}
    size={size}
    src="img/kord.png"
  />
)

export default Logo
