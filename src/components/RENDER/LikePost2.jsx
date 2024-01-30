export default function LikePost(props) {
  return (
    <div>
      <button onClick={props.handleCount}>Like Post {props.count}</button>
    </div>
  )
}
