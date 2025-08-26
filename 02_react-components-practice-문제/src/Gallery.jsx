import style from './Gallery.module.css';
import style1 from './FeatureGrid.module.css';
function Gallery(props) {
    return (
        <section className={style1.section}>
            <h2>갤러리 섹션</h2>
            <div className={style.gallery} id="gallery" aria-label="gallery thumbnails">
                {
                    props.images.map((v, i) => {
                        return <div key={i} className={style.thumb}><img src={v.src} alt={v.alt} /></div>
                    })
                }

            </div>
        </section>
    )
}
export default Gallery