import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import * as actions from '../actions'
import './Voting.sass'

const UP_VOTE = 'upVote';
const DOWN_VOTE = 'downVote';
const POST = 'post';
const COMMENT = 'comment';

class Voting extends Component {
    static propTypes = {
        entryType: PropTypes.string.isRequired,
        entry: PropTypes.object.isRequired,
        user: PropTypes.string.isRequired,
        posts: PropTypes.array,
        comments: PropTypes.array,
    };

    state = {
        howUserVoted: ''
    };

    componentDidUpdate() {
        this._updateVotingState();
    }

    _updateVotingState() {
        const { entryType, user, entry } = this.props;
        const entryId = entry.id;
        const entries = entryType == POST ? this.props.posts : this.props.comments;
        const currentEntry = entries.find(entry => entry.id === entryId);
        if (!currentEntry || !currentEntry.usersVoted) {
            return;
        }
        const howUserVoted = currentEntry.usersVoted[user];
        if (this.state.howUserVoted !== howUserVoted) {
            this.setState({howUserVoted});
        }
    }

    handleButtonClick(option) {
        const { entryType, entry, user } = this.props;
        this.props.changeVoteScore(entryType, entry.id, user, option);
    }

    render() {
        const { voteScore } = this.props.entry;
        return (
            <div className="post-specs__item voting">
                <div className={classNames('voting__button', '_down', { '_active': this.state.howUserVoted == DOWN_VOTE })} onClick={() => this.handleButtonClick(DOWN_VOTE)}></div>
                <div className="voting__score">{voteScore}</div>
                <div className={classNames('voting__button', '_up', { '_active': this.state.howUserVoted == UP_VOTE })} onClick={() => this.handleButtonClick(UP_VOTE)}></div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        posts: state.posts
    };
};

export default connect(
    mapStateToProps,
    { changeVoteScore: actions.changeVoteScore }
)(Voting)