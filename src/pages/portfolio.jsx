import Corte1 from "../assets/img/taperfade1.jpg";
import Corte2 from "../assets/img/taperfade2.jpg";
import Corte3 from "../assets/img/taperfade3.jpg";
import Corte4 from "../assets/img/fade4.jpg";
import Corte5 from "../assets/img/fade5.jpg";
import Corte6 from "../assets/img/fade6.jpg";
import Corte7 from "../assets/img/fade7.jpg";
import Corte8 from "../assets/img/fade8.jpg";
import Corte10 from "../assets/img/fade10.jpg";
import Corte11 from "../assets/img/fade11.jpg";
import Corte12 from "../assets/img/fade12.jpg";
import Corte13 from "../assets/img/fade13.jpg";
import Corte14 from "../assets/img/fade14.jpg";
import Corte15 from "../assets/img/fade15.jpg";
import Corte16 from "../assets/img/fade16.jpg";
import Corte17 from "../assets/img/fade17.jpg";
import Corte18 from "../assets/img/fade18.jpg";
import Corte19 from "../assets/img/fade19.jpg";

export default function PortfolioView() {
  return (
    <section className="mb-24 mx-2">
      <h1 className="text-4xl my-10 text-black dark:text-white">
        Nuestros cortes especiales
      </h1>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 ">
        {/* col1 */}
        <div className="grid gap-4 ">
          <div>
            <img
              className="h-auto max-w-full rounded-xl shadow"
              src={Corte1}
              alt="Corte1"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-xl shadow"
              src={Corte2}
              alt="Corte2"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-xl shadow"
              src={Corte3}
              alt="Corte1"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-xl shadow"
              src={Corte11}
              alt="Corte2"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-xl shadow"
              src={Corte12}
              alt="Corte1"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-xl shadow"
              src={Corte10}
              alt="Corte1"
            />
          </div>
        </div>
        {/* col-2 */}
        <div className="grid gap-4 ">
          <div>
            <img
              className="h-auto max-w-full rounded-xl shadow"
              src={Corte4}
              alt="Corte1"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-xl shadow"
              src={Corte5}
              alt="Corte1"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-xl shadow"
              src={Corte6}
              alt="Corte1"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-xl shadow"
              src={Corte13}
              alt="Corte2"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-xl shadow"
              src={Corte14}
              alt="Corte1"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-xl shadow"
              src={Corte17}
              alt="Corte2"
            />
          </div>
        </div>
        {/* col-3 */}
        <div className="grid gap-4 col-span-2 grid-cols-2 lg:col-span-1 lg:grid-cols-1">
          <div>
            <img
              className="h-auto max-w-full rounded-xl shadow"
              src={Corte7}
              alt="Corte1"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-xl shadow"
              src={Corte8}
              alt="Corte1"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-xl shadow"
              src={Corte15}
              alt="Corte2"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-xl shadow"
              src={Corte16}
              alt="Corte1"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-xl shadow"
              src={Corte18}
              alt="Corte1"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-xl shadow"
              src={Corte19}
              alt="Corte2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
