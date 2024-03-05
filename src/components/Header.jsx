import GitHub from '../assets/ico/GitHub.svg'
import Twitter from '../assets/ico/Twitter.svg'
import Personal from '../assets/ico/Personal.svg'

export function Header () {
  return (
    <header>
      <nav className='border-gray-200 px-4 lg:px-6 py-2.5 bg-[#252422]'>
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>

          <div className='size-14'>
            <img src='public/Main-Logo.svg' alt='logo Mafifa' />
          </div>
          <div className='font-bold'>
            <a href='https://mafifa.github.io/' target='_blank' rel='nooperner noreferrer'>
              PORTFOLIO
            </a>
          </div>
          <div className='flex items-center'>
            <a href='https://github.com/Mafifa' target='_blank' rel='nooperner noreferrer'>
              <img className='size-6 mr-2' src={GitHub} alt='Link GITHUB' />
            </a>
            <a href='https://twitter.com/Mafifa_Charlys' target='_blank' rel='nooperner noreferrer'>
              <img className='size-5 ml-2' src={Twitter} alt='Link Twitter' />
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
