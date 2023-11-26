import React from 'react'
import Navbar from "../../components/Navbar/Navbar";
import { Background} from "./styled";
import Footer from "../../components/Footer/Footer";
import Inform from '../../components/Inform/Inform';
import ApplicationForm from '../../components/Forms/ApplicationForm';

const Career = () => {
  const career = "Karyera";
  return (
    <div>
      <Navbar text={career}/>
      <Background>
      <Inform/>
      <ApplicationForm/>
      </Background>
      <Footer />
    </div>
  )
}

export default Career;