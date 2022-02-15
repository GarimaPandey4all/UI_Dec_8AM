window.addEventListener('load', initEvents);

function initEvents()
{
    document.getElementById("btn").addEventListener("click", showName);
}

//event binding
// document.getElementById("btn").addEventListener("click", showName);

function showName() {
  let username = document.getElementById("box").value;
  document.getElementById("result").innerHTML = username;
  // document.getElementById("result").innerHTML += username;
  // document.getElementById("result").innerHTML = document.getElementById("result").innerHTML + username;
}
