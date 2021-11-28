async function addNewPost(event){
    event.preventDefault();

    const title = document.querySelector('#titleInput').value.trim();
    const content = document.querySelector('#contentInput').value.trim();

    console.log(title);
    console.log(content);

        if (title && content) {
        const response = await fetch('/api/blogs', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            console.log(response);
            document.location.replace('/dashboard');
        } else {
            console.log(response.statusText);
        }
        } else {
            console.log("missing either title or content")
        }

  };

 document.querySelector('#newBlogPost').addEventListener('submit', addNewPost);
