import { LOAD_IMAGES_SUCCESS } from './actions';

export default function reducer(state = {images: []}, action) {
  switch (action.type) {
    case LOAD_IMAGES_SUCCESS:
      return {...state, images: action.images}
    default:
      return state;
  }
}