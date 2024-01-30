export default function LikeImage(props) {
  return (
    <div>
      <button onClick={props.handleCount}>Like Image {props.count}</button>
    </div>
  )
}

