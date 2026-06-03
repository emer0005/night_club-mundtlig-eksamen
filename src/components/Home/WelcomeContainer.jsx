import WelcomeCard from "./WelcomeCard";

const welcomeimages = [
  { img: "/assets/content-img/thumb1.jpg", icon: "/assets/icon/Favicon.svg", title: "Night Club" },
  { img: "/assets/content-img/reastaurant_1.jpg", icon: "/assets/icon/Dinner.png", title: "Restaurant" },
  { img: "/assets/content-img/thumb2.jpg", icon: "/assets/icon/Champagne.png", title: "Bar" },
];
const WelcomeContainer = () => {
  return (
    <section className=" p-10 md:p-0 md:py-10 max-w-[80rem] mx-auto mx-auto">
      <h2 className="text-center">Welcome in nightclub</h2>
      <div className="gradient_line h-[5px] w-[200px] mx-auto mt-[var(--space-s)]"></div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-10 justify-center items-center mt-[var(--space-xl)]">
        {welcomeimages.map((welcomeimage, i) => (
          <WelcomeCard key={i} img={welcomeimage.img} icon={welcomeimage.icon} title={welcomeimage.title} />
        ))}
      </div>
    </section>
  );
};

export default WelcomeContainer;
