import Main from './components/Main'
import FilteredPostList from './containers/FilteredPostList'
import Post from './components/Post'

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