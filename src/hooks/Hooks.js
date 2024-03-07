import { useEffect, useState } from 'react'
import mock from '../hooks/mock.json'
const API_KEY = 'WQuGLKoVcAvjLO4kLvSVpQ==0AmOmP7D25PDkmVm'
const IMAGE_API_KEY = '7u1BHLA6aYv30TGOfP7zK2pCqtqLaRf0xG3AyhBa1vFhDwvqPgAwhNWj'
const URL = 'https://api.api-ninjas.com/v1/quotes?category='

export function Quotes () {
  const [quote, setQuote] = useState(mock)
  const [stringQuote, setQuoteString] = useState()
  const [stringAuthor, setAuthor] = useState()

  useEffect(() => {
    setQuoteString(quote[0].quote)
    setAuthor(quote[0].author)
  }, [quote])

  const getQuote = () => {
    fetch(URL + 'happiness', {
      method: 'GET',
      headers: { 'X-Api-Key': API_KEY }
    }).then(response => response.json())
      .then(json => setQuote(json))
    console.log('Quote Called')
  }

  return { stringAuthor, stringQuote, getQuote }
}
