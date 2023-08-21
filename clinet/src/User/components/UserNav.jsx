import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../Context/context'
import Cookies from 'js-cookie';
import { FaReact } from 'react-icons/fa'
import { BiCategoryAlt } from 'react-icons/bi'
import { MdProductionQuantityLimits } from "react-icons/md"
import { TbBrandShopee } from "react-icons/tb"
import CartPopup from './cartpopup';

export default function UserNav() {

    const { state, dispatch } = useContext(GlobalContext)
    console.log(GlobalContext);

    return (
        <Navbar expand="lg" className="bg-secondary">
            <Container>
                <Link className='navbar-brand' to='/'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Watchever_logo.svg/2560px-Watchever_logo.svg.png" width='100px' alt="Watchever" /></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Link to='/brands' className='nav-link'><TbBrandShopee /> Brands</Link>
                        <Link to='/products' className='nav-link'> <MdProductionQuantityLimits /> Products</Link>
                        <Link to='/category' className='nav-link'><BiCategoryAlt />Category</Link>
                    </Nav>

                    <div className="d-flex gap-3">
                        
                        <CartPopup />
                        <button className="btn btn-dark"
                            onClick={() => {
                                Cookies.remove('token')
                                dispatch({ type: "USER_LOGOUT" })
                            }}
                        >Sign Out</button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
