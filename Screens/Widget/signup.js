function navigateToSignUp() {
    // Change the URL without reloading the page
    window.history.pushState({}, '', '/signup');

    // Update the content dynamically
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `
        <h2>Sign Up Page</h2>
        <form>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required><br><br>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required><br><br>

            <button type="submit">Submit</button>
        </form>
    `;
}
