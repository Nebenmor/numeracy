"use client";
import React, { useState } from "react";
import { ExpandableListProp } from "../interfaces/interface";
import { listItems } from "../interfaces/interface";

const ExpandableList = ({ items }: ExpandableListProp) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <ul className="list-none p-0 m-4 mt-[40px]">
      {items.map((item) => (
        <li
          key={item.id}
          className={`bg-gray-100 m-2.5 mb-[25px] p-[15px] cursor-pointer transition-all duration-1000 ease-in-out overflow-hidden rounded-[5%] ${
            expandedId === item.id ? "h-[215px]" : "h-[50px]"
          }`}
          onClick={() => toggleItem(item.id)}
        >
          <h3 className="m-0">{item.title}</h3>
          <div
            className={`transition-all duration-500 ease-in-out relative ${
              expandedId === item.id
                ? "max-h-[500px] opacity-100 mt-[15px]"
                : "max-h-0 opacity-0"
            }`}
          >
            <p>{item.content}</p>
            <button className="absolute bottom-[-128px] right-[10px] py-[5px] px-[30px] bg-blue-500 text-white border-none cursor-pointer transition-colors duration-300 ease-in-out rounded-[10%] hover:bg-blue-700">
              Action
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ExpandableList;
