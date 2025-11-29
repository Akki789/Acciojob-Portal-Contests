const posts = [
  { id: 1, markedAsSpam: true },
  { id: 2, markedAsSpam: false },
  { id: 3, markedAsSpam: true }
];

function DELETE(postId) {
  console.log(`Post ${postId} deleted.`);
}

function SEND_EMAIL(postId) {
  console.log(`Email sent: Post ${postId} will be deleted soon.`);
}

posts.forEach((post) => {
  if (post.markedAsSpam) {

    const emailInterval = setInterval(() => {
      SEND_EMAIL(post.id);
    }, 600000); // 10 minutes

    setTimeout(() => {
      DELETE(post.id);
      clearInterval(emailInterval);
    }, 1800000); // 30 minutes

  }
});
