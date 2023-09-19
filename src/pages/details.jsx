import barber1 from "../assets/img/worker1.jpg";
import barber2 from "../assets/img/worker4.jpg";
import barber3 from "../assets/img/worker3.jpg";

export default function DetailsView() {
  return (
    <section className="mb-28 mx-8 md:mx-0">
      <h1 className="text-4xl my-10 text-black dark:text-white">Ubicación</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184.78084651795493!2d2.492031838066615!3d42.18251369724077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12bacbfce384da45%3A0x207262d2609ae96e!2sLatin%20barber!5e0!3m2!1ses-419!2ses!4v1695086350990!5m2!1ses-419!2ses"
        height="450"
        className="border-none rounded-xl w-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div>
        <h1 className="text-4xl my-10 pt-6 border-t-2 border-gray-600 text-black dark:text-white">
          Empleados
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex flex-col items-center mb-4">
            <img className="rounded-xl " src={barber1} alt="Hulk" />
            <span className=" dark:text-white text-lg">Juan Pérez</span>
          </div>
          <div className="flex flex-col items-center mb-4">
            <img className="rounded-xl" src={barber2} alt="Iron Man" />
            <span className=" dark:text-white text-lg">Carlos Rodríguez</span>
          </div>
          <div className="flex flex-col items-center mb-4">
            <img className="rounded-xl" src={barber3} alt="Capitan America" />
            <span className=" dark:text-white text-lg">Javier Sánchez</span>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-4xl my-10 pt-6 border-gray-600 text-black dark:text-white border-t-2">
          Horarios
        </h1>
        <div className="w-full md:w-1/2 ">
          <div className="flex justify-between my-8">
            <span>Lunes</span>
            <span>09:00-13:00 - 16:00-20:00</span>
          </div>
          <div className="flex justify-between my-8">
            <span>Martes</span>
            <span>09:00-13:00 - 16:00-20:00</span>
          </div>
          <div className="flex justify-between my-8">
            <span>Miércoles</span>
            <span>09:00-13:00 - 16:00-20:00</span>
          </div>
          <div className="flex justify-between my-8">
            <span>Jueves</span>
            <span>09:00-13:00 - 16:00-20:00</span>
          </div>
          <div className="flex justify-between my-8">
            <span>Viernes</span>
            <span>10:00-20:00</span>
          </div>
          <div className="flex justify-between my-8">
            <span>Sábado</span>
            <span>10:00-20:00</span>
          </div>
          <div className="flex justify-between my-8">
            <span>Domingo</span>
            <span>Cerrado</span>
          </div>
        </div>
      </div>
    </section>
  );
}
