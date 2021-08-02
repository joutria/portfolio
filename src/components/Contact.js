
function Contact(props) {
  return (
      <div className="Contact">
        <h2>Contact me</h2>
        <button className="close" onClick={() => {
              props.setContact(!props.contact);
            }}>X</button>
      </div>
  );
}

export default Contact;
