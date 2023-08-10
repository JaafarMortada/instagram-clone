import TextInput from "../input fields/Index";
import "./index.css";
import { useState } from "react";
import axios from "axios";
import SearchCard from "../searchedUsers";
import InstagramLogo from "../instagramLogo";
import CreateIcon from "./createIcon";
import SearchIcon from "./searchIcon";
import Avatar from "./avatar";
const SideBar = () => {
    const [data, setData] = useState({
        username: "",
    });

    const mountedStyle = { animation: "inAnimation 250ms ease-in" };
    const unmountedStyle = {
        animation: "outAnimation 500ms ease-out",
        animationFillMode: "forwards",
    };

    const [isMounted, setIsMounted] = useState(false); // https://dev.to/oussel/how-to-use-conditional-rendering-with-animation-in-react-1k20
    const [showDiv, setShowDiv] = useState(false);

    const [searchedUsers, setSearchedUsers] = useState([]);

    const handleDataChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const [textInput, setTextInput] = useState("");
    const [fileInput, setFileInput] = useState(null);
    const handleTextChange = (event) => {
        setTextInput(event.target.value);
    };

    const handleFileChange = (event) => {
        setFileInput(event.target.files[0]);
        console.log(fileInput);
    };

    const handlePostSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("description", textInput);
        formData.append("image_path", fileInput);

        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/api/add_post",
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            console.log("Response from server:", response.data);
        } catch (error) {
            console.error("Error sending data:", error);
        }
    };

    const handleSearch = async () => {
        const response = await axios.get(
            `http://127.0.0.1:8000/api/search/${data.username}`,
            {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            }
        );
        const users = response.data.users;
        if (users) {
            setSearchedUsers(users);
        }
    };

    return (
        <nav>
            <div className="sidebar-top">
                <InstagramLogo/>
            </div>
            <div className="sidebar-links">
                <ul>
                    <li>
                        <a
                            title="Create"
                            onClick={() => {
                                setIsMounted(!isMounted);
                                if (!showDiv) {
                                    setShowDiv(true);
                                    setTextInput("");
                                    setFileInput("");
                                }
                            }}
                        >
                            <CreateIcon/>
                            <span className="link hide">Create</span>
                        </a>
                        {
                            //Conditional Rendering
                            showDiv && (
                                <div
                                    className="transitionDiv"
                                    style={isMounted ? mountedStyle : unmountedStyle}
                                    onAnimationEnd={() => {
                                        if (!isMounted) setShowDiv(false);
                                    }}
                                >
                                    <TextInput
                                        name={"description"}
                                        type={"text"}
                                        label={"Write a caption"}
                                        placeholder={"write a caption"}
                                        value={textInput}
                                        onChange={handleTextChange}
                                    />
                                    <TextInput
                                        name="image_path"
                                        type={"file"}
                                        label={"Choose an image"}
                                        onChange={handleFileChange}
                                    />
                                    <button className="add-post-btn" onClick={handlePostSubmit}>Post</button>
                                </div>
                            )
                        }
                    </li>
                    <li>
                        <div className="flex center">
                            <TextInput
                                name="username"
                                placeholder={"Search Users"}
                                onChange={handleDataChange}
                            />
                            <SearchIcon search={handleSearch}/>
                        </div>
                    </li>
                    {searchedUsers?.length > 0 ? (
                        <div className="searched-user">
                            {searchedUsers.map((user) => (
                                <SearchCard
                                    key={user.id}
                                    username={user.username}
                                    userFullName={user.name}
                                    following={user.is_following}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="no-search">No users found</div>
                    )}
                </ul>
            </div>
            <div className="sidebar-links sidebar-bottom">
                <div className="sidebar__profile">
                    <div className="avatar__wrapper">
                        <Avatar/>
                    </div>
                    <section className="avatar__name hide">
                        <div className="user-name">Welcome</div>
                        <div className="email">This is not the real Instagram site</div>
                    </section>
                </div>
            </div>
            
        </nav>
    );
};

export default SideBar;
