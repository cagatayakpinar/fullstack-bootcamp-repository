const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
xhr.send();
xhr.onreadystatechange = function () {
if (this.readyState === 4) {
    if (this.status == 200) {
    console.log(this.responseText)
    }
}
} 

    