async function addNewComment(event){
    event.preventDefault();

    const content = document.querySelector('#commentInput').value.trim();

    const pathname = window.location.pathname.split('/');
    const blog_id = pathname[2];

    const user_id = sessionStorage.user_id;

    console.log(user_id)

    console.log('the blog_id is ' + blog_id);

    console.log(content);

        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ content, blog_id }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            console.log(response);
             document.location.reload();
        } else {
            console.log(response.statusText);

        }

  };

 document.querySelector('#newComment').addEventListener('submit', addNewComment);
