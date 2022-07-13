// import React, { useState, useEffect } from "https://cdn.skypack.dev/react@17.0.1";
// import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
// import toast, { Toaster } from "https://cdn.skypack.dev/react-hot-toast@2.2.0";
// import axios from "axios";
// import './AlertSuccess.css'
//
// const AlertSuccess = ({children, props}) => {
//
//     // Default
//     // const DefaultNotify = () => toast('Here is your toast.');
//
//     // Success
//     const SuccessNotify = () => toast.success('Successfully toasted!')
//
//     // Error
//     // const ErrorNotify = () => toast.error("This didn't work.")
//
//     // Promise
//     // const fetchData = async () => {
//     //     const response = await axios.get(
//     //         "https://jsonplaceholder.typicode.com/users"
//     //     );
//     //     console.log({ response });
//     //     return response;
//     // };
//     //
//     // const PromiseNotify = () =>  toast.promise(
//     //     fetchData(),
//     //     {
//     //         loading: 'loading...',
//     //         success: 'Successfully get data',
//     //         error: "error occurs in data",
//     //     }
//     // );
//
//
//
//     // Emoji or icon
//     const IconNotify = () => toast('Good Job!', {
//         icon: '👏',
//     });
//
//     return (
//         <>
//             <button
//                 onClick={SuccessNotify}
//                 className="btn btn-sm btn-success"
//                 {...props}
//             >{children}</button>
//
//             {/*<Toaster  position="top-right" />*/}
//         </>
//     );
// }
//
// export default AlertSuccess