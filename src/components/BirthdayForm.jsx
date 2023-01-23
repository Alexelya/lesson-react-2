import React, { useState } from "react";

function BirthdayForm() {
       
    const [Birthday, setBirthday] = useState("");
    const [age, setAge] = useState(null);

    const handleDobChange = (e) => {
        setBirthday(e.target.value);
        const ageInMilliseconds = Date.now() - new Date(e.target.value).getTime();
        setAge(Math.floor(ageInMilliseconds / 31536000000));
      }

    return (
      <form onSubmit={BirthdayForm}>
        <label style={{color:"red"}}>
          Введите вашу дату рождения:
          <input
            value={Birthday}
            onChange={handleDobChange}
            type="date"
          />
        </label>
       { age ? <p >Ваш возраст: {age}</p> : null }
      </form>
    );
  }
  
  export default BirthdayForm;