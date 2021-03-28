import Firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCGuQKZmRFrhXeBYAFeUkkDth3fCwKNc8M',
  databaseURL: 'https://chatapp-6fddd-default-rtdb.firebaseio.com/',
  projectId: 'chatapp-6fddd',
  appId: '1:258093545071:android:0b27483175604e1d49bf9a',
};

export default Firebase.initializeApp(firebaseConfig);
