import React, { useEffect, useState } from "react";
import Maps from "../../components/Maps/Maps";

const CreateHome = () => {
  const [country, setcountry] = useState([]);
  const [currency, setcurrency] = useState([]);

  useEffect(() => {
    fetch("https://mocki.io/v1/0a634dc7-9df8-4cd8-96c3-b4799e61cf06")
      .then((res) => res.json())
      .then((req) => setcountry(req));
  }, []);

  useEffect(() => {
    fetch("https://mocki.io/v1/ce1c08bc-b9be-42d8-9110-7040569d5a91")
      .then((res) => res.json())
      .then((req) => setcurrency(req));
  }, []);

 


  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Home Name
              </label>
              <input
                type="text"
                className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
          <div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Categories
              </label>
              <select
                className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="cars"
                id="cars"
              >
                <option value="kutcha houses">kutcha houses</option>
                <option value="bungalows">bungalows</option>
                <option value="farmhouses">farmhouses</option>
                <option value="apartments">apartments</option>
                <option value="villas">villas</option>
              </select>
            </div>
          </div>
          <div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Country
              </label>
              <select
                className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="cars"
                id="cars"
              >
                {country.map((item) => (
                  <option value={item.name}>{item.name}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                City
              </label>
              <input
                type="text"
                placeholder="City name"
                className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
          <div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Address
              </label>
              <input
                type="text"
                placeholder="Address name"
                className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
          <div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Pincode
              </label>
              <input
                type="number"
                placeholder="Pincode"
                className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
          <div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Prices
              </label>
              <select
                className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="cars"
                id="cars"
              >
                {currency.map((item) => (
                  <option value={item.symbol}>{`${item.symbol} / ${item.name}`}</option>
                ))}
              </select>
              
            </div>
          </div>
          <div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Prices
              </label>
              <input
                type="number"
                placeholder="Prices"
                className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        <div>
            <Maps address='3006 Garth Rd' city='Baytown' country='United States'/>
        </div>
      </div>
    </>
  );
};

export default CreateHome;
