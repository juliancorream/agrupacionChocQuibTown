import "./Home.css";
import { History } from "../History/History";
import { Members } from "../Members/Members";

export function Home() {
  return (
    <>
      <section className="banner"></section>

      <section>
        <History />
      </section>

      <section>
        <Members />
      </section>
    </>
  );
}
