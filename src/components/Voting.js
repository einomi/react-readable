import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import * as actions from '../actions'
import './Voting.sass'

const UP_VOTE = 'upVote';
const DOWN_VOTE = 'downVote';

class Voting extends Component {
    static propTypes = {
        entryType: PropTypes.string.isRequired,
        entry: PropTypes.object.isRequired,
    };

    state = {
        howUserVoted: undefined
    };

    componentDidUpdate() {
        this._updateVotingState();
    }

    _updateVotingState() {
        const { user, entry, entryType } = this.props;
        const howUserVoted = user.voted[entryType][entry.id];
        if (this.state.howUserVoted !== howUserVoted) {
            this.setState({howUserVoted});
        }
    }

    handleButtonClick(howUserVoted) {
        const { entryType, entry, user } = this.props;
        this.props.changeVoteScore(entryType, entry.id, user, howUserVoted);
    }

    render() {
        const { voteScore } = this.props.entry;
        return (
            <div className={classNames(this.props.className, 'voting')}>
                <div className={classNames('voting__button', '_down', { '_active': this.state.howUserVoted === DOWN_VOTE })} onClick={() => this.handleButtonClick(DOWN_VOTE)}></div>
                <div className="voting__score">{voteScore}</div>
                <div className={classNames('voting__button', '_up', { '_active': this.state.howUserVoted === UP_VOTE })} onClick={() => this.handleButtonClick(UP_VOTE)}></div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

export default connect(
    mapStateToProps,
    { changeVoteScore: actions.changeVoteScore }
)(Voting)