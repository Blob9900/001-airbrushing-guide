import React from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/Layout';

export default function Part_C() {
  return (
    <div>
      <Layout>
      <section>
        <h1>Painting</h1>
        <Link to="/part_c/part_c_a"><h2>Mixing paints.</h2></Link>
        <Link to="/part_c/part_c_b"><h2>Painting a part.</h2></Link>
        <Link to="/part_c/part_c_c"><h2>Using pearl or metallic paints.</h2></Link>
        <Link to="/part_c/part_c_d"><h2>Fixing mistakes.</h2></Link>
        <Link to="/part_c/part_c_e"><h2>Bonus: Masking.</h2></Link>
      </section>
      </Layout>
    </div>
  );
}
