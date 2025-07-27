import { useEffect, useState } from "react";
import Header from '@/components/layout/Header';
import { PostProps } from '@/interfaces';
import PostCard from '@/components/common/PostCard';


const Posts: React.FC = () => {

    const [posts, setPosts] = useState<PostProps[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async() => {
            try {
                const resp = await fetch('https://jsonplaceholder.typicode.com/posts/');
                const data = await resp.json();
                console.log(data)
                
                const formattedPosts: PostProps[] = data.map((post: any) => ({
                    userId: post.userId,
                    title: post.title,
                    content: post.body,
                }))

                setPosts(formattedPosts);
            } catch (error) {
                console.error("Failed to fetch posts", error);
            } finally {
                setLoading(false);
            }
        }

        fetchPosts();
    }, [])

    return (
        <div>
            <Header />
            <div  className="grid place-content-center w-full min-h-screen">
                <h1 className="text-center py-8">Posts</h1>
                {
                    loading ? (
                        <p className="text-center">Loading posts...</p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {
                                posts.map((post, index) => (
                                    <PostCard 
                                        key={index}
                                        title={post.title}
                                        content={post.content}
                                        userId={post.userId}
                                    />
                                ))
                            }
                        </div>
                    )
                }
            </div>
        </div>
    )
}



export default Posts;