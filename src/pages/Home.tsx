import React from "react";
import { ApolloProvider } from '@apollo/client';
import client from '../ApolloClient';
import Form from '../components/Form';

// css
import '../css/Home.css';

const Home: React.FC = () => {
    const iconLeft = `calc(50vw - 15vh)`;
    return (
        <ApolloProvider client={client}>
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
                <p
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
                    我们要做什么,我们的目标,我们的理念
                </p>
                <div style={{
                    position: 'absolute',
                    top: '120vh',
                    left: 0,
                    width: '100%',
                    zIndex: 100,
                    textAlign: 'center',
                    color: 'white',
                }}>
                    <Form />
                </div>
                <>这里写已经报名的人数（就是查询user表中的列数）</>
            </div>
        </ApolloProvider>
    );
}

export default Home;