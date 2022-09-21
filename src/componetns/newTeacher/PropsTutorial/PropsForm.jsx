// import React, {useState} from 'react';
// import Input from "./UI/Input/Input";
// import BtnPrimary from "./UI/Button/BtnPrimary";
//
// function PropsForm({createPost}) {
//
//     const [post, setPost] = useState({title: '', body: ''})
//     const addPost = (e) => {
//         e.preventDefault()
//         const newPost = {
//             ...post,
//             id: Date.now()
//         }
//         createPost(newPost)
//         setPost({title: "", body: ""})
//         // setTitle(e.target.value = '')
//         // console.log(title)
//         // console.log(inputRef.current.value)
//     }
//     return (
//         <form>
//             <h5 className='text-center'>Create your first post</h5>
//             <Input
//                 type="text"
//                 className="form-control"
//                 placeholder="Programming Language"
//                 value={post.title}
//                 onChange={e => setPost({...post, title: e.target.value})}
//             />
//             <Input
//                 type="text"
//                 className="form-control my-3"
//                 placeholder="Enter your favourite stack"
//                 value={post.body}
//                 onChange={e => setPost({...post, body: e.target.value})}
//                 // ref={inputRef}
//             />
//             <BtnPrimary onClick={addPost}>
//                 Add Post
//             </BtnPrimary>
//         </form>
//     );
// }
//
// export default PropsForm;