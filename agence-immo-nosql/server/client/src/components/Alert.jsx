export default function Alert({ message, type }) {
  return (
    <div
      className={`px-4 py-2 rounded-md text-white text-center mb-4 ${
        type === "success" ? "bg-green-600" : "bg-red-600"
      }`}
    >
      {message}
    </div>
  );
}
