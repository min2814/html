export default function Header({ title, navLinks = [] }) {

  const hrefMap = {
    Mentors: "#profiles",
    Plans: "#plans",
    Reviews: "#testimonials",
  };

  return (
    <header className="header">
      <div className="brand">
        <span className="dot" aria-hidden="true"></span>
        <span className="title">{title}</span>
      </div>
      <nav className="nav" aria-label="primary">

        {
          navLinks.map((v, i) => {
            return <a key={i} href={hrefMap[v] || "#"}>{v}</a>
          })
        }
        {/* TODO: navLinks 의 모든 요소를 a 태그로 출력 */}
        {/* 배열 API 중 map 사용 */}
        {/* <a href=''>각 요소</a> */}

      </nav>
    </header>
  );
}
