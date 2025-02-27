import React from "react";

// css
import '../css/Home.css';

const Home: React.FC = () => {
    return(
        <div>
            Home Page
            <br/>
            这里将会展示一些内容，
            <li>我们要干什么</li>
            <li>我们的理念</li>
            <li>已预约的人数/报名预约入口</li>
        </div>
    );
}

export default Home;