async function deleteFormHandler(event) {
    event.preventDefault();
  
  }
  
  document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);

  await fetch(`/api/posts/${id}`, {
    method: 'DELETE'
  });