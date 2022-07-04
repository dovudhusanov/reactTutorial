import React from 'react';
import GetLesson from "./Get/GetLesson";
import PostLesson from "./Post/PostLesson";
import PutLesson from "./Put/PutLesson";
import DeleteLesson from "./Delete/DeleteLesson";

function MainHttpMethod(props) {
    return (
        <div>
            {/*<GetLesson />*/}
            {/*<PostLesson />*/}
            {/*<PutLesson />*/}
            <DeleteLesson />
        </div>
    );
}

export default MainHttpMethod;