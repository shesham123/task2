import React from "react";
import EmailForm from "./components/EmailForm";

function App() {
  return (
    <main className="flex min-h-screen flex-col items-center  bg-[url(/images/bg-pattern-desktop.svg)] bg-no-repeat bg-cover ">
      <div className="grid md:grid-cols-2 font-josef max-w-[90rem] md:px-6">
        <div className="p-8 md:col-start-1 md:row-start-1 ">
          <img src="/images/logo.svg" alt="logo" />
        </div>
        <div className="bg-[url(/images/hero-mobile.jpg)] w-full min-h-[20rem] sm:min-h-[25rem] bg-no-repeat bg-cover md:bg-[url(/images/hero-desktop.jpg)] md:col-start-2 md:row-start-1 mx-auto"></div>
        <div className="flex flex-col items-center md:items-start py-8 md:col-start-1 md:row-start-1 md:pt-44 md:px-[1rem] mb-8 text-center md:text-left">
          <h1 className="text-[2.5rem] md:text-[4rem] leading-[2.625rem] md:leading-[4.4375rem] tracking-[0.67656rem] md:tracking-[1.08256rem] font-semibold text-black mb-4">
            <span className="block font-light md:leading-[4rem] text-light-pink">
              WE'RE
            </span>
            COMING <br />
            SOON
          </h1>
          <p className="text-light-pink mb-14 mt-4 px-8 md:px-0">
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
          <EmailForm />
        </div>
      </div>
    </main>
  );
}

export default App;
