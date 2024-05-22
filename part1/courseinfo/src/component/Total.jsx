

export const Total = (props) => {
    const total = props.exercises1 + props.exercises2 +props.exercises3;
  return (
    <div>
        <p>Number of exercises {total}</p>
    </div>
  )
}
