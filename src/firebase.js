import { initializeApp } from 'firebase/app'
import { getAnalytics, isSupported } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyCQLr4LCjEVQt0SxlfzhMWTx5HDdhnGzY0',
  authDomain: 'lucacesarano-com.firebaseapp.com',
  databaseURL: 'https://lucacesarano-com.firebaseio.com',
  projectId: 'lucacesarano-com',
  storageBucket: 'lucacesarano-com.appspot.com',
  messagingSenderId: '141578700855',
  appId: '1:141578700855:web:f322d315730d668df697b2',
  measurementId: 'G-L9N13B5HW0',
}

const analyticsHostnames = ['lucacesarano.com', 'www.lucacesarano.com']

export const firebaseApp = initializeApp(firebaseConfig)

export const initializeFirebaseAnalytics = () => {
  if (typeof window === 'undefined') {
    return Promise.resolve(null)
  }

  if (!analyticsHostnames.includes(window.location.hostname)) {
    return Promise.resolve(null)
  }

  return isSupported()
    .then((supported) => (supported ? getAnalytics(firebaseApp) : null))
    .catch(() => null)
}
