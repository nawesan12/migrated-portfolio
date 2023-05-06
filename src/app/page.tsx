import Footer from "@/components/Global/Footer";
import Navigation from "@/components/Global/Navigation";
import About from "@/components/Home/About";
import ContactForm from "@/components/Home/ContactForm";
import Jumbotron from "@/components/Home/Jumbotron";
import ProjectSlider from "@/components/Home/ProjectSlider";

export default function Home() {
  return (
    <>
    <Navigation />
    <main>
      <Jumbotron />
      <About />
      <ProjectSlider />
      <ContactForm />
    </main>
    <Footer />
    </>
  )
}
