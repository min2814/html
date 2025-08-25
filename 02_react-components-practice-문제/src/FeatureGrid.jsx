import style from './FeatureGrid.module.css';




function FeatureGrid(props) {
    return (
        < section className={style.section} id="features" >
            <h2>핵심 컴포넌트 섹션</h2>
            <div className={style.grid}>
                {
                    props.card.map((v) => {
                        return (
                            <article className={style.card}>
                                <div className={style.icon} aria-hidden="true">{v.icon}</div>
                                <h3>{v.title}</h3>
                                <p>{v.text}</p>
                            </article>
                        )
                    })
                }

            </div>
        </section>

    )
}

export default FeatureGrid