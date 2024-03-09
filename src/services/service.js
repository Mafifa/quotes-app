const URL = 'https://api.api-ninjas.com/v1/quotes?category='
const API_KEY = 'WQuGLKoVcAvjLO4kLvSVpQ==0AmOmP7D25PDkmVm'
const IMAGE_API_KEY = '7u1BHLA6aYv30TGOfP7zK2pCqtqLaRf0xG3AyhBa1vFhDwvqPgAwhNWj'

export async function taketQuote ({ topic }) {
  try {
    const response = await fetch(URL + topic, {
      method: 'GET',
      headers: { 'X-Api-Key': API_KEY }
    })
    const json = await response.json()

    console.log('API CALLED')

    return json
  } catch (e) {
    throw new Error('Error API CALLED')
  }
}
