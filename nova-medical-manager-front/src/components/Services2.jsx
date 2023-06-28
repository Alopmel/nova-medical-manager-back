import { Link, Outlet } from "react-router-dom";
import Card from "./Cards";

function Services() {
  return (
    <section className="pt-20 px-10 lg:pt-[120px] pb-12 lg:pb-[90px] max-w-[1240px] mx-auto bg-[#CCA8D8] bg-opacity-30  backdrop-blur-md">
        <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
            <div className="text-center mx-auto lg:mb-20 max-w-[510px]">
                <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
                ¿Qué Servicios ofrezco?
                </h2>
                <p className="text-base text-body-color">
                There are many variations of passages of Lorem Ipsum available but the majority have
                suffered alteration in some form.
                </p>
            </div>
            </div>
        </div>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  gap-4">
            <Link to="/servicios/community-manager">
            <Card
                imgSrc="https://tailus.io/sources/blocks/stacked/preview/images/avatars/burger.png"
                title="Community Manager"
                description="Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum."
            />
            </Link>
            
            
            <Card
            imgSrc="https://tailus.io/sources/blocks/stacked/preview/images/avatars/trowel.png"
            title="Asesoría Digital"
            description="Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum."
            />
            <Card
            imgSrc="https://tailus.io/sources/blocks/stacked/preview/images/avatars/package-delivery.png"
            title="Estrategia de Contenidos"
            description="Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum."
            />
            <Card
            imgSrc="https://tailus.io/sources/blocks/stacked/preview/images/avatars/package-delivery.png"
            title="Formaciones"
            description="Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum."
            />
        </div>
        <Outlet /> {/* Renderiza los componentes anidados en la ruta "/servicios" */}
    </section>
  )
}

export default Services