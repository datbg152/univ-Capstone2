function addComment() {
    const commentInput = document.querySelector(".comment-input");
    const commentText = commentInput.value.trim();
    
    
    if (commentText === "") {
        alert("Please enter a comment.");
        return;
    }
    
   
    const commentsList = document.querySelector(".comments");
    const newComment = document.createElement("li");
    newComment.textContent = commentText;
    commentsList.appendChild(newComment);
    
    
    commentInput.value = "";
}
