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
  console.log(formData.joinNewsLetter);
  return (
    <form className="form">
      <input
        type="text"
        className="form-item"
        placeholder="Email"
        onChange={handleChange}
        name="email"
        value={formData.email}
      />
      <input
        type="text"
        className="form-item"
        placeholder="Password"
        onChange={handleChange}
        name="password"
        value={formData.password}
      />
      <input
        type="text"
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
        <label htmlFor="joinNewsLetter">I want to join newsletter</label>
      </div>
      <div className="form-item div-button">
        <button>Sign Up</button>
      </div>
    </form>
  );
}
