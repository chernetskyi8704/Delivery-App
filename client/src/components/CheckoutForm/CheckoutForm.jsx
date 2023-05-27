import classes from "./CheckoutForm.module.css";
import { useForm } from "react-hook-form";
import {
  changeIsModalOrderPlacement,
  resetSettings,
} from "../../features/shoppingCart/shoppingCartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeIsOrderConfirmModalOpen } from "../../features/shoppingCart/shoppingCartSlice";
import { useCreateOrderMutation } from "../../features/shoppingCart/shoppingCartApiSlice";

const CheckoutForm = () => {
  const dispatch = useDispatch();
  const router = useNavigate();
  const { orderedItems, totalPrice } = useSelector(
    state => state.shoppingCart.shoppingCartSettings
  );

  const [createOrder] = useCreateOrderMutation();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "onBlur" });

  const onSubmit = async data => {
    const newData = { userData: data, orderedItems, totalPrice };
    await createOrder(newData);

    dispatch(changeIsModalOrderPlacement(false));
    dispatch(resetSettings());
    dispatch(changeIsOrderConfirmModalOpen(true));
    router(`/categories`);
  };

  const renderErrorMessage = (fieldName, requiredMessage, patternMessage) => {
    return (
      <>
        {errors[fieldName]?.type === "required" && (
          <span>{requiredMessage}</span>
        )}
        {errors[fieldName]?.type === "pattern" && <span>{patternMessage}</span>}
      </>
    );
  };

  return (
    <form
      className={classes.form}
      onClick={e => {
        e.stopPropagation();
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2>Fill in the following details to checkout the order:</h2>
      <div className={classes.formGroup}>
        <label htmlFor="firstName">First Name:</label>
        <input
          id="firstName"
          placeholder="Name"
          {...register("firstName", {
            required: true,
            pattern: /^[A-Z][a-z]+$/,
          })}
        />
        {renderErrorMessage(
          "firstName",
          "This field is required",
          "First name must start with a capital letter and contain only letters"
        )}
      </div>
      <div className={classes.formGroup}>
        <label htmlFor="lastName">Last Name:</label>
        <input
          id="lastName"
          placeholder="Surname"
          {...register("lastName", {
            required: true,
            pattern: /^[A-Z][a-z]+$/,
          })}
        />
        {renderErrorMessage(
          "lastName",
          "This field is required",
          "First name must start with a capital letter and contain only letters"
        )}
      </div>
      <div className={classes.formGroup}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="example@example.com"
          {...register("email", {
            required: true,
            pattern: /^\S+@\S+$/i,
          })}
        />
        {renderErrorMessage(
          "email",
          "This field is required",
          "Please enter a valid email address"
        )}
      </div>
      <div className={classes.formGroup}>
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          placeholder="+380777777777"
          {...register("phone", {
            required: true,
            pattern: /^\+380\d{9}$/,
          })}
        />
        {renderErrorMessage(
          "phone",
          "This field is required",
          "Please enter a valid phone number"
        )}
      </div>
      <div className={classes.formGroup}>
        <label htmlFor="address">Address:</label>
        <textarea
          id="address"
          placeholder="Lviv, Nova Poshta: Post Office Number 5"
          {...register("address", {
            required: true,
          })}
        ></textarea>
      </div>
      <button className={classes.checkoutButton}>Checkout order</button>
    </form>
  );
};

export default CheckoutForm;
