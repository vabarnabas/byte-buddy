import Layout from "@/components/layout/layout";
import { CopyBlock, dracula } from "react-code-blocks";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center w-full max-w-[1280px] mt-6">
        <div className="relative w-full flex flex-col items-center">
          <div className="flex flex-col items-center gap-y-12 mt-24">
            <p className="font-bold text-4xl md:text-5xl text-center">
              Try out{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
                ByteBuddy
              </span>{" "}
              the AI Programming Instructor
            </p>
            <p className="max-w-3xl text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              quibusdam voluptatum odio! Aspernatur nesciunt laborum illo porro
              sapiente, atque nisi ipsam! Autem sint dolor cumque sapiente quia
              voluptatem voluptas quasi!
            </p>
          </div>
          <div className="flex mt-12 gap-x-4 pb-24">
            <button className="z-10 bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white rounded-md px-5 py-2 font-medium">
              To the Editor
            </button>
            <button className="z-10 border border-pink-500 hover:border-pink-600 text-pink-500 hover:text-pink-600 rounded-md px-5 py-2 font-medium">
              Learn More
            </button>
          </div>
          <div className="inset-0 absolute dotted-background"></div>
        </div>
        <div className="mt-24 grid md:grid-cols-3 gap-y-12 gap-x-12">
          <div className="font-bold text-3xl flex flex-col items-center gap-y-4 p-8 rounded-lg border hover:text-white relative group overflow-hidden cursor-pointer">
            <p className="w-max flex flex-shrink-0 z-10">Step 1</p>
            <p className="text-base font-normal text-center z-10">
              Select the programming language that you would like to solve the
              problem for, and select topics that you already understand in that
              language.
            </p>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-5 group-hover:opacity-40 transition-opacity ease-in-out duration-200"></div>
          </div>
          <div className="font-bold text-3xl flex flex-col items-center gap-y-4 p-8 rounded-lg border hover:text-white relative group overflow-hidden cursor-pointer">
            <p className="w-max flex flex-shrink-0 z-10">Step 2</p>
            <p className="text-base font-normal text-center z-10">
              Wait for buddy to generate a problem for you then try to solve it
              either in the integrated IDE or one on your local machine.
            </p>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-5 group-hover:opacity-60 transition-opacity ease-in-out duration-200"></div>
          </div>
          <div className="font-bold text-3xl flex flex-col items-center gap-y-4 p-8 rounded-lg border hover:text-white relative group overflow-hidden cursor-pointer">
            <p className="w-max flex flex-shrink-0 z-10">Step 3</p>
            <p className="text-base font-normal text-center z-10">
              Submit your solution, then wait for Buddy to analyze it, and
              return whether it was a good solution or not.
            </p>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-5 group-hover:opacity-80 transition-opacity ease-in-out duration-200"></div>
          </div>
        </div>
        <div className="mt-36">
          <p className="font-bold text-3xl mb-4">Example</p>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 items-start">
            <div className="flex flex-col justify-between h-full gap-y-3">
              <p className="">
                {`You are given a JSON object representing a collection of books. Each book has a title (string), author (string), and year of publication (number). Write a JavaScript function that takes in this JSON object and returns an array of book titles published before the year 2000. The array should be sorted in alphabetical order. If there are no books published before the year 2000, the function should return an empty array. You can assume that the JSON object is valid and well-formed.`}
              </p>
              <button className="md:block hidden bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white rounded-md px-5 py-2 font-medium">
                To the Editor
              </button>
            </div>
            <div className="text-sm w-full flex flex-col">
              <CopyBlock
                text={`const getOldBooks = (jsonObject) => {
  const books = jsonObject.books;
  const oldBooks = [];
                 
  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    if (book.year < 2000) {
      oldBooks.push(book.title);
    }
  }
                 
  return oldBooks.sort()};`}
                language="javascript"
                theme={dracula}
              />
            </div>
            <button className="md:hidden bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white rounded-md px-5 py-2 font-medium">
              To the Editor
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
