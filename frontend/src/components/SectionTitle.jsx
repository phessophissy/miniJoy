function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="section-title" role="group" aria-label={title}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {description ? <p className="lead">{description}</p> : null}
    </div>
  )
}

export default SectionTitle
