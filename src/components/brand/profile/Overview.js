import React from 'react';
import {Row, Col, Layout, Typography} from 'antd';
import {EditOutlined} from '@ant-design/icons';

const {Title} = Typography;
const {Content} = Layout;

export const Overview = () => {
  return (
      <div style={{width: '75%', margin: '60px auto'}}>
    <Layout>
      <Content>
        <Title level={2}>
          OVERVIEW <EditOutlined style={{float: 'right'}} />
        </Title>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo possimus et dolorum enim
          autem ipsa minus amet, natus vel debitis? Laudantium architecto, fugiat inventore labore
          esse tempore, voluptatem excepturi minima praesentium officiis doloribus sed repellendus
          non! Quasi, error odit amet quibusdam perferendis eum rem explicabo. Voluptate, illo
          voluptates facere, ad, fugiat quis et molestias voluptas omnis veniam aperiam? Dicta, eos?
        </p>
      </Content>
    </Layout>

      </div>
  );
};
