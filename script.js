window.onload = () => {
  load.addEventListener("click", async () => {
    const response = await fetch(
      `http://localhost:8080/login?login=${login.value}&password=${password.value}`,
      {
        method: "POST",
        body: JSON.stringify({
          login1: login.value,
          password1: password.value,
        }),
      }
    );
    const content = await response.text();
    res = document.createElement("h1");
    res.innerHTML = content;
    document.body.appendChild(res);
    const body = response.body;
    console.log("Success");
  });
};
