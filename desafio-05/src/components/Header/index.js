import React from 'react'
import { ReactComponent as Logo} from "../../assets/logo.svg"
import { ReactComponent as FacebookIcon} from "../../assets/facebook.svg"
import { ReactComponent as InstagramIcon} from "../../assets/instagram.svg"
import { ReactComponent as TwitterIcon} from "../../assets/twitter.svg"
import { ReactComponent as YoutubeIcon} from "../../assets/youtube.svg"
import { HeaderContainer, SocialUl } from './style'

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <SocialUl>
         <li><a href="#"><FacebookIcon /></a></li>
         <li><a href="#"><InstagramIcon /></a></li>
         <li><a href="#"><TwitterIcon /></a></li>
         <li><a href="#"><YoutubeIcon /></a></li>
      </SocialUl>
    </HeaderContainer>
  )
}

export default Header