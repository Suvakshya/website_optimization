



// this is code splitting when a certian component is loaded when it comes into view 


import { Suspense, lazy } from "react";
import { useInView } from "react-intersection-observer";
import Message from "./message";
import { useEffect } from "react";

const Emoji = lazy(() => import("./Emoji"));

const App = () => {
  const { ref, inView } = useInView();

  useEffect(()=>{
    console.log("inview",inView)
  })

  return (
    <>
      <Message />
      <h1>open the console and network and scroll down to see how inview works</h1>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div ref={ref}>
        <Suspense fallback="...Loading">
          {/* <Emoji /> */}
          {/* with just Emoji it gets shown in the network tab regardless of it is in the view or not  */}
          {inView && <Emoji/>}
          {/* with this both conditon has to be ture for <Emoji/> to get rendered thus when <Emoji/> comes into the view then only the <Emoji/> is shown in the network tab */}
        </Suspense>
      </div>
    </>
  );
};

export default App;
