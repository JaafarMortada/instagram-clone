import "./index.css"
import { useState } from "react";
import axios from "axios";

const PostCard = ({post_id, description, image_path, likes, poster, liked}) => {
    const [Liked, setLiked] = useState(liked);
    const [numberOfLikes, setNumberOfLikes] = useState(likes)
    // const [api_link, setApiLink] = useState('')

    const handleLikeAxios = async () => {
        const apiLink = Liked?`http://127.0.0.1:8000/api/unlike/${post_id}`:`http://127.0.0.1:8000/api/like/${post_id}`
        
        await axios.get(apiLink
        , {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        }
        )
    }
    const handleLikeClick = () => {
        setLiked(Liked?false:true)
        setNumberOfLikes(!Liked?numberOfLikes+1:numberOfLikes-1)
        handleLikeAxios()
        }

    return ( 
            <>
            <div className="post-card-container">
            <div className="post-card-container-header">
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
                <div className="poster-name">
                    {poster}
                </div>
            </div>
            <div className="post-image">
                <img src={`data:image/png;base64,${image_path}`}/>
            </div>
            <div className="likes">
                <svg onClick={handleLikeClick} xmlns="http://www.w3.org/2000/svg" width="20" height="20" cursor={'pointer'} viewBox="0 0 25 25" fill="none">
                    <mask id="mask0_554_16" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="25">
                        <rect width="25" height="25" fill="#D9D9D9"/>
                    </mask>
                    <g mask="url(#mask0_554_16)">
                        <path d="M12.4999 21.7105L10.9736 20.3589C9.2017 18.782 7.73679 17.4217 6.5789 16.278C5.421 15.1343 4.49995 14.1076 3.81574 13.1978C3.13153 12.288 2.65346 11.4519 2.38153 10.6895C2.1096 9.92699 1.97363 9.1472 1.97363 8.35008C1.97363 6.72118 2.52626 5.36087 3.63153 4.26916C4.73679 3.17745 6.11398 2.63159 7.76311 2.63159C8.67539 2.63159 9.54381 2.82221 10.3684 3.20344C11.1929 3.58467 11.9035 4.12186 12.4999 4.81501C13.0964 4.12186 13.807 3.58467 14.6315 3.20344C15.4561 2.82221 16.3245 2.63159 17.2368 2.63159C18.8859 2.63159 20.2631 3.17745 21.3684 4.26916C22.4736 5.36087 23.0263 6.72118 23.0263 8.35008C23.0263 9.1472 22.8903 9.92699 22.6184 10.6895C22.3464 11.4519 21.8684 12.288 21.1842 13.1978C20.4999 14.1076 19.5789 15.1343 18.421 16.278C17.2631 17.4217 15.7982 18.782 14.0263 20.3589L12.4999 21.7105ZM12.4999 18.9033C14.1842 17.413 15.5701 16.135 16.6578 15.0693C17.7456 14.0036 18.6052 13.0765 19.2368 12.288C19.8684 11.4996 20.307 10.7978 20.5526 10.1826C20.7982 9.56742 20.921 8.95658 20.921 8.35008C20.921 7.31035 20.5701 6.44392 19.8684 5.75077C19.1666 5.05762 18.2894 4.71104 17.2368 4.71104C16.4122 4.71104 15.6491 4.94065 14.9473 5.39986C14.2456 5.85907 13.7631 6.44392 13.4999 7.15439H11.4999C11.2368 6.44392 10.7543 5.85907 10.0526 5.39986C9.35083 4.94065 8.58767 4.71104 7.76311 4.71104C6.71047 4.71104 5.83328 5.05762 5.13153 5.75077C4.42977 6.44392 4.0789 7.31035 4.0789 8.35008C4.0789 8.95658 4.2017 9.56742 4.44732 10.1826C4.69293 10.7978 5.13153 11.4996 5.76311 12.288C6.39469 13.0765 7.25433 14.0036 8.34205 15.0693C9.42977 16.135 10.8157 17.413 12.4999 18.9033Z" fill={Liked?'#c52323':'#1C1B1F'}/>
                    </g>
                </svg>
                <div className="number-of-likes">
                    {numberOfLikes} Likes
                </div>
            </div>
            <div className="description">
                <span>{poster}</span>
                <span>{description}
                </span>
            </div>
            </div>
        </>
    );
}

export default PostCard;