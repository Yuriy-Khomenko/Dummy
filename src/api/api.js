const url = 'tabs/tabs.json';

export default function () {
    return fetch(url).then(data => data.json()).catch(e => console.log(e));
}