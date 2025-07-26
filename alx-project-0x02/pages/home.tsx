import Card from '@/components/common/Card';


const Home: React.FC = () => {
    return (
        <div>
            <h1>Home</h1>
            <Card 
                title="Card 1"
                content="Hello world!"
            />
        </div>
    )
}


export default Home;