import React, {Component} from 'react'
import styled from 'styled-components'

export const ActivityContainer = styled.div`
  width: 70%;
  margin: 20px auto;
  max-width: 900px;
  min-width: 580px;
`;

export const ActivityText = styled.strong`
  white-space: normal;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const ActivitySection = ({activities}) => (
  <ActivityContainer>
  
  </ActivityContainer>
);
