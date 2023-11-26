import React from 'react';
import styled from 'styled-components';
import SlideGalary from '../Slide/SlideGalary';
import Photo from './img/peter-hansen-MeGmdPNe36w-unsplash 2.jpg';
import Photo1 from './img/katarzyna-ostrowska-OBH6aYRPOuQ-unsplash 3.jpg';
import Photo2 from './img/hassan-nizam-Y3Hbh7wB8CI-unsplash 2.jpg';
import Photo3 from './img/redcharlie-redcharlie1--nh7sIKGgAM-unsplash 1.jpg';
import Photo4 from './img/douglas-bagg-EmHeYdjEMKw-unsplash 2.jpg';
import Photo5 from './img/linval-ebanks-3rF6lSO-Vwc-unsplash 3.jpg';
import Photo6 from './img/shaah-shahidh-eG6C4nIvP0Y-unsplash 1.jpg';

const Galary = () => {
    return (
        <div>
            <GalaryContainer>
                <LeftColumn>
                    <img style={{ width: "100%" }} src={Photo} alt="#" />
                </LeftColumn>
                <RightColumn>
                    <Description>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </Description>
                    <ImagesRow>
                        <img src={Photo1} alt="#" />
                        <img src={Photo2} alt="#" />
                        <img src={Photo3} alt="#" />
                    </ImagesRow>
                    <ImagesRow>
                        <img src={Photo4} alt="#" />
                        <img src={Photo5} alt="#" />
                        <img src={Photo6} alt="#" />
                    </ImagesRow>
                </RightColumn>
            </GalaryContainer>
            <SlideGalary/>
        </div>
    );
};

const GalaryContainer = styled.div`
    display: flex;
    width: 100%;
    padding: 60px;
    gap: 35px;
    align-items: flex-end;
    background-color:#CEBD8833;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

const LeftColumn = styled.div`
    width: 50%;

    @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 20px;
    }
`;

const RightColumn = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 15px;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const Description = styled.p`
    margin: 0;
`;

const ImagesRow = styled.div`
    display: flex;
    gap: 10px;

    @media (max-width: 1130px) {
        flex-direction: column;
    }
`;

export default Galary;
