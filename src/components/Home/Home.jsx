import Header from "../Header/Header";
import Card from "../Cards/Card";

export default function Home() {
  return (
    <div className="homeComponent">
      <Header></Header>
      <section
        className="cardsContainer"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
        }}
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </div>
  );
}
