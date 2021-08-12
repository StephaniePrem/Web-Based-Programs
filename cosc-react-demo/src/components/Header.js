// stateful component (class component)
// stateless component (function component)
import Menu from './Menu';

const Header = () => (
    <header>
        <div className="title">
            <h1>COSC 484: Web Apps and JavaScript</h1>
        </div>
        <div className="sub-title">
            <Menu tagline="Summer 2021: Assignment #xx"/>
            <div className="clearfix"></div>
        </div>
    </header>

);
export default Header;
export class MyClass {

}
