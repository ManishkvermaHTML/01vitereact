import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <>
        <h2>custom app ! </h2>    
        </>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: "http://google.com",
//         target: "_blank"
//     },
//     children: "click me to go website google"
// }

const anotherElement = (
    <a href='http://googl.com' target='_blank'>visit google</a>
)
const ReactElement = React.createElement(
    'a',
    {href: "https://google.com", target: '_blank'},
    'click me to visit google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
   
     <App /> 
)
