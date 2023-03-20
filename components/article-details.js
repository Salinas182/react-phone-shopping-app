/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Button } from "@mui/material";
import { addArticleToCart } from "lib/articles";
import BasicSelect from "./select";

export function ArticleDetails({ article }) {
  const [color, setColor] = useState();
  const [storage, setStorage] = useState();

  const addArticle = async (articleInfo) => {
    let articlesCount = +sessionStorage.getItem('cartItems');
    try {
      const response = await addArticleToCart(articleInfo);
      articlesCount += response.count;
    } catch (error) {
      toast.error('Error. Asegúrese de seleccionar color y almacenamiento.')
      console.error({ message: error?.response?.data?.message });
    }
    sessionStorage.setItem('cartItems', articlesCount);
    window.dispatchEvent(new Event("storage"));
  }

  return (
    <div className="flex flex-col flex-1 group relative border-solid border-2 border-sky-100 lg:flex-row">
      <div className="basis-1/2 scale-75 overflow-hidden rounded-md bg-gray-200 sm:scale-50">
        <img src={article.imgUrl} alt={article.model} className="h-full w-full object-cover object-center lg:h-full lg:w-full"></img>
      </div>
      <div className="basis-1/2 mt-4 text-center">
        <div className='h-1/2'>
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
        </div>
        <BasicSelect options={article?.options?.colors} label="Color" setValueMethod={setColor} />
        <BasicSelect options={article?.options?.storages} label="Almacenamiento" setValueMethod={setStorage}/>
        <div className='flex justify-center mb-2 content-end mt-4'>
          <Button
            variant="contained"
            className="button"
            onClick={async () => await addArticle({
              id: article.id,
              colorCode: color,
              storageCode: storage
            })}
          >
            Añadir
          </Button>
        </div>
        <Toaster />
      </div>
    </div>
  )
}
