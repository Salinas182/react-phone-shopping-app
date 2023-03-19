/* eslint-disable @next/next/no-img-element */
import { Button } from "@mui/material";
import BasicSelect from "./select";

export function ArticleDetails({ article }) {
  return (
    <div className="flex flex-1 group relative border-solid border-2 border-sky-100">
      <div className="w-1/2 overflow-hidden rounded-md bg-gray-200">
        <img src={article.imgUrl} alt={article.model} className="h-full w-full object-cover object-center lg:h-full lg:w-full"></img>
      </div>
      <div className="mt-4 text-center w-1/2">
        <p className="text-sm font-medium text-gray-900 mt-2">Marca: {article.brand}</p>
        <p className="text-sm font-medium text-gray-900">Modelo: {article.model}</p>
        <p className="text-sm font-medium text-gray-900">CPU: {article.cpu}</p>
        <p className="text-sm font-medium text-gray-900">RAM: {article.ram}</p>
        <p className="text-sm font-medium text-gray-900">OS: {article.os}</p>
        <p className="text-sm font-medium text-gray-900">Resolución de pantalla: {article.displayResolution}</p>
        <p className="text-sm font-medium text-gray-900">Batería: {article.battery}</p>
        <p className="text-sm font-medium text-gray-900">Cámara principal: {article.primaryCamera}</p>
        <p className="text-sm font-medium text-gray-900">Cámara secundaria: {article.secondaryCmera}</p>
        <p className="text-sm font-medium text-gray-900">Dimensiones: {article.dimentions}</p>
        <p className="text-sm font-medium text-gray-900">Peso: {article.weight}</p>
        <p className="text-sm font-medium text-gray-900 mb-2">Precio: {article.price} €</p>
        <BasicSelect options={article?.options?.colors} label="Color" />
        <BasicSelect options={article?.options?.storages} label="Almacenamiento" />
        <div className='flex justify-center mb-2 content-end mt-4'>
          <Button variant="contained" className="button">
            Añadir
          </Button>
        </div>
      </div>
    </div>
  )
}
