import { XMarkIcon } from "@heroicons/react/24/outline";
import { use, useEffect } from "react";

export default function Popup() {
  useEffect(()=> {
    const closebtn = document.querySelector(".popup button");
    closebtn?.addEventListener('click', ()=>{
      document.body.classList.remove("dim");
    })

  },[]);
  return (
    <div className="popup fixed top-0 start-0 w-full h-full
                    justify-center items-center
                    z-[1000]">
        <div className="flex justify-center items-center
                        relative
                        w=[350px] h-[300px] bg-white rounded-[20px]">
        하얀색에 라운드처리 글자는 가운데로
        
        <button className="absolute end-0 top-0 p-[5px]" aria-label="닫기">
            <XMarkIcon className="h-6 w-6" />
        </button>
      </div>

    </div>
  )
}
