import React from 'react';
import {Form, List, Button} from 'antd';

export const EducationsList = ({educationsList = []}) => (
  <>
    {educationsList.length > 0 &&
      <List
        itemLayout="vertical"
        dataSource={educationsList}
        renderItem={item => (
          <List.Item key={item.schoolName}>
            <List.Item.Meta
              title={item.schoolName}
        
            />
            <h3>{item.degreeType}</h3>
            <h3>{item.major}</h3>
          </List.Item>
        )}
      />
    }
  </>
)
