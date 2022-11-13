import React from 'react'
import { AlignedContent, ImageBackground } from 'components/common';
import './HomePage.scss'

export const HomePage: React.FC = () => {

    return (  
        <div className="HomePage">
            <AlignedContent fullSize={true}>
                <div className="homepage-box">
                    <div className="profile">
                        <div className="image"></div>
                        <div className="text">
                            <h1 className="name">Lucy Stevens</h1>
                            <h3 className="role">Full stack Software Engineer</h3>
                            <p className="text">
                            An experienced full stack software engineer, specialising 
                            in designing and developing resilient systems using micro-services.
                            </p>
                        </div>

                    </div>
                </div>
            </AlignedContent>
        </div> 
    );

};