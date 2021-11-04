import '../styles.css'

// I created _app.js in order to add global css. See here: https://nextjs.org/docs/basic-features/built-in-css-support

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}