export default function Alert({ message, type }) {
  const styles = {
    success: "bg-green-500",
    error: "bg-red-500",
    warning: "bg-yellow-500",
  };

  return (
    <div className={`${styles[type]} text-white p-3 rounded`}>
      {message}
    </div>
  );
}
