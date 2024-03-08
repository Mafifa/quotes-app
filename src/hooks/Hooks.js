import { useEffect, useMemo, useState } from 'react'
import mock from '../hooks/mock.json'

const API_KEY = 'WQuGLKoVcAvjLO4kLvSVpQ==0AmOmP7D25PDkmVm'
const IMAGE_API_KEY = '7u1BHLA6aYv30TGOfP7zK2pCqtqLaRf0xG3AyhBa1vFhDwvqPgAwhNWj'
const URL = 'https://api.api-ninjas.com/v1/quotes?category='

export function Quotes () {
  const [quote, setQuote] = useState(mock)
  const [stringQuote, setQuoteString] = useState('')
  const [stringAuthor, setAuthor] = useState('')
  const [topic, setTopic] = useState('inspirational')

  // TO GET RANDOM TOPICS
  const TOPICS = useMemo(() => {
    return [
      'attitude', 'courage', 'dad', 'success',
      'money', 'learning', 'leadership', 'knowledge',
      'intelligence', 'inspirational', 'failure', 'change', 'attitude'
    ]
  }, [])

  useEffect(() => {
    setQuoteString(quote[0]?.quote)
    setAuthor(quote[0]?.author)
  }, [quote])

  useEffect(() => {
    const randomIndex = () => Math.floor(Math.random() * TOPICS.length)
    const newTopic = TOPICS[randomIndex()]
    setTopic(newTopic)
  }, [TOPICS])

  const getQuote = () => {
    fetch(URL + topic, {
      method: 'GET',
      headers: { 'X-Api-Key': API_KEY }
    })
      .then(response => response.json())
      .then(json => {
        setQuote(json)
        console.log(json)
      })
      .catch(error => console.error('Error fetching quotes:', error))
    console.log('Quote Called')
  }

  return { stringAuthor, stringQuote, getQuote }
}
