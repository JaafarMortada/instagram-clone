import TextInput from '../input fields/Index';
import './index.css'
import { useState } from "react";
import axios from "axios";
const SideBar = () => {

    const [data, setData] = useState({
        username: "",
    })

    const [searchedUsers, setSearchedUsers] = useState([])

    const handleDataChange = (e)=>{
        setData({...data, [e.target.name]: e.target.value})
    }

    const handleSearch = async ()=>{
                const response = await axios.get(`http://127.0.0.1:8000/api/search/${data.username}`,
                {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                }
                )
                const users = response.data.users
                if (users){
                    searchedUsers(users)
                    }
            }
        
    return (
            <nav>
                <div className="sidebar-top">
                    <div className="logo__wrapper">
                        <svg aria-label="Instagram" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="29" role="img" viewBox="32 4 113 32" width="103"><path clipRule="evenodd" d="M37.82 4.11c-2.32.97-4.86 3.7-5.66 7.13-1.02 4.34 3.21 6.17 3.56 5.57.4-.7-.76-.94-1-3.2-.3-2.9 1.05-6.16 2.75-7.58.32-.27.3.1.3.78l-.06 14.46c0 3.1-.13 4.07-.36 5.04-.23.98-.6 1.64-.33 1.9.32.28 1.68-.4 2.46-1.5a8.13 8.13 0 0 0 1.33-4.58c.07-2.06.06-5.33.07-7.19 0-1.7.03-6.71-.03-9.72-.02-.74-2.07-1.51-3.03-1.1Zm82.13 14.48a9.42 9.42 0 0 1-.88 3.75c-.85 1.72-2.63 2.25-3.39-.22-.4-1.34-.43-3.59-.13-5.47.3-1.9 1.14-3.35 2.53-3.22 1.38.13 2.02 1.9 1.87 5.16ZM96.8 28.57c-.02 2.67-.44 5.01-1.34 5.7-1.29.96-3 .23-2.65-1.72.31-1.72 1.8-3.48 4-5.64l-.01 1.66Zm-.35-10a10.56 10.56 0 0 1-.88 3.77c-.85 1.72-2.64 2.25-3.39-.22-.5-1.69-.38-3.87-.13-5.25.33-1.78 1.12-3.44 2.53-3.44 1.38 0 2.06 1.5 1.87 5.14Zm-13.41-.02a9.54 9.54 0 0 1-.87 3.8c-.88 1.7-2.63 2.24-3.4-.23-.55-1.77-.36-4.2-.13-5.5.34-1.95 1.2-3.32 2.53-3.2 1.38.14 2.04 1.9 1.87 5.13Zm61.45 1.81c-.33 0-.49.35-.61.93-.44 2.02-.9 2.48-1.5 2.48-.66 0-1.26-1-1.42-3-.12-1.58-.1-4.48.06-7.37.03-.59-.14-1.17-1.73-1.75-.68-.25-1.68-.62-2.17.58a29.65 29.65 0 0 0-2.08 7.14c0 .06-.08.07-.1-.06-.07-.87-.26-2.46-.28-5.79 0-.65-.14-1.2-.86-1.65-.47-.3-1.88-.81-2.4-.2-.43.5-.94 1.87-1.47 3.48l-.74 2.2.01-4.88c0-.5-.34-.67-.45-.7a9.54 9.54 0 0 0-1.8-.37c-.48 0-.6.27-.6.67 0 .05-.08 4.65-.08 7.87v.46c-.27 1.48-1.14 3.49-2.09 3.49s-1.4-.84-1.4-4.68c0-2.24.07-3.21.1-4.83.02-.94.06-1.65.06-1.81-.01-.5-.87-.75-1.27-.85-.4-.09-.76-.13-1.03-.11-.4.02-.67.27-.67.62v.55a3.71 3.71 0 0 0-1.83-1.49c-1.44-.43-2.94-.05-4.07 1.53a9.31 9.31 0 0 0-1.66 4.73c-.16 1.5-.1 3.01.17 4.3-.33 1.44-.96 2.04-1.64 2.04-.99 0-1.7-1.62-1.62-4.4.06-1.84.42-3.13.82-4.99.17-.8.04-1.2-.31-1.6-.32-.37-1-.56-1.99-.33-.7.16-1.7.34-2.6.47 0 0 .05-.21.1-.6.23-2.03-1.98-1.87-2.69-1.22-.42.39-.7.84-.82 1.67-.17 1.3.9 1.91.9 1.91a22.22 22.22 0 0 1-3.4 7.23v-.7c-.01-3.36.03-6 .05-6.95.02-.94.06-1.63.06-1.8 0-.36-.22-.5-.66-.67-.4-.16-.86-.26-1.34-.3-.6-.05-.97.27-.96.65v.52a3.7 3.7 0 0 0-1.84-1.49c-1.44-.43-2.94-.05-4.07 1.53a10.1 10.1 0 0 0-1.66 4.72c-.15 1.57-.13 2.9.09 4.04-.23 1.13-.89 2.3-1.63 2.3-.95 0-1.5-.83-1.5-4.67 0-2.24.07-3.21.1-4.83.02-.94.06-1.65.06-1.81 0-.5-.87-.75-1.27-.85-.42-.1-.79-.13-1.06-.1-.37.02-.63.35-.63.6v.56a3.7 3.7 0 0 0-1.84-1.49c-1.44-.43-2.93-.04-4.07 1.53-.75 1.03-1.35 2.17-1.66 4.7a15.8 15.8 0 0 0-.12 2.04c-.3 1.81-1.61 3.9-2.68 3.9-.63 0-1.23-1.21-1.23-3.8 0-3.45.22-8.36.25-8.83l1.62-.03c.68 0 1.29.01 2.19-.04.45-.02.88-1.64.42-1.84-.21-.09-1.7-.17-2.3-.18-.5-.01-1.88-.11-1.88-.11s.13-3.26.16-3.6c.02-.3-.35-.44-.57-.53a7.77 7.77 0 0 0-1.53-.44c-.76-.15-1.1 0-1.17.64-.1.97-.15 3.82-.15 3.82-.56 0-2.47-.11-3.02-.11-.52 0-1.08 2.22-.36 2.25l3.2.09-.03 6.53v.47c-.53 2.73-2.37 4.2-2.37 4.2.4-1.8-.42-3.15-1.87-4.3-.54-.42-1.6-1.22-2.79-2.1 0 0 .69-.68 1.3-2.04.43-.96.45-2.06-.61-2.3-1.75-.41-3.2.87-3.63 2.25a2.61 2.61 0 0 0 .5 2.66l.15.19c-.4.76-.94 1.78-1.4 2.58-1.27 2.2-2.24 3.95-2.97 3.95-.58 0-.57-1.77-.57-3.43 0-1.43.1-3.58.19-5.8.03-.74-.34-1.16-.96-1.54a4.33 4.33 0 0 0-1.64-.69c-.7 0-2.7.1-4.6 5.57-.23.69-.7 1.94-.7 1.94l.04-6.57c0-.16-.08-.3-.27-.4a4.68 4.68 0 0 0-1.93-.54c-.36 0-.54.17-.54.5l-.07 10.3c0 .78.02 1.69.1 2.09.08.4.2.72.36.91.15.2.33.34.62.4.28.06 1.78.25 1.86-.32.1-.69.1-1.43.89-4.2 1.22-4.31 2.82-6.42 3.58-7.16.13-.14.28-.14.27.07l-.22 5.32c-.2 5.37.78 6.36 2.17 6.36 1.07 0 2.58-1.06 4.2-3.74l2.7-4.5 1.58 1.46c1.28 1.2 1.7 2.36 1.42 3.45-.21.83-1.02 1.7-2.44.86-.42-.25-.6-.44-1.01-.71-.23-.15-.57-.2-.78-.04-.53.4-.84.92-1.01 1.55-.17.61.45.94 1.09 1.22.55.25 1.74.47 2.5.5 2.94.1 5.3-1.42 6.94-5.34.3 3.38 1.55 5.3 3.72 5.3 1.45 0 2.91-1.88 3.55-3.72.18.75.45 1.4.8 1.96 1.68 2.65 4.93 2.07 6.56-.18.5-.69.58-.94.58-.94a3.07 3.07 0 0 0 2.94 2.87c1.1 0 2.23-.52 3.03-2.31.09.2.2.38.3.56 1.68 2.65 4.93 2.07 6.56-.18l.2-.28.05 1.4-1.5 1.37c-2.52 2.3-4.44 4.05-4.58 6.09-.18 2.6 1.93 3.56 3.53 3.69a4.5 4.5 0 0 0 4.04-2.11c.78-1.15 1.3-3.63 1.26-6.08l-.06-3.56a28.55 28.55 0 0 0 5.42-9.44s.93.01 1.92-.05c.32-.02.41.04.35.27-.07.28-1.25 4.84-.17 7.88.74 2.08 2.4 2.75 3.4 2.75 1.15 0 2.26-.87 2.85-2.17l.23.42c1.68 2.65 4.92 2.07 6.56-.18.37-.5.58-.94.58-.94.36 2.2 2.07 2.88 3.05 2.88 1.02 0 2-.42 2.78-2.28.03.82.08 1.49.16 1.7.05.13.34.3.56.37.93.34 1.88.18 2.24.11.24-.05.43-.25.46-.75.07-1.33.03-3.56.43-5.21.67-2.79 1.3-3.87 1.6-4.4.17-.3.36-.35.37-.03.01.64.04 2.52.3 5.05.2 1.86.46 2.96.65 3.3.57 1 1.27 1.05 1.83 1.05.36 0 1.12-.1 1.05-.73-.03-.31.02-2.22.7-4.96.43-1.79 1.15-3.4 1.41-4 .1-.21.15-.04.15 0-.06 1.22-.18 5.25.32 7.46.68 2.98 2.65 3.32 3.34 3.32 1.47 0 2.67-1.12 3.07-4.05.1-.7-.05-1.25-.48-1.25Z" fill="currentColor" fillRule="evenodd"></path></svg>
                    </div>
                </div>
                <div className="sidebar-links">
                    <ul>
                        <li>
                            <a title="Create">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="mask0_575_7" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="25">
                                        <rect x="0.893555" y="0.331909" width="24" height="24" fill="#D9D9D9" />
                                    </mask>
                                    <g mask="url(#mask0_575_7)">
                                        <path d="M11.8936 13.3319H5.89355V11.3319H11.8936V5.33191H13.8936V11.3319H19.8936V13.3319H13.8936V19.3319H11.8936V13.3319Z" fill="#1C1B1F" />
                                    </g>
                                </svg>
                                <span className="link hide">Create</span>
                            </a>
                        </li>
                        <li>
                        <div className='flex center'>
                            <TextInput name="username" placeholder={"Search Users"} onChange={handleDataChange}/>
                            <svg onClick={handleSearch} fill="#000000" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 488.4 488.4" >
                                    <g>
                                        <g>
                                            <path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6
                                                s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2
                                                S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7
                                                S381.9,104.65,381.9,203.25z"/>
                                        </g>
                                    </g>
                                </svg>
                        </div>
                            
                        </li>
                    </ul>
                </div>
                <div className="sidebar-links sidebar-bottom">
                    <div className="sidebar__profile">
                        <div className="avatar__wrapper">
                            <svg className='avatar' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 60 60" fill="none">
                                <g clipPath="url(#clip0_554_26)">
                                    <path d="M30 0C22.0435 0 14.4129 3.16071 8.7868 8.7868C3.16071 14.4129 0 22.0435 0 30C0.00106153 31.0245 0.0566959 32.0481 0.166667 33.0667C0.946637 40.4352 4.42597 47.2545 9.93431 52.2105C15.4427 57.1666 22.5903 59.9088 30 59.9088C37.4097 59.9088 44.5573 57.1666 50.0657 52.2105C55.574 47.2545 59.0534 40.4352 59.8333 33.0667C59.9433 32.0481 59.9989 31.0245 60 30C60 22.0435 56.8393 14.4129 51.2132 8.7868C45.5871 3.16071 37.9565 0 30 0ZM48.0667 44.7333C48.0333 44.7333 47.8667 45 47.8333 45C45.6512 47.6087 42.9233 49.7069 39.842 51.1465C36.7607 52.5862 33.401 53.3324 30 53.3324C26.599 53.3324 23.2393 52.5862 20.158 51.1465C17.0767 49.7069 14.3488 47.6087 12.1667 45C12.1333 45 11.9667 44.7333 11.9333 44.7333C11.7503 44.4677 11.6463 44.1557 11.6333 43.8333C11.6395 43.4836 11.751 43.1439 11.9532 42.8585C12.1553 42.5731 12.4388 42.3552 12.7667 42.2333C15.2333 41.4 17.6 40.6 18.2667 40.4333C18.2512 40.3582 18.2521 40.2805 18.2693 40.2057C18.2866 40.131 18.3198 40.0608 18.3667 40C18.4541 39.6773 18.6384 39.3893 18.8947 39.1747C19.151 38.9601 19.467 38.8293 19.8 38.8L24.0333 38.4667C23.9977 37.5558 23.7824 36.6609 23.4 35.8333V35.8C23.0428 34.8584 22.5363 33.9805 21.9 33.2C20.1568 30.926 19.2293 28.1317 19.2667 25.2667C19.0823 22.3204 20.0617 19.4195 21.9941 17.1878C23.9265 14.9562 26.6576 13.5721 29.6 13.3333H30.4C33.3424 13.5721 36.0735 14.9562 38.0059 17.1878C39.9383 19.4195 40.9177 22.3204 40.7333 25.2667C40.7707 28.1317 39.8432 30.926 38.1 33.2C37.4637 33.9805 36.9572 34.8584 36.6 35.8V35.8333C36.2176 36.6609 36.0023 37.5558 35.9667 38.4667L40.2 38.8C40.533 38.8293 40.849 38.9601 41.1053 39.1747C41.3616 39.3893 41.5459 39.6773 41.6333 40C41.6802 40.0608 41.7134 40.131 41.7307 40.2057C41.7479 40.2805 41.7488 40.3582 41.7333 40.4333C42.4 40.6 44.7667 41.4 47.2333 42.2333C47.4777 42.3118 47.7002 42.4467 47.8827 42.6271C48.0652 42.8076 48.2027 43.0286 48.2838 43.2721C48.365 43.5156 48.3876 43.7748 48.3499 44.0286C48.3122 44.2825 48.2151 44.524 48.0667 44.7333Z" fill="#494C4E" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_554_26">
                                        <rect width="60" height="60" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <section className="avatar__name hide">
                            <div className="user-name">Jaafar Mortada</div>
                            <div className="email">Jaafar@mail.com</div>
                        </section>
                    </div>
                </div>
            </nav>
        
    );
}

export default SideBar;