import Cadastro from "@/components/Cadastro";
import Footer from "@/components/Footer";
import Home from "@/components/Home";

export default function index() {
  return (
    <main className="">
      <div className="w-full h-96 border border-red-600 mb-20">
        <img src="" alt="" />
      </div>
      <div className="w-4/5 m-auto flex justify-center lg:flex-nowrap lg:justify-between flex-wrap">
        <Home />
        <Cadastro />
      </div>
      <Footer />
    </main>
  );
}
