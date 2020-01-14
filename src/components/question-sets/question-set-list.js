import React from 'react';
import {List} from "antd";
import { Link } from "react-router-dom";
const {Item} = List;

export const QuestionSetList = ({qs}) => {
  return (
    <List
    dataSource={qs}
    renderItem={_qs => (
      <Item>
        <Link to={`/question-sets/${_qs.id}`} >
          {_qs.title}
        </Link>
      </Item>
    )}
    />
  )
}
