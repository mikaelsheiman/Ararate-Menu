import './Header.sass'
// import Container from 'react-bootstrap/Container'
// import Nav from 'react-bootstrap/Nav'
// import Navbar from 'react-bootstrap/Navbar'
// import NavDropdown from 'react-bootstrap/NavDropdown'
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


function Header() {
    const [key, setKey] = useState('home');

    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k: any) => setKey(k)}
            className="mb-3"
        >
            <Tab eventKey="contact" title="ararate" disabled>
                Tab content for Contact
            </Tab>
            <Tab eventKey="home" title="menu">
                Tab content for Home
            </Tab>
            <Tab eventKey="profile" title="bar">
                Tab content for Profile
            </Tab>
        </Tabs>
    );
//     return (
//         <nav className='menu-header'>
//             <h1>ararate</h1>
//             <div>
//                 <button>menu</button>
//                 <button>bar</button>
//             </div>
//         </nav>
//       )
}

export default Header