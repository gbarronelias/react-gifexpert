export const GifItem = ({url, title, id}) => {
  return (
    <div className="card">
        <img key={id} src={url} alt={title}></img>
        <p> {title} </p>
    </div>
  )
}
