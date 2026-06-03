"use client";
import TablesContainer from "./TablesContainer";
import BookTableForm from "./BookTableForm";
import { useState } from "react";

const tables = [
  { id: 1, guest: 4, img: "/assets/icon/table1.svg" },
  { id: 2, guest: 4, img: "/assets/icon/table1.svg" },
  { id: 3, guest: 6, img: "/assets/icon/table2.svg" },
  { id: 4, guest: 4, img: "/assets/icon/table1.svg" },
  { id: 5, guest: 8, img: "/assets/icon/table3.svg" },
  { id: 6, guest: 4, img: "/assets/icon/table1.svg" },
  { id: 7, guest: 4, img: "/assets/icon/table1.svg" },
  { id: 8, guest: 6, img: "/assets/icon/table2.svg" },
  { id: 9, guest: 4, img: "/assets/icon/table1.svg" },
  { id: 10, guest: 8, img: "/assets/icon/table3.svg" },
  { id: 11, guest: 4, img: "/assets/icon/table1.svg" },
  { id: 12, guest: 4, img: "/assets/icon/table1.svg" },
  { id: 13, guest: 6, img: "/assets/icon/table2.svg" },
  { id: 14, guest: 4, img: "/assets/icon/table1.svg" },
  { id: 15, guest: 8, img: "/assets/icon/table3.svg" },
];

const BookTableContainer = ({ events }) => {
  const [takenTables, setTakenTables] = useState([]);
  const [activeFilter, setActiveFilter] = useState("");
  const filteredTables = activeFilter === "" ? tables : tables.filter((table) => table.guest === Number(activeFilter));

  return (
    <section className="max-w-[80rem] mx-auto p-7 md:p-0">
      <TablesContainer takenTables={takenTables} filteredTables={filteredTables} activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <BookTableForm events={events} takenTables={takenTables} setTakenTables={setTakenTables} tables={tables} />
    </section>
  );
};

export default BookTableContainer;
