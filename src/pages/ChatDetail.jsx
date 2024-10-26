import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ImgTemp from "../assets/temp.jpeg"
import IconMenu from "../assets/menu.png"
import SideBar from '../components/SideBar';
import IconStar from '../assets/star.png'
import Gemini from "../gemini"
import { useDispatch, useSelector } from 'react-redux';
import { addMessage} from '../store/chaSlice';

const ChatDetail = () => {

    const [menuToggle, setMenuToggle] = useState(true);
    const [dataDetail, setDataDetail] = useState([]);
   // const [messageDetail, setMessageDetail] = useState([]);
    const [inputChat, setInputChat] = useState("");
    const { id } = useParams();
    const { data } = useSelector((state) => state.chat)
    const dispatch = useDispatch();

    useEffect(() => {
        if (data.length > 0) {
            const chat = data.find(chat => chat.id === id);
            if (chat) {
                setDataDetail(chat.messages)
            }
        }
    }, [data, id]); 
    const handleChatDetail = async () => {
        if (id) {
            const chatText = await Gemini(inputChat, dataDetail);

            if (chatText) {
                const dataMessage = {
                    idchat: id,
                    userMess: inputChat,
                    botMess: chatText
                }
                dispatch(addMessage(dataMessage));
                setInputChat("");
            }
        }
    };
    return (
        <div className='text-white xl:w-[80%] w-full relative'>
            <div className='flex items-center space-x-2 p-4'>
                <button onClick={() => setMenuToggle(!menuToggle)}>
                    <img src={IconMenu} alt='menu icon' className='w-10 h-10 xl:hidden'></img>
                </button>
                <h1 className='text-xl uppercase font-bold'>tàiai</h1>
            </div>
            {
                menuToggle && (
                    <div className='absolute h-full top-0 left-0 xl:hidden'>
                        <SideBar onToggle={() => setMenuToggle(!menuToggle)} />
                    </div>
                )
            }
            <div className='max-w-[90%] w-full mx-auto mt-20 space-y-10'>
                {id ? (<div className='flex flex-col space-y-4 p-4 h-[400px] overflow-x-hidden overflow-y-auto'>
                    {Array.isArray(dataDetail) && dataDetail.map((item) => (
                        <div key={item.id} className='flex space-y-6 flex-col'>
                            <div className="flex space-x-6 items-baseline">
                                {item.isBot ? (
                                    <>
                                        <img src={IconStar} alt='icon star' className='w-8 h-8' />
                                        <p dangerouslySetInnerHTML={{ __html: item.text}}/>
                                    </>
                                ) : (
                                    <>
                                        <p>User</p>
                                        <p>{item.text}</p>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>) : (
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
                )}
                <div className='flex items-center space-x-4 w-full'>
                    <input onChange={(e) => setInputChat(e.target.value)} value={inputChat} className='p-4 rounded-lg bg-primaryBg-default w-[90%] border' type='text' placeholder='Nhập câu hỏi tại đây'></input>
                    <button onClick={handleChatDetail} className='p-4 rounded-lg bg-green-500 text-white'>Gửi</button>
                </div>
            </div>

        </div>
    );
};

export default ChatDetail;