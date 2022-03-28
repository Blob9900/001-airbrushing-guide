import React from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/Layout';

export default function Part_B() {
  return (
    <div>
      <Layout>
      <section>
        <h1>Shading</h1>
        <Link to="/part_b/part_b_a"><h2>Why start with shading?</h2></Link>
        <Link to="/part_b/part_b_b"><h2>Preparing your kit.</h2></Link>
        <Link to="/part_b/part_b_c"><h2>Spraying post-shading.</h2></Link>
        <Link to="/part_b/part_b_d"><h2>Inspecting the results.</h2></Link>
        <Link to="/part_b/part_b_e"><h2>Bonus: Topcoating.</h2></Link>
      </section>
      </Layout>
    </div>
  );
}
