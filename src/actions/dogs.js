import axios from 'axios';

export default function fetchDogs() {

  return function (dispatch) {
    dispatch(fetch_dogs_pending())
    return axios.get('https://dog.ceo/dog-api/')
    .then(
      data => dispatch(fetch_dogs_success(data)),
      error => dispatch(fetch_dogs_error(error))
    );
  };

}


export function fetch_dogs_pending(id) {
  return { type: "FETCH_DOGS_PENDING" };
}

export function fetch_dogs_success(id, text) {
  return { type: "FETCH_DOGS_SUCCESS", id, text };
}

export function fetch_dogs_error(id) {
  return { type: "FETCH_DOGS_ERROR", id };
}