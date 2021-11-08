export default function Footer() {
  return (
    <footer>
      <style jsx>
        {`
          footer {
            margin-left: var(--nav-width);
            height: 10vh;
            border-top: 1px solid #eaeaea;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
          }
          footer a {
            margin: 0 0.75em;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          svg.footer-icon {
            width: 1.5em;
            margin-right: 0.25em;
          }
        `}
      </style>

      <a href="mailto:TurekBot@gmail.com">
        <svg
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 32 32"
          className="footer-icon"
        >
          <use href="/footer-icons.svg#icon-envelop"></use>
        </svg>
        TurekBot@gmail.com
      </a>
      <a href="https://github.com/TurekBot">
        <svg
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 32 32"
          className="footer-icon"
        >
          <use href="/footer-icons.svg#icon-github"></use>
        </svg>
        TurekBot
      </a>
      <a href="https://www.linkedin.com/in/bradley-turek">
        <svg
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 32 32"
          className="footer-icon"
        >
          <use href="/footer-icons.svg#icon-linkedin"></use>
        </svg>
        Bradley Turek
      </a>
      <a href="https://stackoverflow.com/users/5432315/brad-turek">
        <svg
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 32 32"
          className="footer-icon"
        >
          <use href="/footer-icons.svg#icon-stackoverflow"></use>
        </svg>
        Brad Turek
      </a>
    </footer>
  );
}
