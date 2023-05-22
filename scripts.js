function getPost() {
    const postId = document.getElementById('post-id').value;
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
.then(response => {
        if (!response.ok) {
            throw Error('Post not found');
        }
        return response.json();
    })
         .then(data => {
             document.getElementById('post-title').textContent = data.title;
             document.getElementById('post-body').textContent = data.body;
             document.getElementById('post-container').style.display = 'block';
             document.getElementById('comments-btn').style.display = 'inline-block';
         })
         .catch(error => {
             document.getElementById('post-container').style.display = 'none';
             document.getElementById('comments-btn').style.display = 'none';
             document.getElementById('error-msg').style.display = 'block';
             console.error(error);
         });
}

function getComments() {
    const postId = document.getElementById('post-id').value;
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
.then(response => response.json())
         .then(data => {
             console.log(data);
             // Do something with comments data
         })
         .catch(error => {
             console.error(error);
         });
}
