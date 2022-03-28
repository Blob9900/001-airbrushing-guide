import React from 'react';
import { Link } from 'gatsby';
import '../styles/global.scss';

const Navbar = () => {
  return (
    <nav className="navbar has-shadow">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">Gunpla Airbrushing Guide</Link>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">

          <div className="dropdown is-hoverable">
            <p className="dropdown-trigger navbar-item">Introduction</p>
            <div className="dropdown-menu">
              <div className="dropdown-content">
                <Link className="dropdown-item" to="/part_a/part_a_a"><h2>What's an airbrush?</h2></Link>
                <Link className="dropdown-item" to="/part_a/part_a_b"><h2>What do I need to start airbrushing?</h2></Link>
                <Link className="dropdown-item" to="/part_a/part_a_c"><h2>Preparing to airbrush.</h2></Link>
                <Link className="dropdown-item" to="/part_a/part_a_d"><h2>Using an airbrush.</h2></Link>
                <Link className="dropdown-item" to="/part_a/part_a_e"><h2>Maintaining an airbrush.</h2></Link>
              </div>
            </div>
          </div>

          <div className="dropdown is-hoverable">
            <p className="dropdown-trigger navbar-item">Shading</p>
            <div className="dropdown-menu">
              <div className="dropdown-content">
                <Link className="dropdown-item" to="/part_b/part_b_a"><h2>Why start with shading?</h2></Link>
                <Link className="dropdown-item" to="/part_b/part_b_b"><h2>Preparing your kit.</h2></Link>
                <Link className="dropdown-item" to="/part_b/part_b_c"><h2>Spraying post-shading.</h2></Link>
                <Link className="dropdown-item" to="/part_b/part_b_d"><h2>Inspecting the results.</h2></Link>
                <Link className="dropdown-item" to="/part_b/part_b_e"><h2>Bonus: Topcoating.</h2></Link>
              </div>
            </div>
          </div>

          <div className="dropdown is-hoverable">
            <p className="dropdown-trigger navbar-item">Painting</p>
            <div className="dropdown-menu">
              <div className="dropdown-content">
                <Link className="dropdown-item" to="/part_c/part_c_a"><h2>Mixing paints.</h2></Link>
                <Link className="dropdown-item" to="/part_c/part_c_b"><h2>Painting a part.</h2></Link>
                <Link className="dropdown-item" to="/part_c/part_c_c"><h2>Using pearl or metallic paints.</h2></Link>
                <Link className="dropdown-item" to="/part_c/part_c_d"><h2>Fixing mistakes.</h2></Link>
                <Link className="dropdown-item" to="/part_c/part_c_e"><h2>Bonus: Masking.</h2></Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </nav>
    );
};

export default Navbar;