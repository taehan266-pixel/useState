import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  const bannerArray = [
          {
            imgurl : "https://fourlab.co.kr/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/f8d0b47ad379bccc6e217ea6aea8716f.jpg",
            title : "블랙데이 단돈 만원으로",
            button : "시즌이벤트"
          },
          {
            imgurl : "https://fourlab.co.kr/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/61bf378950639b41f7f9871d4131a744.jpg",
            title : "회원혜택기간",
            button : "혜택보기"
          },
          {
            imgurl : "https://fourlab.co.kr/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/3f5e3477cd29d858d3b2cd6b6b46a1ca.jpg",
            title : "신상품 세트 출시",
            button : "신상품"
          }
        ]
return (
    <>
      <div className="card">
        <section style={{ 
          backgroundImage : `url(${bannerArray[count].imgurl})` 
        }} className='h-[100vh] flex justify-center items-center bg-cover relative'>

          <h2 className="text-[60px]">{bannerArray[count].title}</h2>

          <div className='absolute w-full bottom-0 start-0 flex gap-4 justify-center mb-[50px]'>
          {
            bannerArray.map((v, i)=> (
               <button className='bg-black text-white rounded-[10px] p-[1rem]' onClick={()=> {
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