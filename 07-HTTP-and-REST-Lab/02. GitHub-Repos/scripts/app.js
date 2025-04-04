function loadRepos() {
    let url = 'https://api.github.com/users/testnakov/repos';


    fetch(url)
        .then(onResponse)
        .then(addElement)
        .catch(onError)

    function onResponse(res) {
        if (!res.ok){
            throw new Error('Something went wrong!');
        }

        return res.text();
    }

    function addElement(data) {
        let result = document.getElementById('res');
        result.textContent = data;
    }

    function onError(err){
        console.log(err);
    }

}