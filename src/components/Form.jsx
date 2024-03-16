import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    joinNewsLetter: false,
  });
  function handleChange(event) {
    const { name, type, checked, value } = event.target;
    setFormData((prevFormData) => {
      return { ...prevFormData, [name]: type === "checkbox" ? checked : value };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    formData.password === ""
      ? console.log("password can't be empty!")
      : formData.password === formData.passwordConfirm
      ? formData.joinNewsLetter == true
        ? console.log(
            "you are signed successfully, Thanks for joining our newsLetter "
          ) && console.log("join")
        : console.log("You are signed Successfully")
      : console.log("passed do not match!");
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-item"
        placeholder="Email"
        onChange={handleChange}
        name="email"
        value={formData.email}
      />
      <input
        type="password"
        className="form-item"
        placeholder="Password"
        onChange={handleChange}
        name="password"
        value={formData.password}
      />
      <input
        type="password"
        className="form-item"
        placeholder="Confirm Password"
        onChange={handleChange}
        name="passwordConfirm"
        value={formData.passwordConfirm}
      />
      <div className="form-item">
        <input
          type="checkbox"
          onChange={handleChange}
          name="joinNewsLetter"
          id="joinNewsLetter"
          checked={formData.joinNewsLetter}
        />
        <label htmlFor="joinNewsLetter"> I want to join newsletter</label>
      </div>
      <div className="form-item div-button">
        <button>Sign Up</button>
      </div>
    </form>
  );
}
