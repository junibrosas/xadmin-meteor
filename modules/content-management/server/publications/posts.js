Meteor.publish( 'editor', ( postId ) => {
  check( postId, String );

  return [
    Posts.find( { _id: postId } ),
    Meteor.users.find( {}, { fields: { profile: 1 } } )
  ];
});

Meteor.publish( 'postsIndex', function() {
  return Posts.find( { published: true } );
});

Meteor.publish( 'tagsIndex', function( tag ) {
  check( tag, String );
  return Posts.find( { published: true, tags: { $in: [ tag ] } } );
});


Meteor.publish( 'postsList', () => {
  return Posts.find();
});


Meteor.publish( 'singlePost', ( postSlug ) => {
  check( postSlug, String );

  return Posts.find( { slug: postSlug } );
});
