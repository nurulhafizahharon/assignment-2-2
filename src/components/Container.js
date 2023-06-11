import Genre from "./Genre";

function Container() {
  return (
    <>
      <h1>Movie App</h1>
      <Genre
        movieGenre="Romantic"
        descriptions="Romantic movies often revolve around the timeless theme of love, following the journey of two individuals as they navigate the ups and downs of their relationship. These films explore themes of passion, vulnerability, and the pursuit of happiness, showcasing the power of love to overcome obstacles and touch the hearts of audiences worldwide."
        movieTitles={["The Little Mermaid", "Barbie"]}
        year={["2023", "2023"]}
      />
      <Genre
        movieGenre="Comedy"
        descriptions="Comedy movies are designed to make audiences laugh and provide a light-hearted escape from reality. They often feature humorous situations, witty dialogue, and eccentric characters that engage viewers in a series of comedic mishaps and hilarious misunderstandings. Whether it's slapstick, satire, or clever wordplay, comedy films aim to entertain and uplift, leaving audiences in stitches with their comedic antics."
        movieTitles={["Murder Mystery 2", "Red Notice"]}
        year={["2023", "2021"]}
      />
    </>
  );
}

export default Container;
