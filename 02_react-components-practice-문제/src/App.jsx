/**
 * ✅ 과제: 순수 HTML 버전(pure-html/index.html)을 참고해,
 *    동일한 구조/디자인을 컴포넌트로 합성하세요.
 */
import FeatureGrid from './FeatureGrid.jsx';
import Gallery from './Gallery.jsx';
import Header from './Header.jsx';
import Hero from './Hero.jsx';
import Footer from './Footer.jsx';
import FeatureCard from './FeatureCard.jsx';



export default function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <FeatureCard />
      <Gallery />
      <Footer />
    </div>
  );
}
