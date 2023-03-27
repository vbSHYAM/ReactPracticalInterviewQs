import React, { lazy, Suspense } from "react";
const Contact = lazy(() => import("./ContactLazy"));

// const Home = ()=><h1>COOOOOOOOOOOOOOOOOOOOL</h1>
const HomeLazy = () => {
  return (
    <div>
      <Suspense fallback={<h1>R u ok baby......................</h1>}>
        <Contact />
      </Suspense>
    </div>
  );
};

export default HomeLazy;
