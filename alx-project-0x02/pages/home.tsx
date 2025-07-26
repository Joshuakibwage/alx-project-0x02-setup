import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';
import { useState } from 'react';
import Header from '@/components/layout/Header';


const Home: React.FC = () => {

    const [posts, setPosts] = useState<CardProps[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddPost = (newPost: Post) => {
        setPosts((prev) => [newPost, ...prev]);
    }


    return (
        <main>
            <Header />
            <div className="w-full h-screen grid place-content-center">
            
            <h1 className="text-4xl">Home</h1>
            <Card 
                title="Card 1"
                content="Hello world!"
            />

             <div className="p-8 max-w-3xl mx-auto">
                <h1 className="text-2xl font-bold mb-4">Home Page</h1>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="mb-4 px-4 py-2 bg-blue-600 text-white rounded cursor-pointer"
                >
                    Add New Post
                </button>

                <PostModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onSubmit={handleAddPost}
                />

                <div className="space-y-4">
                    {posts.map((post, index) => (
                    <div key={index} className="border p-4 rounded shadow">
                        <h2 className="text-lg font-semibold">{post.title}</h2>
                        <p className="text-black">{post.content}</p>
                    </div>
                    ))}
                </div>
            </div>

        </div>
        </main>
    )
}


export default Home;