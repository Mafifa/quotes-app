import { useEffect, useMemo, useState } from 'react'
import { taketQuote } from '../services/service'
import mock from '../hooks/mock.json'

const IMAGE_API_KEY = '7u1BHLA6aYv30TGOfP7zK2pCqtqLaRf0xG3AyhBa1vFhDwvqPgAwhNWj'

export function Quotes () {
  const [quote, setQuote] = useState(mock)
  const [stringQuote, setQuoteString] = useState('')
  const [stringAuthor, setAuthor] = useState('')
  const [topic, setTopic] = useState('inspirational')
  const [loading, setLoad] = useState(false)

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
  }, [quote, TOPICS])

  const getQuote = async () => {
    try {
      setLoad(true)
      const newQuote = await taketQuote({ topic })
      console.log(newQuote)
      setQuote(newQuote)
    } catch (e) {
      console.log('Ocurrio un error llamando a la API')
    } finally {
      setLoad(false)
    }
  }

  return { loading, stringAuthor, stringQuote, getQuote }
}
