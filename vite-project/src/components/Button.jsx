const Button = ({ children, type = "button" }) => {
  return (
    <button
      type={type}
      style={{
        width: "100%",
        padding: "12px",
        backgroundColor: "#2563eb",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontWeight: "600",
        fontSize: "16px",
        transition: "all 0.3s ease",
      }}
    >
      {children}
    </button>
  );
};

export default Button;