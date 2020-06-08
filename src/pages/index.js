import React from "react";
import Layout from "../components/layout";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <Layout>
      <Helmet>
        <title>Zenito Pires</title>
      </Helmet>
        <h5>About Me</h5>
        <p style={{ marginTop: `-0.6rem`}}>
          I enjoy long walks on the beach.
        </p>
    </Layout>
  )
}