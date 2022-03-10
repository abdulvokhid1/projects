import React, { useState } from "react";
import { Application, Container, Express, Kamaz, Navbar, Small1, Small2, SmallContainer, Words } from "../Truckstyled";
import Instagram from '../images/Instagram.png'
import Facebook from '../images/Facebook.png';
import RedTruck from './images/RedTruck.png'

  const Truck = ()=>{
    const [name,setName] = useState('');
    return(
        <Container>
            <Navbar>
                <div>ONTIME</div>
                <Application>
                    <Words>Driver Application</Words>
                    <Words>Call</Words>
                    <Words>Get Quote</Words>
                    <Words>About us</Words>
                </Application>
                <div>
                <img src={Instagram} alt="" />
                <img src={Facebook} alt="" />
                </div>
            </Navbar>
            <SmallContainer>
                <Small1></Small1>
                <Small2>
                    <Kamaz src={RedTruck} alt=""></Kamaz>
                </Small2>
            </SmallContainer>
        </Container>
    )


};
export default Truck

