import React, {Component} from 'react';

import './Post.css';

class Post extends Component {
    render() {
        return (
            <div className="post">
                <div className="container">
                    <header className="post__header">
                        <h1 className="post__title title">{this.props.title}</h1>
                        <div className="post__specs">
                            <time className="post__spec post__timestamp timestamp">16 Aug, 2017, 9:50</time>
                            <div className="post__spec post__comment-count comment-count">No Comments</div>
                            <div className="post__spec post__vote-count vote-count">23</div>
                        </div>
                    </header>
                    <div className="post__content">
                        <p className="post__text text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequuntur culpa cum cumque cupiditate dignissimos eligendi est hic inventore nesciunt quas quasi qui quis quod recusandae, repellendus saepe tenetur vero voluptatem voluptates! Asperiores autem eos et excepturi laboriosam maiores modi, molestiae nobis non obcaecati odio odit, officia praesentium quia quis quod reiciendis repellendus, repudiandae vero voluptatum. Ipsa minima molestias sunt! Ad assumenda autem, beatae consequuntur culpa deleniti eius error facilis, fugit harum maiores maxime minus molestias mollitia nam nemo quae, reiciendis reprehenderit voluptas voluptates. Ad alias architecto, aspernatur dolores, ducimus eum exercitationem expedita explicabo facere fuga illo itaque laboriosam omnis perspiciatis praesentium quasi qui reprehenderit similique sit tempore. Adipisci beatae culpa fuga fugiat illo, incidunt mollitia, necessitatibus nemo non nostrum optio perferendis, repellendus.</p>
                        <p className="post__text text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consequuntur corporis error, ipsa non pariatur! Accusamus amet, deleniti dignissimos distinctio dolor odit quaerat repudiandae veritatis! Dicta ducimus neque nisi quas!</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Post
