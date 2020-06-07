import {all, call, put} from 'redux-saga/effects';
import {push} from 'connected-react-router';
import request from '../../../lib/request';
import {FORM_ERROR} from 'final-form';

export const SKILLS_REQUEST = 'admin/dashboard/SKILLS_REQUEST';
export const SKILLS_SUCCESS = 'admin/dashboard/SKILLS_SUCCESS';
export const SKILLS_FAILURE = 'admin/dashboard/SKILLS_FAILURE';

export const BRAND_REQUEST = 'admin/dashboard/BRAND_REQUEST';
export const BRAND_SUCCESS = 'admin/dashboard/BRAND_SUCCESS';
export const BRAND_FAILURE = 'admin/dashboard/BRAND_FAILURE';

export const handleSkillsRequest = (payload) => ({
  type: SKILLS_REQUEST,
  payload,
});

export const handleSkillsFailure = (payload) => ({
  type: SKILLS_FAILURE,
  payload,
});

export const handleSkillsSuccess = () => ({
  type: SKILLS_SUCCESS
});

export const handleBrandRequest = (payload) => ({
  type: BRAND_REQUEST,
  payload
});

export const handleBrandSuccess = () => ({
  type: BRAND_SUCCESS,
});

export const handleBrandFailure = (payload) => ({
  type: BRAND_FAILURE,
  payload
});

export function* onHandleSkillsRequest({creativeId, skills=[]}) {
  console.log('#onHandleSkillsRequest, creativeId: ', creativeId);
  console.log('#onHandleSkillsRequest, skills: ', skills);
  
  try {
    console.log('#onHandleSkillsRequest, try block: ');
    const response = yield call(request.post, '/admin/approve/creatives/:creativeId/skills', {creativeId, skills});
    console.log('response: ', response);
  } catch (err) {
    console.error('#onHandleSkillsRequest, err: ', err);
  }
}

export function* onHandleBrandRequest({brandId, approvalStatus}) {
  console.log('#onHandleBrandRequest, creativeId: ', brandId);
  console.log('#onHandleBrandRequest, approvalStatus: ', approvalStatus);
  
  try {
    console.log('#onHandleBrandRequest, try block: ');
    
    const response = yield call(request.post, '/admin/approve/brands/:brandId');
    console.log('response: ', response);
  } catch (err) {
    console.error('#onHandleBrandRequest, err: ', err);
  }
}

export function* onHandleAdminRequest(action) {
  console.log('#onHandleAdminRequest');
  
  const {type, data} = action;
  
  console.log('#onHandleAdminRequest, action: ', action);
  console.log('#onHandleAdminRequest, type: ', type);
  console.log('#onHandleAdminRequest, data; ', data);
  
  console.log('#onHandleAdminRequest, about to check what type of action got dispatched');
  if (type && type === SKILLS_REQUEST) {
    console.log('#onHandleAdminRequest, SKILLS_REQUEST');
    yield call(onHandleBrandRequest, data);
  } else if (type && type === BRAND_REQUEST) {
    console.log('#onHandleAdminRequest, BRAND_REQUEST');
    yield call(onHandleSkillsRequest, data);
  }
  
}

const INITIAL_STATE = {
  isLoading: false,
  error: null
};

export default function admin(state=INITIAL_STATE, action) {
  switch (action.type) {
    case BRAND_REQUEST:
    case SKILLS_REQUEST:
      return {...state, isLoading: true};
    case BRAND_SUCCESS:
    case SKILLS_SUCCESS:
      return {...state, isLoading: false};
    case BRAND_FAILURE:
    case SKILLS_FAILURE:
      return {...state, isLoading: false, error: action.payload};
    default:
      return state;
  }
};
