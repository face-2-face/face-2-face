import React from 'react';
import { Link } from 'react-router-dom';

import Home from './Home.js';
import Header from './Header.jsx';
import ChatRoom from './ChatRoom.jsx';

class MatchList extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      showChat: false
    }
    this.enterChat = this.enterChat.bind(this);
  }

  enterChat(){
    console.log('enter chat click', this.props.profile);
    this.setState({showChat: true})

  }

  render() {
    return (
      <div>
        <Header />
        <div>
          {this.state.showChat ?
            <div>
              <h1>Chat</h1>

              <ChatRoom profile={this.props.profile} />
            </div>
            :
        <div>
        <h1>Matches</h1>
        <div onClick={this.enterChat}>
          <Match name={'sally'} />

        </div>
        <button onClick={this.enterChat}>Chat</button>


        </div>
      }
      </div>
    </div>
    )
  }
}

const Match = (props) => {
  return <div className="match"><h1>{props.name}</h1></div>
}

export default MatchList;