import { NavbarItem } from './navbar-item.styles'
import { NavbarWrapper } from './navbar-wrapper.styles'

export const Navbar = () => (
  <NavbarWrapper>
    <NavbarItem>Dashboard</NavbarItem>
    <NavbarItem>Account</NavbarItem>
    <NavbarItem>Payments</NavbarItem>
    <NavbarItem>Settings</NavbarItem>
  </NavbarWrapper>
)
