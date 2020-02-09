import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Layout from "../components/layout"

const IndexPage = (props) => {
  const theme = useTheme();
  console.log(theme);

  return (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </Layout>
  )
}


export default IndexPage