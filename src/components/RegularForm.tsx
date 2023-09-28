import "./RegularForm.css";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

function RegularForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      age: "",
      gender: "",
    },
  });

  return (
    <form onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}>
      <h1>My First React Hook Form</h1>
      <div>
        <input
          type="text"
          id="username"
          {...register("username", {
            required: "This is required",
            minLength: { value: 2, message: "Min length is 2" },
          })}
          placeholder="Enter UserName"
        />
        <ErrorMessage
          errors={errors}
          name="username"
          render={({ message }) => <p>{message}</p>}
        />
        {/* {errors.username && <p>{errors.username.message}</p>} */}
      </div>
      <div>
        <input
          type="text"
          id="email"
          {...register("email", {
            required: "This is required",
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: `Your email address must follow these rules:

              - Contains one or more characters before the @ symbol
              - Contains an @ symbol  
              - Contains one or more characters after the @ symbol 
              - Contains a . after the @ symbol
              - The domain name contains one or more letters/numbers after the .
              
              For example:
              
              valid@email.com
              test123@gmail.com
              
              But not:
              
              @email.com (missing part before @)
              valid@.com (missing domain name after @)
              
              The regex to validate this is:
              
              /^[^@]+@[^@.]+.[^@.]+$/
              
              This matches:
              - One or more non @ characters [^@]+
              - Followed by a @ symbol 
              - Followed by one or more non . characters [^@.]+ 
              - Followed by a . 
              - Followed by one or more non . characters again [^@.]+
              
              Please ensure your email follows these rules!`,
            },
          })}
          placeholder="Enter Email"
        />
        <ErrorMessage
          errors={errors}
          name="email"
          render={({ message }) => <p>{message}</p>}
        />
        {/* {errors.email && <p>{errors.email.message}</p>} */}
      </div>
      <div>
        <input
          type="text"
          id="password"
          {...register("password", {
            required: "This is required",
            pattern: {
              value:
                /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()])[A-Za-z0-9!@#$%^&*()]{8,20}$/,
              message: `Your password must follow these rules:

              - Be between 8 and 20 characters long
              - Contain at least one number (0-9)
              - Contain at least one uppercase letter (A-Z)
              - Contain at least one lowercase letter (a-z)
              - Contain at least one special character (!@#$%^&*())
              
              For example:
              
              ValidPass123! 
              Password123@
              
              But not:
              
              short (too short)
              LONGPASSWORD (too long)
              password (missing number and special char)
              PASSWORD123 (missing lowercase)
              password123 (missing uppercase)
              
              The regex to validate this is:
              
              /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()])[A-Za-z0-9!@#$%^&*()]{8,20}$/
              
              This checks for:
              
              - At least one number using (?=.*[0-9])
              - At least one uppercase letter using (?=.*[A-Z]) 
              - At least one lowercase letter using (?=.*[a-z])
              - At least one special character using (?=.*[!@#$%^&*()])
              - Length of 8-20 characters using {8,20}
              
              Please ensure your password follows these rules!`,
            },
          })}
          placeholder="Enter Password"
        />
        <ErrorMessage
          errors={errors}
          name="password"
          render={({ message }) => <p>{message}</p>}
        />
        {/* {errors.password && <p>{errors.password.message}</p>} */}
      </div>
      <div>
        <input
          type="number"
          placeholder="age"
          {...register("age", { min: 18, max: 99 })}
        />
      </div>
      <div>
        <select {...register("gender")}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
      </div>
      {isValid && (
        <button type="submit" disabled={!ErrorMessage}>
          Submit
        </button>
      )}
    </form>
  );
}

export default RegularForm;
