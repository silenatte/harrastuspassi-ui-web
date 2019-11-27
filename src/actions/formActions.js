const SET_FORM = 'SET_FORM';
const SET_HOBBYEVENTS_FORM = 'SET_HOBBYEVENTS_FORM';
const REMOVE_HOBBYEVENT = 'REMOVE_HOBBYEVENT';
const SET_REMOVED_EVENTS = 'SET_REMOVED_EVENTS';

const setFormData = (name, value) => ({
  type: SET_FORM,
  payload: { name, value }
});

const setHobbyEventsFormData = data => ({
  type: SET_HOBBYEVENTS_FORM,
  payload: data
});

const removeHobbyEvent = data => ({
  type: REMOVE_HOBBYEVENT,
  payload: data
});

const setRemovedEvents = data => ({
  type: SET_REMOVED_EVENTS,
  payload: data
});

export {
  SET_FORM,
  SET_HOBBYEVENTS_FORM,
  REMOVE_HOBBYEVENT,
  SET_REMOVED_EVENTS,
  setFormData,
  setHobbyEventsFormData,
  removeHobbyEvent,
  setRemovedEvents
};
