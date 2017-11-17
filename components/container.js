import styled from 'react-emotion/macro'
import { SITE_PADDING } from '../constants'

const Container = styled('div')`
  box-sizing: border-box;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${SITE_PADDING}rem;
  background-color: #f7f7df;
  background-image: url(https://res.cloudinary.com/silvenon/image/upload/v1510768262/skulls_qjersh.png);
`

export default Container
