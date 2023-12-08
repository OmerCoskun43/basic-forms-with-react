import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Forms.css";
import { useState } from "react";

const Forms = () => {
  //   const [toggle, setToggle] = useState(false);
  const [formsValues, setFormsValues] = useState({
    email: "",
    username: "",
    firstname: "",
    lastname: "",
    yourFootballTeam: "",
    image: "",
    password: "",
  });

  const {
    email,
    username,
    firstname,
    lastname,
    yourFootballTeam,
    image,
    password,
  } = formsValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = document.querySelector(".result");
    result.style.transform = "translateX(0%)";
  };

  function handleChange(e) {
    setFormsValues({
      ...formsValues,
      [e.target.id]: e.target.value,
    });
  }

  const showHide = () => {
    const pass = document.querySelector("#password");
    console.log(pass.type);
    pass.type === "password" ? (pass.type = "text") : (pass.type = "password");
  };

  function handleMouseOver(e) {
    // setToggle(!toggle);
    if (!password) {
      e.target.className = "salla";
    }
  }

  function handleMouseLeave(e) {
    // setToggle(!toggle);
    if (!password) {
      e.target.className = "normal";
    }
  }
  console.log(Boolean(password));

  return (
    <div>
      {/* <h1 className="head-form">FORMS AND OUTPUT</h1> */}
      <div className="form-cont">
        <Form className="kapsa" onSubmit={handleSubmit}>
          <Form.Group className="">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              className="form-control"
              type="email"
              required
              id="email"
              value={email}
              onChange={handleChange}
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group className="">
            <Form.Label>Username</Form.Label>
            <Form.Control
              className="form-control"
              required
              type="text"
              id="username"
              value={username}
              onChange={handleChange}
              placeholder="username"
            />
          </Form.Group>
          <Form.Group className="">
            <Form.Label>FirstName</Form.Label>
            <Form.Control
              type="text"
              required
              className="form-control"
              id="firstname"
              value={firstname}
              onChange={handleChange}
              placeholder="firstname"
            />
          </Form.Group>
          <Form.Group className="">
            <Form.Label>lastname</Form.Label>
            <Form.Control
              required
              type="text"
              className="form-control"
              id="lastname"
              value={lastname}
              onChange={handleChange}
              placeholder="lastname"
            />
          </Form.Group>
          <Form.Group className="">
            <Form.Label>your Football Team</Form.Label>
            <Form.Control
              type="text"
              required
              id="yourFootballTeam"
              className="form-control"
              value={yourFootballTeam.toUpperCase()}
              onChange={handleChange}
              placeholder="Please your football team as GS or FB or BJK"
            />
          </Form.Group>
          <Form.Group className="">
            <Form.Label>image</Form.Label>
            <Form.Control
              className="form-control"
              type="text"
              required
              id="image"
              value={image}
              onChange={handleChange}
              placeholder="Enter an image URL"
            />
          </Form.Group>
          <Form.Group className="">
            <Form.Label>Password</Form.Label>
            <div className="pass">
              <Form.Control
                className="form-control w-75"
                type="password"
                required
                id="password"
                value={password}
                onChange={handleChange}
                placeholder="Password"
              />
              <Button
                onClick={showHide}
                className=" d-inline sh-button "
                variant="danger"
              >
                Show/Hide
              </Button>{" "}
            </div>
          </Form.Group>

          <Button
            id="btn-salla"
            className=""
            variant="success"
            type="submit"
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
          >
            Submit
          </Button>
        </Form>

        <div className="result">
          <p>Email Adress</p>
          <p className="bord"> {email} </p>
          <p>Username</p>
          <p className="bord"> {username} </p>
          <p>Firstname</p>
          <p className="bord"> {firstname} </p>
          <p>Lastname</p>
          <p className="bord"> {lastname} </p>
          <p>Your Football Team</p>
          <p className="bord">{yourFootballTeam}</p>
          <p> Image </p>
          <div className="images">
            {yourFootballTeam.toUpperCase() === "GS" && (
              <img
                src="https://image.hurimg.com/i/hurriyet/75/0x0/6475bcbd4e3fe02940c2802d.jpg"
                alt="GS"
              />
            )}
            {yourFootballTeam.toUpperCase() === "FB" && (
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcuz5Qy_GL9Ruj_b1r0_GaBKPPug2pOxijCQ&usqp=CAU"
                alt="GS"
              />
            )}
            {yourFootballTeam.toUpperCase() === "BJK" && (
              <img
                src="https://e1.pxfuel.com/desktop-wallpaper/401/202/desktop-wallpaper-be%C5%9Fikta%C5%9F-logo-besiktas.jpg"
                alt="GS"
              />
            )}
            <img src={image} width="352px" height="158px" alt={image} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forms;
