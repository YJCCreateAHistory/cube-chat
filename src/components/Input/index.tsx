import './index.less'

interface IInputProps {
  placeholder?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void
  ref?: React.RefObject<HTMLInputElement>
}

const Input = (props: IInputProps) => {
  const { placeholder = '', onChange, onClick, ref } = props
  return (
    <label className="label">
      <div className="shortcut" onClick={onClick}>⌘K</div>
      <input type="text" className="search_bar" placeholder={placeholder} onChange={onChange} ref={ref}/>
    </label>
  )
}

export default Input
