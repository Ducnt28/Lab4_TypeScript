import React from 'react'
import { NavLink } from 'react-router-dom'



const Header:React.FC = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><NavLink to={`/`}>Trang chủ</NavLink></li>
            <li><NavLink to={`/shop`}>Sản phẩm</NavLink></li>
            <li><NavLink to={`/login`}>Đăng nhập</NavLink></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
