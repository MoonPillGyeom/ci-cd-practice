// import "@/styles/globals.css";
// import type { AppProps } from "next/app";

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }

// import { SpeedInsights } from "@vercel/speed-insights/next";

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <head>
//         <title>Next.js</title>
//       </head>
//       <body>
//         {children}
//         <SpeedInsights />
//       </body>
//     </html>
//   );
// }

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SpeedInsights } from "@vercel/speed-insights/next";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <SpeedInsights />
    </>
  );
}

export default MyApp;
