import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, MobileIcon, MobileMenu, MobileLink, ThemeToggleButton } from './NavbarStyledComponent'
import { FaBars } from 'react-icons/fa';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import BedtimeIcon from '@mui/icons-material/Bedtime';
const Navbar = () => {
const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
          <Span>My Luu</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
        </NavItems>

          {/* <ThemeToggleButton >
            <BedtimeIcon sx={{ color: '#fff', fontSize: 20 }}/>
            <Brightness5Icon sx={{ color: '#fff', fontSize: 20 }}/>
          </ThemeToggleButton> */}

        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Education</MobileLink>
          </MobileMenu>
        }
        
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar