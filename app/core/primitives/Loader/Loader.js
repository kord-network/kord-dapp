import styled from 'styled-components'
import { types, util } from 'jaak-primitives'

import { animation } from 'core/style'

/**
 * @namespace Loader
 * @desc Primitive styled-component 💅
 * @return {Function} React component
 */
const Loader = styled.div`
  ${util.background};
  ${util.border};
  ${util.boxModel};
  animation: ${animation.rotate360} 0.6s linear infinite;
  border-color: ${({ borderColor, theme }) =>
    `transparent transparent ${theme.palette[borderColor] ||
      borderColor} transparent`};
  transform-origin: ${({ transformOrigin }) => transformOrigin};
`

/**
 * @name defaultProps
 * @memberof Loader
 * @desc Primitive's default properties
 */
Loader.defaultProps = {
  backgroundSize: '100% auto',
  borderColor: 'primary',
  borderStyle: 'solid',
  borderWidth: [0, '10px', '17.3px', '10px'],
  margin: [0],
  padding: [0],
  size: [0],
  transformOrigin: 'origin',
}

/**
 * @name propTypes
 * @memberof Loader
 * @desc Primitive's prop type definitions
 */
Loader.propTypes = {
  ...types.background,
  ...types.borderTypes,
  ...types.boxModelTypes,
}

/** @component */
export default Loader
