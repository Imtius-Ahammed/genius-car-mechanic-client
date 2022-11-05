export const setAuthToken = (user)=>{
  const currentUsers = {
    email: user.email,
  };
  console.log(currentUsers);

  fetch("https://genius-car-server-ruddy.vercel.app/jwt", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUsers),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      localStorage.setItem("genius-token", data.token);
      
    });
}