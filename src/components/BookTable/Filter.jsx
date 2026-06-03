"use client";

const Filter = ({ setActiveFilter, activeFilter }) => {
  return (
    <section className="flex gap-5">
      <button className={`filter_knap hero_btn_1 ${activeFilter === "" ? "filter_knap--active" : ""}`} onClick={() => setActiveFilter("")}>
        All tables
      </button>
      <button className={`filter_knap hero_btn_1 ${activeFilter === "4" ? "filter_knap--active" : ""}`} onClick={() => setActiveFilter("4")}>
        Table for 4 people
      </button>
      <button className={`filter_knap hero_btn_1 ${activeFilter === "6" ? "filter_knap--active" : ""}`} onClick={() => setActiveFilter("6")}>
        Table for 6 people
      </button>
      <button className={`filter_knap hero_btn_1 ${activeFilter === "8" ? "filter_knap--active" : ""}`} onClick={() => setActiveFilter("8")}>
        Table for 8 people
      </button>
    </section>
  );
};

export default Filter;
