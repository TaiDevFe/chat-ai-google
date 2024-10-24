import React from 'react'
import ImgTemp from "../assets/temp.jpeg"


const ChatDetail = () => {
    return (
        <div className='text-white w-[80%]'>
            <h1 className='text-xl uppercase font-bold'>tàiai</h1>
            <div className='max-w-[90%] w-full mx-auto mt-32 flex-col space-y-20'>
                <div className='flex flex-col space-y-5'>
                    <div className='space-y-1'>
                        <h2 className='bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-[30px] inline-block text-transparent bg-clip-text'>Xin chào</h2>
                        <p className='text-3xl font-bold'>Hôm nay tôi có thể giúp gì cho bạn</p>
                    </div>
                    <div className='flex items-center space-x-3'>
                        <div className='w-[200px] h-[200px] bg-primaryBg-sideBar flex items-center justify-center rounded-lg'>
                            <p>Lên kế hoạch bữa ăn</p>
                        </div>
                        <div className='w-[200px] h-[200px] bg-primaryBg-sideBar flex items-center justify-center rounded-lg'>
                            <p>Cụm từ ngôn ngữ mới</p>
                        </div>
                        <div className='w-[200px] h-[200px] bg-primaryBg-sideBar flex items-center justify-center rounded-lg'>
                            <p>Cách viết CV Front End</p>
                        </div>
                        <div className='w-[200px] h-[200px] bg-primaryBg-sideBar flex flex-col items-center justify-center rounded-lg'>
                            <p>Tạo hình ảnh AI</p>
                            <img src={ImgTemp} alt='temp' className='w-[100px] h-[100px]'></img>
                        </div>
                    </div>
                </div>
                <div className='flex items-center space-x-4 w-full'>
                    <input className='p-4 rounded-lg bg-primaryBg-default' type='text' placeholder='Nhập câu hỏi tại đây'></input>
                    <button className='p-4 rounded-lg bg-green-500 text-white'>Gửi</button>
                </div>
            </div>
        </div>
    );
};

export default ChatDetail;