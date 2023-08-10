import "./index.css"
import { useState } from "react";
import axios from "axios";

const SearchCard = ({username, userFullName, following}) => {
    const [Followed, setFollowed] = useState(following);

    const handleFollowAxios = async () => {
        const apiLink = Followed?`http://127.0.0.1:8000/api/unfollow/${username}`:`http://127.0.0.1:8000/api/follow/${username}`
        
        await axios.get(apiLink
        , {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        }
        )
    }
    const handelFollowClick = () => {
        setFollowed(Followed?false:true)
        handleFollowAxios()
        }
    return ( 
        <li className="search-card-container flex center jc-space-bt">
            <div className="flex gap-10 center">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 60 60" fill="none">
                    <g clipPath="url(#clip0_554_26)">
                        <path d="M30 0C22.0435 0 14.4129 3.16071 8.7868 8.7868C3.16071 14.4129 0 22.0435 0 30C0.00106153 31.0245 0.0566959 32.0481 0.166667 33.0667C0.946637 40.4352 4.42597 47.2545 9.93431 52.2105C15.4427 57.1666 22.5903 59.9088 30 59.9088C37.4097 59.9088 44.5573 57.1666 50.0657 52.2105C55.574 47.2545 59.0534 40.4352 59.8333 33.0667C59.9433 32.0481 59.9989 31.0245 60 30C60 22.0435 56.8393 14.4129 51.2132 8.7868C45.5871 3.16071 37.9565 0 30 0ZM48.0667 44.7333C48.0333 44.7333 47.8667 45 47.8333 45C45.6512 47.6087 42.9233 49.7069 39.842 51.1465C36.7607 52.5862 33.401 53.3324 30 53.3324C26.599 53.3324 23.2393 52.5862 20.158 51.1465C17.0767 49.7069 14.3488 47.6087 12.1667 45C12.1333 45 11.9667 44.7333 11.9333 44.7333C11.7503 44.4677 11.6463 44.1557 11.6333 43.8333C11.6395 43.4836 11.751 43.1439 11.9532 42.8585C12.1553 42.5731 12.4388 42.3552 12.7667 42.2333C15.2333 41.4 17.6 40.6 18.2667 40.4333C18.2512 40.3582 18.2521 40.2805 18.2693 40.2057C18.2866 40.131 18.3198 40.0608 18.3667 40C18.4541 39.6773 18.6384 39.3893 18.8947 39.1747C19.151 38.9601 19.467 38.8293 19.8 38.8L24.0333 38.4667C23.9977 37.5558 23.7824 36.6609 23.4 35.8333V35.8C23.0428 34.8584 22.5363 33.9805 21.9 33.2C20.1568 30.926 19.2293 28.1317 19.2667 25.2667C19.0823 22.3204 20.0617 19.4195 21.9941 17.1878C23.9265 14.9562 26.6576 13.5721 29.6 13.3333H30.4C33.3424 13.5721 36.0735 14.9562 38.0059 17.1878C39.9383 19.4195 40.9177 22.3204 40.7333 25.2667C40.7707 28.1317 39.8432 30.926 38.1 33.2C37.4637 33.9805 36.9572 34.8584 36.6 35.8V35.8333C36.2176 36.6609 36.0023 37.5558 35.9667 38.4667L40.2 38.8C40.533 38.8293 40.849 38.9601 41.1053 39.1747C41.3616 39.3893 41.5459 39.6773 41.6333 40C41.6802 40.0608 41.7134 40.131 41.7307 40.2057C41.7479 40.2805 41.7488 40.3582 41.7333 40.4333C42.4 40.6 44.7667 41.4 47.2333 42.2333C47.4777 42.3118 47.7002 42.4467 47.8827 42.6271C48.0652 42.8076 48.2027 43.0286 48.2838 43.2721C48.365 43.5156 48.3876 43.7748 48.3499 44.0286C48.3122 44.2825 48.2151 44.524 48.0667 44.7333Z" fill="#494C4E"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_554_26">
                            <rect width="60" height="60" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
                <div className="flex column">
                    <span>{username}</span>
                    <span>{userFullName}</span>
                </div>
            </div>
            
                <button className="btn btn-search" onClick={handelFollowClick}>{Followed?'unFollow':'Follow'}</button>
            
        </li>
    );
}

export default SearchCard;