import {useState} from 'react'

import {
  Bg,
  Card,
  Head,
  Subhead,
  Image,
  Para,
  ReadButton,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props

  const [isMore, showIsMore] = useState(false)

  const buttonName = isMore ? 'Read Less' : 'Read More'

  const text = isMore
    ? reactHooksDescription
    : reactHooksDescription.slice(0, 170)

  const onChangeReadButton = () => {
    // isMore = text.slice(0,100)
    showIsMore(prevState => !prevState)
  }

  return (
    <Bg>
      <Card>
        <Head>React Hooks</Head>
        <Subhead>Hooks are a new addition to React</Subhead>
        <Image
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <Para>{text}</Para>
        <ReadButton type="button" onClick={onChangeReadButton}>
          {buttonName}
        </ReadButton>
      </Card>
    </Bg>
  )
}

export default ReadMore
