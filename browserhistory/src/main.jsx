import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// The initial list of history items
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },
  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },
  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class BrowserHistory extends Component {
  state = {
    searchInput: '',
    historyList: initialHistoryList,
  }

  handleSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteHistoryItem = id => {
    const {historyList} = this.state
    const updatedHistoryList = historyList.filter(item => item.id !== id)
    this.setState({historyList: updatedHistoryList})
  }

  render() {
    const {searchInput, historyList} = this.state
    const filteredHistoryList = historyList.filter(item =>
      item.title.toLowerCase().includes(searchInput.toLowerCase())
    )

    return (
      <div className="appContainer">
        <div className="navBar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="searchBox">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
            />
            <input
              type="search"
              placeholder="Search history"
              value={searchInput}
              onChange={this.handleSearchInput}
            />
          </div>
        </div>
        <div className="historyListContainer">
          {filteredHistoryList.length > 0 ? (
            filteredHistoryList.map(item => (
              <div key={item.id} className="historyItem">
                <img src={item.logoUrl} alt="domain logo" className="domainLogo" />
                <div className="itemDetails">
                  <p className="title">{item.title}</p>
                  <p className="domainUrl">{item.domainUrl}</p>
                </div>
                <div className="timeDeleteContainer">
                  <p className="timeAccessed">{item.timeAccessed}</p>
                  <button
                    type="button"
                    className="deleteButton"
                    onClick={() => this.deleteHistoryItem(item.id)}
                  >
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                      alt="delete"
                    />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="emptyView">There is no history to show</p>
          )}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<BrowserHistory />, document.getElementById('root'))
