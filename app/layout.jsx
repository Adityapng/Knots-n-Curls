import Nav from "@components/Nav";
import "@styles/globals.css";
import "@components/Provider";
import Provider from "@components/Provider";
import Glow1 from "@components/Glow1";

export const metadata = {
  title: "Knots & Curls",
  description:
    "Book yourself an immersive and professional hair styling and make-up experience",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="text-[#D9D9D9] bg-black ">
        <Provider>
          <div className=" main">
            <div className="gradient" />
          </div>

          <main className="relative app">
            <Nav />
            <Glow1 />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
