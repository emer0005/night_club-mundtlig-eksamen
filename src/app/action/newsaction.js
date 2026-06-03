"use server";
const newsaction = async (prevdata, formData) => {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  const emailname = formData.get("email");

  if (!emailname) {
    return { message: "Please enter your email" };
  }

  if (!emailname.includes("@")) {
    return { message: "Please enter a valid email address" };
  }

  try {
    const submitEmail = await fetch("http://localhost:4000/newsletters", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: { emailname },
      }),
    });

    if (submitEmail.ok) {
      return { message: "We couldn't save your email. Please try again" };
    }

    return { message: "You're now subscribed!" };
  } catch (error) {
    return { message: "Something went wrong" };
  }
};

export default newsaction;
