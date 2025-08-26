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
  const images = [
    { src: 'http://ggoreb.com/images/food/a.png', alt: '과일' },
    { src: 'http://ggoreb.com/images/food/b.png', alt: '과일' },
    { src: 'http://ggoreb.com/images/food/c.png', alt: '과일' },
    { src: 'http://ggoreb.com/images/food/d.png', alt: '과일' },
    { src: 'http://ggoreb.com/images/food/e.png', alt: '과일' },
    { src: 'http://ggoreb.com/images/food/f.png', alt: '과일' },
  ];


  return (
    <div className="app">
      <Header />
      <Hero />
      <FeatureCard />
      <Gallery images={images} />
      <Footer />
    </div>
  );
}
