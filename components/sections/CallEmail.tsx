const content = {
  title: "Suscribe to our VIP list",
  description: "Join our VIP list for exclusive offers and the latest news.",
};
export default function CallEmail() {
  return (
    <section className="w-full flex justify-center items-center flex-col py-30 gap-4 bg-[#EDF5F4] text-primary">
      <h2 className="title-h2 ">{content.title}</h2>
      <p className="paragraph font-normal">{content.description}</p>
      <div className="w-[40%] h-12 rounded-full bg-black"></div>
    </section>
  );
}
