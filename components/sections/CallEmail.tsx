const content = {
  title: "Suscribe to our VIP list",
  description: "Join our VIP list for exclusive offers and the latest news.",
};
export default function CallEmail() {
  return (
    <section className="w-full flex justify-center items-center flex-col py-15 md:py-30 gap-4 bg-[#F5F3F0] text-primary px-4 md:px-0">
      <h2 className="title-h2 ">{content.title}</h2>
      <p className="paragraph font-normal text-center">{content.description}</p>
      <div className="w-full md:w-[40%] h-12 rounded-full bg-black"></div>
    </section>
  );
}
