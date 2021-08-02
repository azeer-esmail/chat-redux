export function setChannels(channels) {
  return {
    type: 'SET_CHANNELS',
    payload: channels
  }
}

export function setMessages(channel = 'general') {
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`).then(response => response.json());
  return {
    type: 'SET_MESSAGES',
    payload: promise
  }
}

export function selectChannel(channel) {
  return {
    type: 'SELECT_CHANNEL',
    payload: channel
  }
}

export function setUser() {
  return {
    type: 'SET_USER',
    payload: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`
  }
}


export function createMessage(channel, author, content) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content: content, author: author})
  }
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`,requestOptions)
  .then(response => response.json());
  // .then(data => setMessages(data.channel));

  return {
    type: 'CREATE_MESSAGE',
    payload: promise
  }
}
