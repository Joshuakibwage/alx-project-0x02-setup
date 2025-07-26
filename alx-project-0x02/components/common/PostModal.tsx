import { useState } from 'react';
import { CardProps, PostModalProps } from '@/interfaces';



const PostModal: React.FC<PostModalProps> = ({onClose, onSubmit}) => {

    const [post, setPost] = useState<CardProps>({
        title: "",
        content: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPost((prevPost) => ({ ...prevPost, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(post);
        onClose();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Title</label>
                <input 
                    name="title"
                    type="text"
                    placeholder="title"
                    value={post.title}
                    onChange={handleChange}
                    className=""
                />
            </div>

            <div>
                <label htmlFor="">Content</label>
                <input 
                    name="content"
                    type="text" 
                    placeholder="Enter content"
                    value={post.content}
                    onChange={handleChange}
                    className=""
                />
            </div>

             <div className="flex justify-between items-center">
                <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
                >
                Cancel
                </button>
                <button
                type="submit"
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                Add Post
                </button>
            </div>
        </form>
    )
}


export const PostModal;