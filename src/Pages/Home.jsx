import { Search, Gear, Heart, Bell } from "react-bootstrap-icons";
import Navigation from "../Components/Navigation";
import Logo from "../Components/Logo";
import ListOfBooks from "../Components/ListOfBooks";
import Feedback from "../Components/Feedback";
import Footer from "../Components/Footer";
import Testimony from "../Components/Testimony";
import Popular from "../Components/Popular";

function Home() {
  return (
    <div className="bg-slate-100">
      <div className="grid grid-cols-12 px-8 py-4">
        <div className="col-span-3 ">
          <span className="">Book</span>
        </div>
        <div className="col-span-6">
          <section className="flex justify-center mt-12">
            <Navigation />
          </section>
        </div>

        <div className="col-span-3">
          <div className="flex px-4 py-2 gap-8">
            <Heart className="w-8 h-8 cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:font-bold duration-300" />
            <Bell className="w-8 h-8 cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:font-bold duration-300" />
            <Gear className="h-8 w-8 cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:font-bold duration-300" />
          </div>
        </div>
      </div>
      <section className="flex justify-center">
        <div className="w-11/12">
          <Logo className="" />
        </div>
      </section>
      <section>
        <div className="w-full">
          <ListOfBooks />
        </div>
      </section>
      <section>
        <Popular />
      </section>
      <section>
        <Feedback />
      </section>
      <section>
        <Testimony />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default Home;
