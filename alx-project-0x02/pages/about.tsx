import Button from '@/components/common/Button';
import Header from '@/components/layout/Header';


const About: React.FC = () => {
    return (
        <div>
            <Header />
            <div className="grid place-content-center h-screen w-full">
                <h1 className="text-4xl ">About</h1>

                <div className="flex gap-8">
                    <Button
                        size="small"
                        label="Small"
                        shape="rounded-sm"
                    />

                    <Button
                        size="medium"
                        label="Medium"
                        shape="rounded-md"
                    />

                    <Button
                        size="large"
                        label="Large"
                        shape="rounded-full"
                    />
                </div>
            </div>
        </div>
    )
}


export default About;