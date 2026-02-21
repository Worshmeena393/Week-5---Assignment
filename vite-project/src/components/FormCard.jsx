const FormCard = ({ children }) => {
  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        padding: "30px",
        background: "white",
        borderRadius: "10px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
      }}
    >
      {children}
    </div>
  );
};

export default FormCard;
