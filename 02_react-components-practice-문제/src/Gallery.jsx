import style from './Gallery.module.css';
import style1 from './FeatureGrid.module.css';
function Gallery() {
    return (
        <section className={style1.section}>
            <h2>갤러리 섹션</h2>
            <div className={style.gallery} id="gallery" aria-label="gallery thumbnails">
                <div className={style.thumb}></div>
                <div className={style.thumb}></div>
                <div className={style.thumb}></div>
                <div className={style.thumb}></div>
                <div className={style.thumb}></div>
                <div className={style.thumb}></div>
            </div>
        </section>
    )
}
export default Gallery