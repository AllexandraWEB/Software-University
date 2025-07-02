// The task is to write a JS function that executes an AJAX request with Fetch API and loads all user github repositories by a given username

function loadRepos() {
	const username = document.getElementById("username").value; // Takes the value of the input
	const url = `https://api.github.com/users/${username}/repos`; // A string that points to the GitHub API endpoint for a user's repositories
	const list = document.getElementById("repos");

	// Sends an HTTP GET request to the GitHub API
	// First .then(handleResponse) will process the response into JSON
	// Second .then(handleData) takes the JSON data and displays it

	fetch(url)
	.then(handleResponse)
	.then(handleData)
	.catch(handleError); 

	function handleResponse(response) {
		if(response.ok) {
			return response.json(); // Converts the Response object (returned by fetch) to JSON and returns a Promise that resolves to an array or object

		} else {
			throw response.json();
		}
	}

	function handleData(data) {
		list.replaceChildren(); // Clears the current <ul>'s content and then add the new data

		for (const repo of data) { // For each new entry
			list.innerHTML += `
			<li>
            <a href="${repo.html_url}">${repo.full_name}</a>
			</li>`
		}
	}

	function handleError(errorPromise) {
		errorPromise.then(error => {
			list.innerHTML = error.message;
		})
	}
}