import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const URL = "http://localhost:5000/api/auth/register";

 export const Register = () => {

    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
    });


    const navigate = useNavigate();

    const  {storeTokenInLs} = useAuth();

  const handleInput = (e) => {
    console.log(e);
    let name  = e.target.name;
    let value = e.target.value;

    setUser({
     ...user,
     [name]:value,
    });
  };

// handling the form submission
  const handlesubmit =async (e) => {
    e.preventDefault();
    console.log(user);
    // connect backend
    try {
        
   
    const respponse = await fetch(URL, {
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(user),
    });

    // console.log(respponse);
    const res_data = await respponse.json();
    console.log("res from server", res_data.extraDetails);
    if (respponse.ok) {
        
        // stored the token in localhost
        storeTokenInLs(res_data.token);
        setUser( { username: "",email: "",phone: "", password: "" } );
        toast.success("user registration successful");
        navigate("/");
    }else{
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
        // console.log("invalide user details");
    }
} catch (error) {
        console.log("register", error);
}
  };

  return (
    <>
    <section>
        <main>
            <div className="section-registration">
                <div className="container grid grid-two-cols">
                    <div className="registration-image">
                        <img src="/images/register.png" alt="a girl is trying to do registration" width="500" height="500" />
                    </div>
                    {/* let registration form start */}
                    <div className="registration-form">
                        <h1 className="main-heading mb-3">registration form</h1>
                        <br />
                        <form action="#" onSubmit={handlesubmit}>
                            <div>
                                <label htmlFor="username">Username</label>
                                <input type="text" name="username" placeholder="enter username" id="username" required autoComplete="off" value={user.username} onChange={handleInput} />
                            </div>
                            <div>
                                <label htmlFor="email">email</label>
                                <input type="email" name="email" placeholder="enter email" id="email" required autoComplete="off" value={user.email} onChange={handleInput} />
                            </div>
                            <div>
                                <label htmlFor="phone">phone</label>
                                <input type="number" name="phone" placeholder="enter phone" id="phone" required autoComplete="off" value={user.phone} onChange={handleInput} />
                            </div>
                            <div>
                                <label htmlFor="password">password</label>
                                <input type="password" name="password" placeholder="enter password" id="password" required autoComplete="off" value={user.password} onChange={handleInput}/>
                            </div>
                          
                            <br />
                            <button type="submit" className="btn btn-submit">Register Now</button>
                            
                        </form>
                    </div>
                </div>
            </div>
        </main>
    </section>
    </>
  )
};

