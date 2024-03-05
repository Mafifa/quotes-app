export function Body () {
  return (
    <section className='flex flex-col items-center justify-center p-8'>
      <h1 className='text-3xl font-bold m-10'>Motivational Quotes App</h1>
      <div className='p-8 my-aut  bg-[#310055]/60 rounded-2xl'>
        <div className='flex items-center justify-center'>
          <p className='text-xl text-pretty text-center max w-1/2'>
            " Haz lo que puedas, con lo que tengas y no te detengas"
          </p>
          <div className='flex w-1/2 m-auto items-center justify-center'>
            <img className='size-56' src='public/marco aurelio1.jpg' alt='image autor' />
          </div>
        </div>
        <p>Author</p>
      </div>
    </section>
  )
}
