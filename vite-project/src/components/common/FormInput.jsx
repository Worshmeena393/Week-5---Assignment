export default function FormInput({
  label,
  type = "text",
  register,
  name,
  error
}) {
  return (
    <div className="input-group">
      <label>{label}</label>
      <input type={type} {...register(name)} />
      {error && <p className="error">{error}</p>}
    </div>
  );
}
