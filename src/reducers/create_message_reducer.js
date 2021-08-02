export default function(state = null, action) {
  switch (action.type) {
    case 'CREATE_MESSAGE':
      return action.payload
    default:
      return state;
  }
}
