import { Quotes } from '../hooks/Hooks'
import '../assets/styles/Button.css'
import { Loading } from './Loading'

export function Body () {
  const { loading, stringQuote, stringAuthor, getQuote } = Quotes()

  console.log('Primera parte renderizado')

  const handleClick = () => {
    console.log(stringAuthor)
    console.log(stringQuote)
    getQuote()
  }

  console.log('Segunda parte renderizado')

  return (
    <section className='flex flex-col items-center justify-center p-8'>
      <h1 className='text-3xl font-bold m-10 text-pretty text-center'>Motivational Quotes App</h1>

      <div className='p-8 my-aut lg:max-w-screen-sm  bg-[#310055]/60 rounded-2xl'>
        <div className='flex items-center justify-center'>
          <p className='text-xl text-pretty text-center max w-1/2'>
            {loading ? (<Loading />) : `"${stringQuote}"`}
          </p>
          <div className='flex w-1/2 m-auto items-center justify-center'>
            <img className='size-56' src='public/marco aurelio1.jpg' alt='image autor' />
          </div>
        </div>
        <p className='font-bold'>Author: {stringAuthor}</p>
      </div>
      <button onClick={handleClick} className='bn5 mt-3' disabled={loading}>
        {loading ? 'Loading...' : 'Next Quote'}
      </button>
    </section>
  )
}
