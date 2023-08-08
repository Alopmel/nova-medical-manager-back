import Footer from "../components/Footer";
import LandingPage from "../components/LandingPage";
import TrainingBenefits from "../components/TrainingBenefits";
import TrainingProductTwo from "../components/TrainingProductTwo";
import TrainingProducts from "../components/TrainingProducts";

function TrainingPage() {
  return (
    <>
        <LandingPage
            title="Formación"
            description="¡Potencia tu negocio en las redes sociales y alcanza el éxito con nuestros cursos especializados!"
        />
        <TrainingBenefits/>
        <TrainingProducts/>
        <TrainingProductTwo />
        <Footer/>
    </>

  )
}

export default TrainingPage;
