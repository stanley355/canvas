
interface NextLabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

const NextLabel = (props: NextLabelProps) => {
  const { required, children, ...rest } = props;
  return (
    <label {...rest}>
      {props.children}
      {required && <span className="text-red-500">*</span>}
    </label>
  )
}

export default NextLabel 