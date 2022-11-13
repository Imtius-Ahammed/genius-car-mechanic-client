import React, { useEffect, useState } from "react";
import { useRef } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  const [isAsc, setIsAsc] = useState(true)
  const [search, setSearch] = useState('');
  const searchRef = useRef();
  useEffect(() => {
    fetch(`https://genius-car-server-ruddy.vercel.app/services?search=${search}$order=${isAsc ? 'asc' : 'desc'}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [isAsc, search]);
  const handleSearch =()=>{
    setSearch(searchRef.current.value);
  }
  return (
    <div>
      <div className="text-center mb-4">
        <p className="text-2xl text-orange-600 font-bold">Services</p>
        <h2 className="text-5xl font-semibold"> Our Service Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
        <input ref={searchRef} className="border" type="search" name="" id="" />
        <button onClick={handleSearch}>Search</button>
        <button className="btn btn-ghost" onClick={()=> setIsAsc(!isAsc)}>
          {isAsc ? 'desc':'asc'}</button>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
