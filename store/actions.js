export const LOAD_IMAGES_SUCCESS = 'LOAD_IMAGES_SUCCESS';

export const loadImagesSuccess = images => ({
  type: LOAD_IMAGES_SUCCESS,
  images
})

const URL = 'https://api.unsplash.com/photos?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0'

export const getImages = () => {
  return function(dispatch) {
    return fetch(URL)
      .then(response => response.json())
      .then(images => dispatch(loadImagesSuccess(images)))
  }
}

