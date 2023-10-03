export default async function ambilDataUserAsync() {
    let response = await fetch("https://reqres.in/api/users");
    response = await response.json();
    console.log(response.data);
}

