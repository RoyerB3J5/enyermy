import { signOut } from "@/auth";

export function LogoutButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button
        type="submit"
        className="px-6 py-3 bg-white text-black rounded-full cursor-pointer  transition-colors duration-300 font-semibold "
      >
        Logout
      </button>
    </form>
  );
}
