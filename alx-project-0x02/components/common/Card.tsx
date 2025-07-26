import { type CardProps } from '@/interfaces/index'


const Card: React.FC = ({title, content}: CardProps) => {
    return (
        <div>
            <h1>{title}</h1>
            <div>
                {content}
            </div>
        </div>
    )
}


export default Card;