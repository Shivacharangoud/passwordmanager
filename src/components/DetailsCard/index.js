import './index.css'

const DetailsCard = props => {
  const {details, showOrHide, deleteDetails} = props
  const {id, website, username, password} = details
  const deleteDetail = () => {
    deleteDetails(id)
  }
  const encrptPass = showOrHide ? (
    <p>{password}</p>
  ) : (
    <img
      alt="stars"
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      className="stars"
    />
  )
  return (
    <li className="list-item">
      <div className="name-logo-matter-con">
        <div className="name-logo-con">
          <h1 className="name-logo">Y</h1>
        </div>

        <div>
          <p>{website}</p>
          <p>{username}</p>
          {encrptPass}
        </div>
      </div>
      <button
        testid="delete"
        onClick={deleteDetail}
        type="button"
        className="button"
      >
        <img
          className="img"
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
        />
      </button>
    </li>
  )
}

export default DetailsCard
