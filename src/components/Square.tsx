interface Props {
  value: Player
  onClick: (i: number) => void
}
enum Player {
  'X',
  'O',
  null,
}

const Square: React.FC<Props> = ({ value, onClick }) => {
  return (
    <button
      type="button"
      onClick={() => onClick(value)}
      className={`btn ${
        value !== null ? (value.toString() === 'X' ? 'btn-x' : 'btn-o') : ''
      }`}
    >
      {value}
    </button>
  )
}

export default Square
