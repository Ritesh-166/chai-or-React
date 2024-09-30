import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
  // react DOM create his own virtual dom and then compares with main DOM  and then do necessary changes in the main DOM
  //React gives us power to render JSX (javascript ke through HTML ko render krne ke liye) . we are creating a kind of own tag like APP here
// java script ke thruogh HTML likh paa rahe h oor this gives programming capbilities in HTML
// yaha App.jsx me ek function h jo HTML return kr raha h oor main.jsx me render ho raha h . Index.html ke thruogh
//here we can export only one element at a time.
// to solve this issue we can enclose whoole in one div or
// we can use fragment concept as shown next
{/* <>
<App/>
<p>uihjbjd</p>
</> */}

//NOTE :- always captilize the name of the functions or components that we are going to define

)
