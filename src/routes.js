import Main from './components/Main'
import FilteredPostList from './containers/FilteredPostList'
import Post from './components/Post'
import AddPost from './components/AddPost'
import AddPostSuccess from './components/AddPostSuccess'

export default [
    {
        component: Main,
        routes: [
            {
                path: '/',
                exact: true,
                component: FilteredPostList
            },
            {
                path: '/add-post',
                exact: true,
                component: AddPost
            },
            {
                path: '/add-post/success',
                exact: true,
                component: AddPostSuccess
            },
            {
                path: '/:category',
                exact: true,
                component: FilteredPostList,
            },
            {
                path: '/:category/:id',
                exact: true,
                component: Post
            }
        ]
    }
]