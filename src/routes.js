import Main from './components/Main'
import FilteredPostList from './containers/FilteredPostList'
import Post from './components/Post'
import AddPost from './components/AddPost'
import AddPostSuccess from './components/AddPostSuccess'
import EditPost from './components/EditPost'
import EditPostSuccess from './components/EditPostSuccess'
import DeletePostSuccess from './components/DeletePostSuccess'
import Page404 from './components/Page404'

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
                path: '/404',
                exact: true,
                component: Page404
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
                path: '/edit-post/success',
                exact: true,
                component: EditPostSuccess
            },
            {
                path: '/edit-post/:id',
                exact: true,
                component: EditPost
            },
            {
                path: '/post-delete-success',
                exact: true,
                component: DeletePostSuccess
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