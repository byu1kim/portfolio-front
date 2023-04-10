export default function Contact() {
  return (
    <form className="flex flex-col gap-2">
      <label htmlFor="name"></label>
      <input name="name" className="border p-2" placeholder="name" />
      <label htmlFor="email"></label>
      <input name="email" className="border p-2" placeholder="email" />
      <label htmlFor="message"></label>
      <textarea name="message" className="border p-2" placeholder="message"></textarea>
    </form>
  );
}
