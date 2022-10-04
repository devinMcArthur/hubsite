import Document, {Html, Head, Main, NextScript} from "next/document"

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head></Head>
        <body className="antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
