import React from "react";

const JoinUs: React.FC = () => {
    return(
        <div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundImage: 'url(images/JoinUs.png)',
                color: 'black',
            }}>
                <br/>
                <br/>
                <div
                    style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.6)',
                        width: '60%',
                        zIndex: 100,
                        textAlign: 'center',
                        borderRadius: '30px',
                    }}
                >
                    <h1>Join Us</h1>
                    <h2>我们正在寻找</h2>
                    <ul>
                        <li>对金融领域充满热情的你</li>
                        <li>有数据分析、机器学习经验的你</li>
                        <li>对AI技术有浓厚兴趣的你</li>
                        <li>有创业梦想，渴望实现自我价值的你</li>
                        <li>希望与志同道合的伙伴共同成长、共创辉煌的你</li>
                    </ul>
                    <br/>
                    <br/>
                    <br/>
                    <h2>项目简介</h2>
                    <p>
                        我们致力于利用先进的AI技术，打造金融领域的创新应用，为行业带来革命性的变革。通过深度学习、大数据分析等手段，我们旨在为客户提供更智能、更高效、更安全的金融解决方案。
                    </p>
                    <br/>
                    <br/>
                    <br/>
                    <h2>加入我们, 你将获得</h2>
                    <ul>
                        <li>与行业精英并肩作战的机会</li>
                        <li>与行业精英并肩作战的机会</li>
                        <li>参与创业项目, 体验从0到1的成就感</li>
                        <li>享受灵活的工作时间和地点</li>
                        <li>丰富的资源支持, 助力个人与团队共同成长</li>
                    </ul>
                    <br/>
                    <br/>
                    <br/>
                    <h2>报名方式</h2>
                    <p>请将简历发送至:
                        <a href="mailto:zouyt22@mails.tsinghua.edu.cn">
                            zouyt22@mails.tsinghua.edu.cn
                        </a>
                        <br/>
                        <text>邮件主题请注明: 'HowMuchAI招募令+姓名'</text>
                    </p>
                    <br/>
                    <br/>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>  
        </div>
    );
}

export default JoinUs;