// export default Home;

import React from "react";
import Form from '../components/Form';

// css
import '../css/Home.css';

const Home: React.FC = () => {
    const iconLeft = `calc(50vw - 15vh)`;
    return (
        <div style={{ 
            height: '200vh',
            position: 'relative',
            backgroundColor: 'black',
            backgroundImage: 'url(images/2k_stars_milky_way.jpg)',
          }}
        >
            <div style={{
                position: 'absolute',
                top: '50vh',
                left: 0,
                width: '100%',
                height: '50vh',
                zIndex: 100,
                textAlign: 'center',
                color: 'white',
            }}>
                <h1>How Much AI</h1>
            </div>
            <img 
                src='images/AppIcon.png' 
                className="App-logo" 
                alt="logo" 
                style={{
                    position: 'absolute',
                    top: '5vh',
                    left: iconLeft,
                    width: '30vh',
                    height: '30vh',
                    zIndex: 50,
                    textAlign: 'center',
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    top: '70vh',
                    left: 0,
                    width: '100%',
                    height: '50vh',
                    zIndex: 100,
                    textAlign: 'center',
                    color: 'white',
                }}
            >
                <h3>HowMuchAI是什么</h3>
                <p>
                    我们要打造的HowMuchAI是一个基于人工智能的工具或平台, 
                </p>
                <p>
                    旨在帮助用户进行成本估算、市场分析、财务规划等工作。
                </p>
            </div>
            <div
                style={{
                    position: 'absolute',
                    top: '100vh',
                    left: 0,
                    width: '100%',
                    height: '50vh',
                    zIndex: 100,
                    textAlign: 'center',
                    color: 'white',
                }}
            >
                <h3>我们的核心功能</h3>
                <ul style={{
                    listStyleType: 'none',
                    padding: 0,
                    margin: 0,
                }}>
                    <li>成本估算: 帮助用户估算项目成本、资源需求等</li>
                    <li>市场分析: 提供市场趋势预测、竞争分析等功能</li>
                    <li>财务规划: 支持投资评估、财务预测等</li>
                    <li>数据可视化: 生成直观的图表和报告, 帮助用户快速理解数据</li>
                </ul>
            </div>
            <div
                style={{
                    position: 'absolute',
                    top: '130vh',
                    left: 0,
                    width: '100%',
                    height: '50vh',
                    zIndex: 100,
                    textAlign: 'center',
                    color: 'white',
                }}
            >
                <h3>HowMuchAI的适用场景</h3>
                <ul style={{
                    listStyleType: 'none',
                    padding: 0,
                    margin: 0,
                }}>
                    <li>企业的预算与成本管理</li>
                    <li>市场研究与战略规划</li>
                    <li>财务分析与投资决策</li>
                </ul>
            </div>
            <div style={{
                position: 'absolute',
                top: '160vh',
                left: 0,
                width: '100%',
                zIndex: 100,
                textAlign: 'center',
                color: 'white',
            }}>
                <h3>预约我们</h3>
                <Form />
            </div>
        </div>
    );
}

export default Home;