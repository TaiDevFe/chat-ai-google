import React from 'react'
import IconPlus from "../assets/plusIcon.png"
import IconChat from "../assets/chat.png"
import IconTrash from "../assets/remove.png"

const SideBar = () => {
  return (
    <div className='bg-primaryBg-sideBar w-[280px] h-screen text-white p-8 '>
      <div className='mt-20'>
            <button className='px-4 py-2 flex items-center space-x-4 bg-gray-600 mb-10'>
                <img src={IconPlus} alt='plus icon' className='w-4 h-4'></img>
                <p>Cuộc trò chuyện mới</p>
            </button>
            <div className='space-y-4'>
              <p>Gần đây :</p>
              <div className='flex flex-col space-y-6'>
                <div className='flex items-center justify-between p-3 bg-gray-800'>
                  <div className='flex items-center space-x-4'>
                    <img src={IconChat} alt='chat icon' className='w-8 h-8'></img>
                    <p>Chat</p>
                  </div>
                  <div>
                    <img src={IconTrash} alt='icon trash' className='w-6 h-6'></img>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default SideBar;