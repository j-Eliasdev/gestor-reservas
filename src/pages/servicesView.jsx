import { useRef, useState } from "react";
import { Formik, Form, Field } from "formik";
import emailjs from "@emailjs/browser";

export default function ServicesView() {
  const form = useRef();
  const [formSend, SetFormSend] = useState(false);

  function sendEmail() {
    emailjs
      .sendForm(
        "service_642jq9w",
        "template_fnqb319",
        form.current,
        "w2JVhl7DhujQYMLE5"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <section className="mx-8 md:mx-0">
      <h1 className="text-4xl my-10 text-black dark:text-white">
        Rellena tus datos
      </h1>
      <Formik
        initialValues={{
          user_name: "",
          user_email: "",
          Date: "",
          Time: "",
          Servicio: "",
          Peluquero: "",
          message: "",
        }}
        validate={(valores) => {
          let errores = {};

          // Validar Nombre

          if (!valores.user_name) {
            errores.user_name = "Por favor ingresa un nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.user_name)) {
            errores.user_name =
              "El nombre solo puede contener letras y espacios";
          }

          // Validar Email

          if (!valores.user_email) {
            errores.user_email = "Por favor ingresa un email";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.user_email
            )
          ) {
            errores.user_email =
              "El email solo puede contener letras, números, puntos, guiones y guion bajo";
          }
          return errores;
        }}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
          SetFormSend(true);
          sendEmail();
          setTimeout(() => SetFormSend(false), 5000);
        }}
      >
        {({ errors, touched }) => (
          <Form ref={form} className="mb-48">
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Nombre
                </label>
                <Field
                  type="text"
                  name="user_name"
                  id="floating_first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Juan Marte"
                  required
                />
                {errors.user_name && touched.user_name ? (
                  <div className="text-red-600 font-normal italic">
                    {errors.user_name}
                  </div>
                ) : null}
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Email
                </label>
                <Field
                  type="email"
                  name="user_email"
                  id="floating_last_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="ejemplo@gmail.com"
                  required
                />
                {errors.user_email && touched.user_email ? (
                  <div className="text-red-600 font-normal italic">
                    {errors.user_email}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Fecha
                </label>
                <Field
                  type="date"
                  name="Date"
                  id="floating_first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=" "
                  required
                />
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Hora
                </label>
                <Field
                  as="select"
                  id="countries"
                  name="Time"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option>Horas disponible</option>
                  <option value="10:00">10:00</option>
                  <option value="11:00">11:00</option>
                  <option value="12:00">12:00</option>
                  <option value="13:00">13:00</option>
                  <option value="16:00">16:00</option>
                  <option value="17:00">17:00</option>
                  <option value="18:00">18:00</option>
                  <option value="19:00">19:00</option>
                  <option value="20:00">20:00</option>
                </Field>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Servicio
                </label>
                <Field
                  as="select"
                  id="countries"
                  name="Servicio"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option>Escoja el tipo de corte</option>
                  <option value="Solo corte 10€">Solo corte 10€</option>
                  <option value="Corte y barba 12€">Corte y barba 12€</option>
                  <option value="Corte, barba y diseño 15€">
                    Corte, barba y diseño 15€
                  </option>
                  <option value="Solo barba 5€ ">Solo barba 5€</option>
                </Field>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Peluquero
                </label>
                <Field
                  as="select"
                  name="Peluquero"
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option>Cualquiera</option>
                  <option value="Juan Pérez">Juan Pérez</option>
                  <option value="Carlos Rodríguez">Carlos Rodríguez</option>
                  <option value="Javier Sánchez">Javier Sánchez</option>
                </Field>
              </div>
            </div>
            <div className="mb-10">
              <Field
                as="textarea"
                id="message"
                rows="6"
                name="message"
                className="block py-2.5 p-2 w-full text-sm text-gray-900 bg-transparent border-2 rounded-lg border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="Deja una nota (Opcional)"
              ></Field>
            </div>
            <button
              type="submit"
              value="Send"
              className="text-white italic bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Reservar
            </button>{" "}
            {formSend && (
              <div className="mt-2">
                <span className=" text-green-700 font-bold italic">
                  Reserva enviada con éxito!
                </span>
              </div>
            )}
          </Form>
        )}
      </Formik>
    </section>
  );
}
