import React from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'gatsby';
import Layout from '../../components/Layout';

export default function Part_A() {
  return (
    <div>
      <Helmet>
        <title>Introduction</title>
      </Helmet>
      <Layout>
      <section className="section">
        <h1>Introduction</h1>
        <Link to="/part_a/part_a_a"><h2>What's an airbrush?</h2></Link>
        <Link to="/part_a/part_a_b"><h2>What do I need to start airbrushing?</h2></Link>
        <Link to="/part_a/part_a_c"><h2>Preparing to airbrush.</h2></Link>
        <Link to="/part_a/part_a_d"><h2>Using an airbrush.</h2></Link>
        <Link to="/part_a/part_a_e"><h2>Maintaining an airbrush.</h2></Link>
      </section>
      </Layout>
    </div>
  );
}
