let activeServer = 'dev';
if (window.location.host.includes('spotify-musix')) {
  activeServer = 'live';
}

export const authEndPoint = 'https://accounts.spotify.com/authorize';

const redirectUrl = {
  dev: 'http://localhost:3000/',
  live: 'https://spotify-musix.netlify.app/',
};

const clientId = process.env.REACT_APP_CLIENT_ID;

const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state',
];
export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${
  redirectUrl[activeServer]
}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;

export const getUrlToken = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      let part = item.split('=');
      initial[part[0]] = decodeURIComponent(part[1]);
      return initial;
    }, {});
};
