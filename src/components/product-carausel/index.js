import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { Alert, Toast } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Carausel = ({ handleClick }) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
    selectedProduct: null,
  });
  const { data, loading, selected } = state;
  useEffect(() => {
    getData();
  }, []);
  const navigate = useNavigate();
  const getData = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const result = await response.json();
    setState(() => ({ data: result.products, loading: true }));
    console.log("result is =======>", result);
    // setState((prev) => ({ ...prev, data: result }));
  };

  const dispatch = useDispatch();

  return (
    <div className="flex gap-5 red overflow-x-scroll items-center justify-center">
      {loading == true ? (
        data.map((item, index) => (
          <div className="w-[300px]" key={index}>
            <img
              // className="rounded-lg md:w-auto"
              alt={item.title}
              src={item.images[0]}
              onClick={handleClick}
            />
            <div className="flex justify-between gap-4 px-1">
              <span className="font-medium text-base mt-3 text-pretty">
                {item.title}
              </span>
              <span className="font-medium text-base self-end text-wrap ">
                {item.price}
              </span>
            </div>
          </div>
        ))
      ) : (
        <div>
          <h1>Loading</h1>
        </div>
      )}
    </div>
  );
};

export default Carausel;
