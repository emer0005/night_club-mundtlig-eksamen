"use client";
import Tables from "./Tables";
import Filter from "./Filter";

const TablesContainer = ({ filteredTables, takenTables, setActiveFilter, activeFilter }) => {
  return (
    <section className="mb-[7rem]">
      <div className="flex flex-wrap gap-20 justify-center items-center mb-[var(--space-xs)]  mt-[var(--space-xl)]">
        <Filter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      </div>
      <div className="flex p-10 gap-2 items-center justify-center">
        <div className="isTakenTabel h-6 w-6 border-white border"></div>
        <span className="text-white uppercase font-semibold text-[0.7rem]">= Reserved</span>
      </div>

      <div className="flex flex-wrap gap-20 justify-center items-center">
        {filteredTables.map((table, i) => (
          <Tables key={i} img={table.img} number={table.id} isTaken={takenTables.includes(table.id)} />
        ))}
      </div>
    </section>
  );
};

export default TablesContainer;
