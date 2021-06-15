// Write your code here.
import './index.css'

const Card = props => {
  const {cardData} = props
  const {title, description, imgUrl, className} = cardData
  return (
    <div className={className}>
      <div className="cardview">
        <h1>{title}</h1>
        <p>{description}</p>
        <img src={imgUrl} className="card-img" alt="avatar" />
      </div>
    </div>
  )
}

export default Card
