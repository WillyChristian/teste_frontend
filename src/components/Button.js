import React from "react";

const Button = () => {
  return (
    <div className="w-1/2 text-center mx-auto">
      <label for="select" className="font-semibold block py-2 w-full">
        Painel administrativo
      </label>
      <div className="relative flex justify-center">
        <div className="h-10 bg-white flex border border-gray-200 rounded items-center">
          <select id="select" className="form-select">
            <option className="block p-2 border-white border-l-4" value="">
              Selecione o painel
            </option>
            <option
              className="p-2 block border-white border-l-4 "
              value="produto"
            >
              Produtos
            </option>
            <option className="block p-2 border-white border-l-4" value="oee">
              OEE
            </option>
            <option
              className="block p-2 border-white border-l-4"
              value="prodPorLitro"
            >
              Prod. por Litro
            </option>
            <option
              className="block p-2 border-white border-l-4"
              value="prodPorLitro"
            >
              Prod. por Hora
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};
export default Button;
