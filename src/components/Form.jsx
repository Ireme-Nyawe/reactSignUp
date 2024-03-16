export default function Form() {
  return (
    <form className="form">
      <input type="text"  className="form-item" placeholder="Email"/>
      <input type="text"  className="form-item" placeholder="Password"/>
      <input type="text"  className="form-item" placeholder="Confirm Password"/>
      <div className="form-item">
        <input type="checkbox" />
        <label htmlFor="">I want to join newsletter</label>
      </div>
      <div className="form-item div-button">
        <button>Sign Up</button>
      </div>
    </form>
  );
}
