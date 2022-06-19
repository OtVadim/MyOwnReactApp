import React from "react";

const PostForm = () => {
    
    const [post, setPost] = useState({title: '', body: ''})
    
    return (
        <div>
            <form>
                {/* управляемый компонент */}
                <MyInput 
                    value={post.title}
                    onChange={e => setPost({...post, title: e.target.value})}
                    type="text" 
                    placeholder="название поста"
                />
                {/* неуправляемый компонент */}
                <MyInput 
                    value={post.body}
                    onChange={e => setPost({...post, body: e.target.value})}
                    type="text"
                    placeholder="описание поста"
                />
                <MyButton onClick={addNewPost}>Создать пост</MyButton>
            </form>
        </div>
    );
};

export default PostForm;