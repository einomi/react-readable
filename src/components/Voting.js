import React, {Component} from 'react'
import { connect } from 'react-redux'

import * as actions from '../actions'
import './Voting.sass'

const UP_VOTE = 'upVote';
const DOWN_VOTE = 'downVote';

class Voting extends Component {
    handleButtonClick(option) {
        this.props.changeVoteScore(this.props.id, option);
    }

    render() {
        const {voteScore} = this.props;
        return (
            <div className="post-specs__item voting">
                <div className="voting__button _up" onClick={() => this.handleButtonClick(DOWN_VOTE)}></div>
                <div className="voting__score">{voteScore}</div>
                <div className="voting__button _down" onClick={() => this.handleButtonClick(UP_VOTE)}></div>
            </div>
        );
    }
}

export default connect(
    null,
    { changeVoteScore: actions.changeVoteScore }
)(Voting)