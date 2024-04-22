import Cadastro from "@/components/Cadastro";
import Footer from "@/components/Footer";
import Home from "@/components/Home";

export default function index() {
  return (
    <main className="">
      <div className="w-full border overflow-hidden relative lg:h-[540px] lg:bottom-20">
        <img src="/banner2.png" className="w-full" />
      </div>
      <div className="w-4/5 m-auto flex justify-center lg:flex-nowrap lg:justify-between flex-wrap">
        <Home />
        <Cadastro />
      </div>
      <Footer />
    </main>
  );
}
