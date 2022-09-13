async function editFormHandler(event) {
    event.preventDefault();
  
  }
  
  document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);

  await fetch(`/api/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });