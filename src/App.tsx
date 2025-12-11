import { useState, useEffect } from 'react'
import bannerArry from './data/banner.json'


function App() {
  const [count, setCount] = useState(0)

  useEffect(()=> {
    document.body.classList.add("dim");

    return () => {
      document.body.classList.remove("dim");
    }

  }, [])

return (
    <>
      <div className="card">
        <section style={{
          backgroundImage : `url(${bannerArry[count].imgurl})` 
        }} className='h-[100vh] flex justify-center items-center bg-cover relative'>

          <h2 className='xl:text-[60px] lg:text-[30px] md-text-[25px] text-[20px] 
                         hover:text-white hover:font-bold'>{bannerArry[count].title}</h2>

          <div className='absolute w-full bottom-0 start-0 flex xl:gap-4 md:gap-3 gap-2 justify-center mb-[50px]
          xl:mb-[50px] lg:mb-[30px] mb-[20px]'>
          {
            bannerArry.map((v, i)=> (
               <button className='bg-black text-white rounded-[10px] p-[1rem]' key={i} onClick={()=> {
                  setCount(i);
                }}> {v.button} </button>
            ))
          }
        </div>

      </section>

      </div>
    </>
  )
}

export default App