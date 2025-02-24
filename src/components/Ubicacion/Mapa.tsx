import React from "react";

export const Mapa: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-full"> 
      <div className="h-full w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.293235274497!2d-58.62919868477069!3d-34.58804798046159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb7b1b1b1b1b1%3A0x1b1b1b1b1b1b1b1b!2sAusebione%208%2C%20Hurlingham%2C%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1sen!2sau!4v1611812345678!5m2!1sen!2sau"
          width="100%"
          height="100%"
          allowFullScreen={false}
          loading="lazy"
          className="border-2 border-black rounded-lg shadow-lg"
        ></iframe>
      </div>
    </div>
  );
};