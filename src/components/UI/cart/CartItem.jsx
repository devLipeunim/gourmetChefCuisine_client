"use client";

import React from "react";
import { ListGroupItem } from "reactstrap";
import Image from "next/image";
import "../../../styles/cart-item.css";
import placePic from "../../../assets/images/Coo_Burger_Walking.png";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";
const CartItem = ({ item }) => {
  const { _id, title, price, image01, quantity, totalPrice } = item;
  const dispatch = useDispatch();
  const incrementItem = () => {
    dispatch(
      cartActions.addItem({
        _id,
        title,
        price,
        image01,
      })
    );
  };

  const decreaseItem = () => {
    dispatch(cartActions.removeItem(_id));
  };

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(_id));
  };

  if (!image01) {
    // If image01 is not available yet, you can show a placeholder image or a loading indicator.
    return (
      <ListGroupItem className="border-0 cart__item">
        <div className="cart__item-info d-flex gap-2">
        <Image src={placePic} alt="Placeholder"/>
  
          <div className="cart__product-info w-100 d-flex align-items-center gap-4 justify-content-between">
            <div>
              <h6 className="cart__product-title">{title}</h6>
              <p className=" d-flex align-items-center gap-5 cart__product-price">
                {quantity}x <span>&#8358;{totalPrice}</span>
              </p>
              <div className=" d-flex align-items-center justify-content-between increase__decrease-btn">
                <span className="increase__btn" onClick={incrementItem}>
                  <i className="ri-add-line"></i>
                </span>
                <span className="quantity">{quantity}</span>
                <span className="decrease__btn" onClick={decreaseItem}>
                  <i className="ri-subtract-line"></i>
                </span>
              </div>
            </div>
  
            <span className="delete__btn" onClick={deleteItem}>
              <i className="ri-close-line"></i>
            </span>
          </div>
        </div>
      </ListGroupItem>
    );
  }

  return (
    <ListGroupItem className="border-0 cart__item">
      <div className="cart__item-info d-flex gap-2">
        <Image
          src={image01?.url}
          width={image01?.metadata?.dimensions?.width || 300}
          height={image01?.metadata?.dimensions?.height || 200}
          alt="product-img"
        />

        <div className="cart__product-info w-100 d-flex align-items-center gap-4 justify-content-between">
          <div>
            <h6 className="cart__product-title">{title}</h6>
            <p className=" d-flex align-items-center gap-5 cart__product-price">
              {quantity}x <span>&#8358;{totalPrice}</span>
            </p>
            <div className=" d-flex align-items-center justify-content-between increase__decrease-btn">
              <span className="increase__btn" onClick={incrementItem}>
                <i className="ri-add-line"></i>
              </span>
              <span className="quantity">{quantity}</span>
              <span className="decrease__btn" onClick={decreaseItem}>
                <i className="ri-subtract-line"></i>
              </span>
            </div>
          </div>

          <span className="delete__btn" onClick={deleteItem}>
            <i className="ri-close-line"></i>
          </span>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default CartItem;
