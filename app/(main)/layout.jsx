import { ensureUser } from "@/actions/auth";

const MainLayout = async ({ children }) => {
  await ensureUser();   // 🔥 creates user if not exists

  return <div className="container mx-auto mt-24 mb-20">{children}</div>;
};

export default MainLayout;
