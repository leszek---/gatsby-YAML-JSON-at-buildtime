import 'typeface-metropolis';
import React from 'react';
import { Container } from './styled';
import Layout from '../components/layout';

const Main = (props) => {
    return (
      <Layout>
        <Container>
        To jest main !
        <h1>{props.pageContext.pageData.labels.mainText}</h1>
      </Container>
      </Layout>
    );
};
export default Main;
