import * as types from '../constants/EventFilters';

export function addEvent(text) {
  return { type: types.ADD_EVENT, text };
}

export function deleteEvent(id) {
  return { type: types.DELETE_EVENT, id };
}

export function editEvent(id, text) {
  return { type: types.EDIT_EVENT, id, text };
}

export function completeEvent(id) {
  return { type: types.COMPLETE_EVENT, id };
}

export function clearEvent() {
  return { type: types.CLEAR_EVENT };
}