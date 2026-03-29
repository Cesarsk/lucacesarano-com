import '@testing-library/jest-dom'

const storage = {}

const localStorageMock = {
  getItem: (key) => (key in storage ? storage[key] : null),
  setItem: (key, value) => {
    storage[key] = String(value)
  },
  removeItem: (key) => {
    delete storage[key]
  },
  clear: () => {
    Object.keys(storage).forEach((key) => delete storage[key])
  },
}

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
  writable: true,
})

Object.defineProperty(globalThis, 'localStorage', {
  value: localStorageMock,
  writable: true,
})

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
})

beforeEach(() => {
  window.localStorage.clear()
})
