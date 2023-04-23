import React, {useEffect, useMemo, useState} from 'react'
import './HomePage.scss'

export const HomePage: React.FC = () => {

    const animationSeconds = 3
    const [itemIndex, setItemIndex] = useState(0);


    const scrollItems = useMemo(() => [
        "a software engineer",
        "a web developer",
        "a systems architect",
        "a UX designer",
        "an API specialist"
    ], []);



    useEffect(() => {
        const incrementItem = () => {
            setItemIndex(prevIdx =>(prevIdx+1) % scrollItems.length)
        }
        const interval = setInterval(incrementItem, animationSeconds*1000);
        return () => {
            clearInterval(interval);
        };
    }, [scrollItems]);

    return (  
        <div className="HomePage">
            <div style={{display: "none"}} className="header">
                <h3 className="name">Lucy Stevens</h3>
                <div className="image"
                     style={{backgroundImage: "url('/images/lucy.png')"}}>
                </div>
            </div>

            <div className={"filler"}></div>

            <div className="intro">
                <div className="text">
                    <h1>Hi there! I'm Lucy,</h1>
                    <div className="scroll-container">
                        <div className="scroll-items" style={{animationDuration: `${animationSeconds}s`}}>
                            <h1>{ scrollItems[itemIndex] }</h1>
                        </div>

                    </div>
                    <h1>based in Edinburgh.</h1>
                    <h3>I help people turn ideas into digital products that work for them.</h3>
                </div>
                <div className={"image"} style={{backgroundImage: "url('/images/berlin.jpg')"}}></div>
            </div>

            <div className="navbar">
                <h2 className="navlink about">About me</h2>
                <h2 className="navlink services">Services</h2>
                <h2 className="navlink projects">Projects</h2>
                <h2 className="navlink chat">Let's Chat</h2>
            </div>

        </div> 
    );

};