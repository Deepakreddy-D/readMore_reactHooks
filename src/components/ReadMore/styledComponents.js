import styled from 'styled-components'

export const Bg = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`

export const Card = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 350px;
  @media screen and (min-width: 768px) {
    max-width: 550px;
  }
  margin-top: 90px;
  margin-bottom: 90px;
`

export const Head = styled.h1`
  font-family: 'Roboto';
`
export const Subhead = styled.p`
  color: #334155;
`

export const Image = styled.img`
  width: 100%;
  //   height: 400px;
  @media screen and (min-width: 768px) {
    width: 100%;
    // height: 700px;
  }
`

export const Para = styled.p`
  color: #334155;
  font-family: 'roboto';
  line-height: 1.7;
`

export const ReadButton = styled.button`
  border-width: 0;
  border-radius: 11px;
  padding: 9px 20px;
  background-color: #1f81ff;
  color: white;
  font-family: 'Roboto';
`
