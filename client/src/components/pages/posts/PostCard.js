import React from 'react'
import PropTypes from 'prop-types'

const style = {
  container: {
    border: '1px solid black'
  }
}

const PostCard = ({title, img, notes, zip}) => {

  return (
    <div style={style.container}>
      {title}
      <img src={img} />
      {notes}
// <<<<<<< test-for-passport
//       {/* {current_observation.icon} */}
// =======
//       {zip}
// >>>>>>> master
    </div>
  )
}
PostCard.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  notes: PropTypes.string.isRequired
}
export default PostCard
