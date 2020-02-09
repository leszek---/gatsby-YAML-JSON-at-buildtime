import React from 'react';
import { Container } from './styled';
import Layout from '../components/layout';

const Dummy = (props) => {
    return (
      <Layout>
        <Container>
        <h1>{props.pageContext.pageData.labels.mainText}</h1>
      </Container>
      </Layout>
    );
};
export default Dummy;
