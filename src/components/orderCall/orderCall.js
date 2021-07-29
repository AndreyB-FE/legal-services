import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleOrderWindow } from "../../actions";
import "./orderCall.scss";

const OrderCall = () => {
  const dispatch = useDispatch();
  const windowState = useSelector((state) => state.orderCallReducer);
  const [contactOption, setContactOption] = useState("phoneOption");
  const [isSubmited, setIsSubmited] = useState(false);
  const [formValues, setFormValues] = useState({
    name: null,
    phone: null,
    email: null,
    comment: null,
  });

  useEffect(() => {
    if (windowState) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
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

  const closeTimer = async () => {
    setIsSubmited(true);

    setTimeout(() => {
      setTimeout(dispatch(toggleOrderWindow()), 2000);
      setIsSubmited(false);
    }, 2000);
  };

  const submitHandler = (event) => {
    console.log(formValues);
    closeTimer();
    event.target.reset();
    event.preventDefault();
  };

  return (
    <div
      className={`formWrap${windowState ? " openOrder" : ""}`}
      onClick={() => dispatch(toggleOrderWindow())}
    >
      {(!isSubmited && (
        <form
          action=""
          id="callback"
          onSubmit={(e) => {
            submitHandler(e);
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="crossButton"
            onClick={() => dispatch(toggleOrderWindow())}
          >
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
              pattern="^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$"
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
      )) || (
        <div className="farewell">
          <h2>
            Спасибо за ваше обращение!
            <br /> Мы скоро с вами свяжемся
          </h2>
        </div>
      )}
    </div>
  );
};

export default OrderCall;
