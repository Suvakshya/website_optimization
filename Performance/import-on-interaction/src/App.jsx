




// this is component based code splitting 




// import { useState } from "react"
import { useState , lazy , Suspense } from "react"

// import Emoji from "./Emoji"
const Emoji = lazy(()=>import("./Emoji"))

import Message from "./Message"

const App = () => {
  const [showEmoji,toggleEmoji] = useState(false);
  return (
    <>
    <Message/>
    <button onClick={()=> toggleEmoji((prev)=>!prev)}>Show Emoji</button>

     {/* {showEmoji && <Emoji/>}  */}
     {/*: If showEmoji is true, the && operator will allow the <Emoji /> component to render. both should be true for <Emoji/> component to get rendered . but even if the showEmoji is false and is not shown in the dom it is still shown in the network despite showEmoji being false .thus to fix this we use lazyload */}

     {showEmoji && <Suspense fallback="Loading..."><Emoji/></Suspense> }  
     {/*when using lazy it takes some millisecond time to load the component thus we use Suspense and fallback */}
     {/* Now we if showEmoji is false then it will not only be loaded in the dom but also in the network and will only get loaded in both the dom and network when true thus saving both heap and network bandwith*/}
     {/* Thus we achieved component based code splitting i.e rendering the particular component when required */}

    </>
  )
}

export default App