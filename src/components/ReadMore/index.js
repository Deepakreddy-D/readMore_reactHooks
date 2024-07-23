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

  const [para, showPara] = useState(false)

  const buttonName = para ? 'Read More' : 'Read Less'

  const text = para
    ? reactHooksDescription.slice(0, 170)
    : reactHooksDescription

  const onChangeReadButton = () => {
    // para = text.slice(0,100)
    showPara(prevState => !prevState)
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
