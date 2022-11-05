import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const CheckOut = () => {
  const { _id, title, price } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || "unregistered";
    const phone = form.phone.value;
    const message = form.message.value;

    const order = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      email,
      phone,
      message,
    };
    // if(phone.length>10){
    //   alert('Phone number should be 10 char')
    // }

    fetch("https://genius-car-server-ruddy.vercel.app/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("genius-token")}`,
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Your order is successfully Completed");
          form.reset();
        }
        console.log(data);
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <form onSubmit={handlePlaceOrder}>
        <h2 className="text-4xl">You are About to order:{title}</h2>
        <h4 className="text-3xl">Price: {price}</h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input
            name="firstName"
            required
            type="text"
            placeholder="First Name"
            className="input input-ghost w-full input-bordered"
          />
          <input
            name="lastName"
            required
            type="text"
            placeholder="Last Name"
            className="input input-ghost w-full input-bordered"
          />
          <input
            name="phone"
            type="text"
            required
            placeholder="Your Phone"
            className="input input-ghost w-full input-bordered"
          />
          <input
            name="email"
            required
            type="text"
            placeholder="Your Email"
            defaultValue={user?.email}
            className="input input-ghost w-full input-bordered"
            readOnly
          />
        </div>
        <textarea
          name="message"
          className="textarea textarea-bordered h-24 w-full"
          placeholder="Your Massege here"
        ></textarea>
        <input className="btn" type="submit" value="PLACE YOUR ORDER " />
      </form>
    </div>
  );
};

export default CheckOut;
