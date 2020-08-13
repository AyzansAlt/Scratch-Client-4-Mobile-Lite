    const api_url = "https://api.scratch.mit.edu/users/ayzan/followers";
async function getISS() {
        const response = await fetch(api_url);
        const data = await response.json();
        console.log(data);
}
getISS();