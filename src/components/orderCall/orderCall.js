import React, { useState } from "react";
import "./orderCall.scss";

const OrderCall = () => {
  const [contactOption, setContactOption] = useState("phoneOption");
  const [formValues, setFormValues] = useState({
    name: null,
    phone: null,
    email: null,
    comment: null,
  });

  const radioClickHandler = (event) => {
    if (event.target.id !== contactOption) {
      switch (event.target.id) {
        case "phoneOption": {
          return setContactOption("phoneOption");
        }
        case "emailOption": {
          return setContactOption("emailOption");
        }
        default:
          console.error("invalid value");
      }
    }
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const submitHandler = (event) => {
    console.log(formValues);
    event.target.reset();
    event.preventDefault();
  };

  return (
    <div className="formWrap">
      <form
        action=""
        id="callback"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <div className="crossButton">
          <span></span>
          <span></span>
        </div>
        <h2>Обратная Связь</h2>
        <input
          type="text"
          name="name"
          className="nameInput input"
          placeholder="Ваше Имя"
          onChange={(e) => changeHandler(e)}
        />
        <div className="radioButtons">
          <label htmlFor="phoneOption" className="radioLabel">
            <input
              type="radio"
              name="contactOption"
              id="phoneOption"
              className="contactOption"
              defaultChecked
              onClick={(e) => radioClickHandler(e)}
            />
            <div className="checkmark"></div>
            Связаться по телефону
          </label>
          <label htmlFor="emailOption" className="radioLabel">
            <input
              type="radio"
              name="contactOption"
              id="emailOption"
              className="contactOption"
              onClick={(e) => radioClickHandler(e)}
            />
            <div className="checkmark"></div>
            Связаться по почте
          </label>
        </div>
        {contactOption === "phoneOption" ? (
          <input
            type="tel"
            name="phone"
            className="input"
            pattern="\s{0,}\+{1,1}375\s{0,}\({0,1}(([2]{1}([5]{1}|[9]{1}))|([3]{1}[3]{1})|([4]{1}[4]{1}))\)\s{0,}[0-9]{3,3}\s{0,}[0-9]{4,4}"
            placeholder="Телефон"
            onChange={(e) => changeHandler(e)}
            required
          />
        ) : (
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Почта"
            onChange={(e) => changeHandler(e)}
            required
          />
        )}

        <textarea
          name="comment"
          id="comment"
          cols="30"
          rows="10"
          onChange={(e) => changeHandler(e)}
          placeholder="Комментарий"
        ></textarea>
        <button type="submit" className="submitOrder">
          {contactOption === "phoneOption"
            ? "Заказать звонок"
            : "Заказать почту"}
        </button>
      </form>
    </div>
  );
};

export default OrderCall;
