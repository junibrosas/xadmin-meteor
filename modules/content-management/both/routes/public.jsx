
const publicRoutes = FlowRouter.group({
  name: 'public'
});

publicRoutes.route( '/posts', {
  name: 'index',
  action() {
    ReactLayout.render( App, { yield: <PostsIndex /> } );
  }
});

publicRoutes.route( '/posts/:slug', {
  name: 'singlePost',
  action( params ) {
    ReactLayout.render( App, { yield: <SinglePost slug={ params.slug } /> } );
  }
});

publicRoutes.route( '/tags/:tag', {
  name: 'tagIndex',
  action( params ) {
    ReactLayout.render( App, { yield: <PostsIndex tag={ params.tag } /> } );
  }
});
