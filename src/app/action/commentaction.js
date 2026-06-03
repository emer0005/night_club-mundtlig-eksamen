"use server";
const commentaction = async (prevdata, formData) => {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  const name = formData.get("name");
  const email = formData.get("email");
  const content = formData.get("content");
  const date = new Date().toISOString();

  if (!email || !name || !content) {
    return { message: "Please fill in all fields" };
  }

  if (!email.includes("@")) {
    return { message: "Please enter a valid email address" };
  }

  try {
    const submitComment = await fetch("http://localhost:4000/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: { name },
        content: { content },
        date: { date },
      }),
    });

    if (submitComment.ok) {
      return { message: "We couldn't save your comment. Please try again" };
    }

    return { message: "Thanks for your comment" };
  } catch (error) {
    return { message: "Something went wrong" };
  }
};

export default commentaction;
