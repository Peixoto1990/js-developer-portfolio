async function fechProfileData() {
    try {
        const url = "https://raw.githubusercontent.com/Peixoto1990/js-developer-portfolio/refs/heads/main/data/profile.json"
        const requestData = await fetch(url);

        const responseData = await requestData.json();

        return responseData
    } catch (error) {
        console.error(error);
    }
}

