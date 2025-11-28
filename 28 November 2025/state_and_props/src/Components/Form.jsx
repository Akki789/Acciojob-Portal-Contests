import React, { useState } from 'react'

export default function Form() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [cpass, setCpass] = useState("");
    const [msg, setMsg] = useState("");

    function handleSubmit(e){
        e.preventDefault();

        if (name.trim().split(/\s+/).length < 2) {
            setMsg("Name must contain at least two words.");
            return;
        }



        if(!email.includes("@") || !email.includes(".") || email.lastIndexOf(".") < email.indexOf("@")){
            setMsg("Enter valid email");
            return;
        }


        if (pass.length < 8) {
            setMsg("Password must be at least 8 characters.");
            return;
        }


        if (!/[A-Z]/.test(pass)) {
            setMsg("Password must contain one uppercase letter.");
            return;
        }


        if (!/[a-z]/.test(pass)) {
            setMsg("Password must contain one lowercase letter.");
            return;
        }


        if (!/[0-9]/.test(pass)) {
            setMsg("Password must contain one number.");
            return;
        }


        if (!/[!@#$%^&*]/.test(pass)) {
            setMsg("Password must contain one special character.");
            return;
        }

        if(cpass !== pass){
            setMsg("Password should be same!!");
            return;
        }

        setMsg("Form successfully validated");

    }

  return (
    <div>
        <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br /><br />

        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <br /><br />

        <input
          type="password"
          placeholder="Confirm Password"
          value={cpass}
          onChange={(e) => setCpass(e.target.value)}
        />
        <br /><br />

        <button type="submit">Submit</button>
      </form>

      <p style={{ marginTop: "15px", color: msg.includes("success") ? "green" : "red" }}>
        {msg}
      </p>

      
    </div>
  )
}
