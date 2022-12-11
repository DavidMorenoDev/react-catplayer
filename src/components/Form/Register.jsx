import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";
import { FetchUser } from "../../API/FetchUser";
import {FetchCreateUsers} from './../../API/FetchCreateUsers'

const Register = (initialForm) => {

const [form,setForm]= useState(initialForm);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });
/*   console.log(errors); */

  const [users, setUsers] = useState([]);
  const url = "http://localhost:8000/user";

  useEffect(() => {
    const connection = async () => {
      const data = await FetchUser(url);
      setUsers(data);
      /*  console.log(data); */
    };
    connection();
  }, [url]);

  const navigate = useNavigate();

  const onSubmit = (form) => {
    const userExist = users.map((user) => {
      if (user.email === form.email) {
        return true;
      } else {
        return false;
      }
    });
    if (userExist.includes(true)) {
      console.log("user exist");
      navigate("/");

    } else {
      FetchCreateUsers(form);
      navigate("/");
      console.log("user not exist");
    }
  };

  return (
    <>
     
            <h2>Register</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("first_name", {
                  required: "username is required",
                  minLength: {
                    value: 5,
                    message: "username must be 3 characters long",
                  },
                  maxLength: {
                    value: 10,
                    message: "username must be 10 characters long",
                  },
                })}
                placeholder="First name"
                className="field_Register"
              />
              <p className="error_message">{errors.firstName?.message}</p>

              <input
                {...register("last_name", { required: "lastname is required" })}
                placeholder="Last name"
                className="field_Register"
              />
              <p className="error_message">{errors.lastName?.message}</p>

              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Email must be valid",
                  },
                })}
                placeholder="email"
                className="field_Register"
              />
              <p className="error_message">{errors.email?.message}</p>
              <input
                {...register("password", {
                  required: "password is required",
                  pattern: {
                    value:
                      /^(?=.*[0-9])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/,
                    message:
                      "password must contain 6 characters , one uppercase,one lowercase,one number and one special character",
                  },
                })}
                placeholder="password"
                type="password"
                className="field_Register"
              />
              <p className="error_message">{errors.password?.message}</p>

              <input type="submit" />
            </form>
          
    </>
  );
};

export default Register;
