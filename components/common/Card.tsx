import { type CardProps } from '@/interfaces/index'

const Card = ({title,content}: CardProps) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    )
} 

export default Card;