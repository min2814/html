/* TODO: module 스타일 CSS 가져오기 */
import style from './Section.module.css'

function Nav() {
  const nav = {
    background: "white",
    margin: "16px",
    borderradius: "12px",
    border: "1px solid #eee"
  }
  const div = {
    display: "flex",
    gap: "12px",
    padding: "12px 16px"
  }
  const a = {
    textdecoration: "none",
    padding: "8px 12px",
    borderradius: "8px",
    color: "#333"
  }
  /* TODO: inline 스타일 CSS 작성 */



  return (
    /* TODO: inline 스타일 CSS 적용 */
    <nav style={nav}>
      <div style={div}>
        <a style={a} href="#">홈</a>
        <a style={a} href="#">가이드</a>
        <a style={a} href="#">문의</a>
      </div>
    </nav>
  );
}

/* TODO: module 스타일 CSS 적용 */
function InfoSection() {
  return (
    <section className={style.section}>
      <span className={style.span}>GUIDE</span>
      <h3 className={style.h3}>동일 UI를 다른 방식으로 스타일링</h3>
      <p className={style.p}>
        Nav는 인라인으로, 이 섹션은 CSS Module로 스타일을 적용했습니다.
      </p>
      <a className={style.a} href="#">시작하기</a>
    </section>
  );
}

export default function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#f7f7f8", minHeight: "100vh" }}>

      <header style={{ padding: 24, background: "white", borderBottom: "1px solid #eee" }}>
        <h1 style={{ margin: 0, fontSize: 24 }}>스타일 연습 프로젝트</h1>
        <p style={{ margin: "6px 0 0", color: "#666" }}>
          Nav는 인라인, Section은 CSS Module로 스타일링합니다.
        </p>
      </header>

      {/* 인라인 스타일 컴포넌트 */}
      <Nav />

      {/* CSS Module 컴포넌트 */}
      <InfoSection />
    </div>
  );
}
