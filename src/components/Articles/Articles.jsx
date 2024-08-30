import { BsShopWindow } from "react-icons/bs"; 
import { AiFillShop } from "react-icons/ai"; 
import { useEffect, useState } from "react";
import Style from "./Articles.module.css";
import axios from "axios";
import Swal from "sweetalert2";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const getAllArticles = async () => {
    try {
      const response = await axios.get("http://localhost:3000/articles");
      setArticles(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteArticle = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      try {
        if (result.isConfirmed) {
          const response = await axios.delete(
            `http://localhost:3000/articles/${id}`
          );
          if (response.status === 200) {
            setArticles(articles.filter((article) => article.id !== id));
          }

          Swal.fire({
            title: "Deleted!",
            text: "Your article has been deleted.",
            icon: "success",
          });
        }
      } catch (error) {
        console.log(error);
      }
    });
  };

  useEffect(() => {
    getAllArticles();
  }, []);

  return (
    <div className="pt-4">
      <h2>Articles</h2>
      {/* <button
        onClick={getAllArticles}
        type="submit"
        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        Get All Articles
      </button> */}

      {articles &&
        articles.map((article) => (
          <div
            key={article.id}
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <h1 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {article.title}
            </h1>
            <p className=" bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
              {article.description}
            </p>
            <button
              onClick={() => deleteArticle(article.id)}
              type="submit"
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Delete Article
            </button>
            <BsShopWindow />
          </div>
        ))}
    </div>
  );
}
