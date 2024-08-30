import Nav from "@components/Nav";
import "@styles/globals.css";
import "@components/Provider";
import Provider from "@components/Provider";

export const metadata = {
  title: "Knots & Curls",
  description:
    "Book yourself an immersive and professional hair styling and make-up experience",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="text-white bg-black ">
        <Provider>
          <div className=" main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
