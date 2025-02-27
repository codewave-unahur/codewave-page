import React from "react";

type SubmitButtonProps = {
  isSubmitting: boolean;
};

const SubmitButton: React.FC<SubmitButtonProps> = ({ isSubmitting }) => {
  return (
    <div className="w-full px-2 mt-4">
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
      >
        {isSubmitting ? "Enviando..." : "Enviar"}
      </button>
    </div>
  );
};

export default SubmitButton;