class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}
  
async function loadJson(url) {
    let response = await fetch(url)

    if (response.status == 200) {
        let json = await response.json()
        return json
    } else {
        throw new HttpError(response);
    }
}
  
// Запрашивать логин, пока github не вернёт существующего пользователя.
async function demoGithubUser() {

    let response
    while(true) {
        let name = prompt("Введите логин?", "iliakan");
  
        try {
            response = await loadJson(`https://api.github.com/users/${name}`)
            break
        } catch(err) {
            if (err instanceof HttpError && err.response.status == 404) {
                alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
            } else {
                throw err;
            }
        }
    }

    alert(`Полное имя: ${response.name}.`)
    return user
}
  
demoGithubUser();