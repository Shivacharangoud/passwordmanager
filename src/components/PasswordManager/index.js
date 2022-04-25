import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import DetailsCard from '../DetailsCard'

import './index.css'

class PasswordManager extends Component {
  state = {
    searchQ: '',
    website: '',
    username: '',
    password: '',
    passwordsArray: [],
    showOrHide: false,
  }

  onWebsiteInput = event => {
    this.setState({website: event.target.value})
  }

  onUsernameInput = event => {
    this.setState({username: event.target.value})
  }

  onPasswordInput = event => {
    this.setState({password: event.target.value})
  }

  deleteDetails = id => {
    const {passwordsArray} = this.state
    const filteredArray = passwordsArray.filter(each => each.id !== id)
    this.setState({passwordsArray: filteredArray})
  }

  enterSearch = event => {
    this.setState({searchQ: event.target.value})
  }

  sumbitTriggered = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    const detailsObj = {
      id: uuidv4(),
      website,
      username,
      password,
    }
    if (website !== '' && username !== '' && password !== '') {
      this.setState(prevState => ({
        passwordsArray: [...prevState.passwordsArray, detailsObj],
      }))
      this.setState({website: '', username: '', password: ''})
    }
  }

  onTickTrigger = () => {
    this.setState(prevState => ({showOrHide: !prevState.showOrHide}))
  }

  render() {
    const {
      searchQ,
      passwordsArray,
      website,
      username,
      password,
      showOrHide,
    } = this.state
    const lowerSearch = searchQ.toLowerCase()
    const {length} = passwordsArray

    const searchedArray = passwordsArray.filter(each => {
      const lowerWebsite = each.website.toLowerCase()
      return lowerWebsite.includes(lowerSearch)
    })
    const showNopasswordOrNot = searchedArray.length === 0
    return (
      <div className="bg-container">
        <img
          className="logo"
          alt="app logo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
        />
        <div className="add-password-container">
          <img
            className="monitor-image"
            alt="password manager"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
          />
          <div className="enter-details-con">
            <h1 className="para">Add New Password</h1>
            <form className="form">
              <div className="simple-input-element">
                <div className="logo-input-con">
                  <img
                    className="logo-in-input-element"
                    alt="website"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  />
                </div>
                <input
                  value={website}
                  onChange={this.onWebsiteInput}
                  className="input-element"
                  placeholder="Enter Website"
                />
              </div>
              <div className="simple-input-element">
                <div className="logo-input-con">
                  <img
                    className="logo-in-input-element"
                    alt="username"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  />
                </div>
                <input
                  value={username}
                  onChange={this.onUsernameInput}
                  className="input-element"
                  placeholder="Enter Username"
                />
              </div>
              <div className="simple-input-element">
                <div className="logo-input-con">
                  <img
                    className="logo-in-input-element"
                    alt="password"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  />
                </div>
                <input
                  value={password}
                  onChange={this.onPasswordInput}
                  type="password"
                  className="input-element"
                  placeholder="Enter Password"
                />
              </div>
              <button onClick={this.sumbitTriggered} type="submit">
                Add
              </button>
            </form>
          </div>
        </div>
        {/* bottommmmmmmmmm container below 
      
      
       bottommmmmmmmmmmmmmmmmmmm */}
        <div className="show-password-container">
          <div className="heading-and-search-element-con">
            <div className="heading-count-con">
              <h1 className="heading-passwords">Your Passwords</h1>
              <p className="spanE">{length}</p>
            </div>

            <div className="simple-input-element2">
              <div className="logo-input-con2">
                <img
                  className="logo-in-input-element2"
                  alt="search"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                />
              </div>
              <input
                onChange={this.enterSearch}
                type="search"
                className="input-element2"
                placeholder="Search"
              />
            </div>
          </div>
          <hr />
          <div className="show-pass-con">
            <input onChange={this.onTickTrigger} type="checkbox" id="tick" />
            <label htmlFor="tick" className="show-pass-label">
              Show Passwords
            </label>
          </div>
          {showNopasswordOrNot && (
            <div className="no-pass-con">
              <img
                className="no-pass-image"
                alt="no passwords"
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
              />
              <p className="no-pass-para">No Passwords</p>
            </div>
          )}
          {!showNopasswordOrNot && (
            <ul className="unorder-list">
              {searchedArray.map(each => (
                <DetailsCard
                  deleteDetails={this.deleteDetails}
                  details={each}
                  key={each.id}
                  showOrHide={showOrHide}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordManager
