async function download() {

let url = document.getElementById("url").value;

let res = await fetch("/api/download", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ url })
});

let data = await res.json();

document.getElementById("result").innerHTML =
`<a href="${data.video}" download>Download Video</a>`;
}